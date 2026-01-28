"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import {
  School,
  Insights,
  TouchApp,
  FlashOn,
  Storage,
} from "@mui/icons-material"; // Material Icons
import Link from "next/link";
import ProcessForm from "./components/ProcessForm";
// import { useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import FeedbackModal from "./components/FeedbackModal";
import Image from "next/image";
import {
  schoolsList,
  schoolOfComputerScience,
  schoolOfAdvancedEngineering,
  schoolOfBusiness,
  schoolOfDesign,
  schoolOfHealthScience,
  schoolOfLaw,
  schoolOfLiberalStudies,
} from "./constants/professors";

const LandingPage = () => {
  const { user } = useUser();
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

  const isAdmin =
    user && adminEmails.includes(user.emailAddresses[0].emailAddress);

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [openProcessModal, setOpenProcessModal] = useState(false); // State to control ProcessForm modal
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [school, setSchool] = useState("");
  const [professor, setProfessor] = useState("");
  const [professorsList, setProfessorsList] = useState([]);

  const handleOpenFeedbackModal = () => setOpenFeedbackModal(true);
  const handleCloseFeedbackModal = () => setOpenFeedbackModal(false);

  const handleSubmitFeedback = () => {
    console.log("Feedback Submitted: ", {
      school,
      professor,
      rating,
      feedback,
    });
    handleCloseFeedbackModal();
  };

  const handleSchoolChange = (selectedSchool) => {
    setSchool(selectedSchool);
    switch (selectedSchool) {
      case "School of Computer Science":
        setProfessorsList(schoolOfComputerScience);
        break;
      case "School of Advanced Engineering":
        setProfessorsList(schoolOfAdvancedEngineering);
        break;
      case "School of Business":
        setProfessorsList(schoolOfBusiness);
        break;
      case "School of Health Science":
        setProfessorsList(schoolOfHealthScience);
        break;
      case "School of Law":
        setProfessorsList(schoolOfLaw);
        break;
      case "School of Liberal Studies":
        setProfessorsList(schoolOfLiberalStudies);
        break;
      case "School of Design":
        setProfessorsList(schoolOfDesign);
        break;
      default:
        setProfessorsList([]);
    }
  };

  const handleOpenProcessModal = () => setOpenProcessModal(true);
  const handleCloseProcessModal = () => setOpenProcessModal(false);

  return (
    <Box
      sx={{
        backgroundImage: "/background.png",
        // background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}

      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          py: 6,

          height: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          m: 0,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "2.5rem", // small screens
              sm: "3.5rem", // tablets
              md: "4.5rem", // small laptops
              lg: "5rem", // desktops
            },
            color: "#1C3B74",
          }}
        >
          AI-Driven Professor Recommendation System
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1rem", // small screens
              sm: "1.25rem", // tablets
              md: "1.5rem", // small laptops
              lg: "1.75rem", // desktops
            },
          }}
        >
          Personalized recommendations to help you find the best professors for
          your courses.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens, horizontally on larger screens
            alignItems: "center",
            gap: { xs: "10px", sm: "15px" }, // Adjust gap between buttons for different screen sizes
            mt: { xs: 2, sm: 4 }, // Adjust margin-top for different screen sizes
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "linear-gradient(135deg, #62cff4, #02386E)",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: "#fff",
              paddingX: { xs: 2, sm: 3 },
              paddingY: { xs: 1, sm: 1.5 },
              borderRadius: 4,
              textTransform: "none",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
              },
            }}
            onClick={() => {
              if (!user) {
                alert("You must be logged in to access recommendations.");
              } else {
                // Programmatically navigate to /recommendation
                window.location.href = "/recommendation";
              }
            }}
          >
            Get Started
          </Button>

          {isAdmin ? (
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "linear-gradient(135deg, #62cff4, #02386E)",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: "#fff",
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1, sm: 1.5 },
                borderRadius: 4,
                textTransform: "none",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={handleOpenProcessModal} // Open ProcessForm modal
            >
              Add Professor
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1, sm: 1.5 },
                borderRadius: 4,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#02386E",
                  color: "#fff",
                },
              }}
              onClick={handleOpenFeedbackModal}
            >
              Give Feedback
            </Button>
          )}
        </Box>
      </Container>
      <FeedbackModal
        open={openFeedbackModal}
        onClose={handleCloseFeedbackModal}
        rating={rating}
        setRating={setRating}
        feedback={feedback}
        setFeedback={setFeedback}
        handleSubmit={handleSubmitFeedback}
        school={school}
        setSchool={handleSchoolChange}
        professor={professor}
        setProfessor={setProfessor}
        schoolsList={schoolsList}
        professorsList={professorsList}
        user={user}
      />
      <ProcessForm open={openProcessModal} onClose={handleCloseProcessModal} />
      {/* Features Section */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: "#faf0e6",
          background: "linear-gradient(0, #ace0f9, #fff1eb)",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            mb: { xs: 4, md: 8 }, // Adjust bottom margin based on screen size
            mt: { xs: 4, md: 8 }, // Adjust top margin based on screen size
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#1C3B74",
              fontWeight: 600,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }, // Adjust font size for various screen sizes
              marginBottom: { xs: 2, md: 4 }, // Add margin to adjust spacing
            }}
          >
            Why Choose ProfSpector?
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              mt: 2,
              width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, // Adjust width to suit different screens
              margin: "auto",
            }}
          >
            {/* Feature 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: { xs: "15px", md: "20px" }, // Adjust padding based on screen size
                }}
              >
                <TouchApp
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                />{" "}
                {/* Adjust icon size */}
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, // Adjust font size based on screen size
                    }}
                  >
                    One-click personalized recommendations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: { xs: "15px", md: "20px" },
                }}
              >
                <Insights
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Data-driven insights using AI and comprehensive reviews.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: { xs: "15px", md: "20px" },
                }}
              >
                <FlashOn
                  sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Instant results with minimal effort.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Centered Row */}
            <Grid container item xs={12} justifyContent="center" spacing={4}>
              {/* Feature 4 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    backgroundColor: "#f0f4f8",
                    textAlign: "center",
                    padding: { xs: "15px", md: "20px" },
                  }}
                >
                  <School
                    sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      Tailored to your learning preferences and academic goals.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Feature 5 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    backgroundColor: "#f0f4f8",
                    textAlign: "center",
                    padding: { xs: "15px", md: "20px" },
                  }}
                >
                  <Storage
                    sx={{ fontSize: { xs: 40, sm: 50 }, color: "#6dd5fa" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      Analyzes extensive data from multiple sources.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
          padding: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Chatbox */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                width: { xs: "100%", sm: "80%", md: "70%" },
                margin: { xs: "0 auto", md: "0" },
                color: "#fff",
                position: "relative",
                borderRadius: "5%",
                overflow: "hidden",
              }}
            >
              {/* Placeholder for the chatbox image */}
              <Image
                src="/demo1.jpg"
                alt="Chatbox"
                layout="responsive"
                width={700}
                height={475}
              />
            </Paper>
          </Grid>

          {/* Right Side: Text with Gradient */}
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: "#1C3B74",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                }}
              >
                Discover the Perfect Professor, Every Time.
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  background:
                    "linear-gradient(109.6deg, rgb(69, 179, 224) 11.2%, rgb(102, 51, 153) 100.2%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2.25rem" },
                  mb: { xs: 2, md: 4 },
                }}
              >
                Find the best match for your academic journey, powered by
                AI-driven insights.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* </Container> */}
    </Box>
  );
};

export default LandingPage;
