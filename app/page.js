import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  CardMedia,
} from "@mui/material";
import {
  School,
  Insights,
  Timer,
  CheckCircle,
  DataUsage,
  Person,
  TouchApp,
  FlashOn,
  Storage,
} from "@mui/icons-material"; // Material Icons
import Link from "next/link";
import ProcessForm from "./components/ProcessForm";
// import { useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

const LandingPage = async () => {
  // const { isLoaded, isSignedIn, user } = useUser(); // Get the user details from Clerk
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

  const { userId } = auth();
  const user = await currentUser();
  const isAdmin =
  user && adminEmails.includes(user.emailAddresses[0].emailAddress);

  // console.log(adminEmails.includes(user));

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
          sx={{ fontWeight: 600, fontSize: "75px", color: "#1C3B74" }}
        >
          AI-Driven Professor Recommendation System
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Personalized recommendations to help you find the best professors for
          your courses.
        </Typography>
        <Box sx={{ display: "flex", alignContent: "center", gap: "15px" }}>
          <Link href="/recommendation">
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                background: "linear-gradient(135deg, #62cff4, #02386E)",
                fontSize: "1.1rem",
                color: "#fff",
                paddingX: 3,
                paddingY: 1.5,
                borderRadius: 4,
                textTransform: "none",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)", // Slightly scale up on hover
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Get Started
            </Button>
          </Link>

          {isAdmin && (
            <Link href="/AddProfessor">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 4,
                  background: "linear-gradient(135deg, #62cff4, #02386E)",
                  fontSize: "1.1rem",
                  color: "#fff",
                  paddingX: 3,
                  paddingY: 1.5,
                  borderRadius: 4,
                  textTransform: "none",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)", // Slightly scale up on hover
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Add Professor
              </Button>
            </Link>
          )}
        </Box>
      </Container>

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
            mb: 8,
            mt: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "#1C3B74", fontWeight: "600" }}
          >
            Why Choose ProfSpector?
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{ mt: 2, width: "60%", margin: "auto" }}
          >
            {/* Feature 1 */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: "20px",
                }}

              >
                <TouchApp sx={{ fontSize: 50, color: "#6dd5fa" }} />
                <CardContent>
                  <Typography variant="h6" fontWeight={400}>
                    One-click personalized recommendations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Insights sx={{ fontSize: 50, color: "#6dd5fa" }} />
                <CardContent>
                  <Typography variant="h6" fontWeight={400}>
                    Data-driven insights using AI and comprehensive reviews.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={8}
                sx={{
                  height: "100%",
                  backgroundColor: "#f0f4f8",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <FlashOn sx={{ fontSize: 50, color: "#6dd5fa" }} />
                <CardContent>
                  <Typography variant="h6" fontWeight={400}>
                    Instant results with minimal effort.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Centered Row */}
            <Grid container item xs={12} justifyContent="center" spacing={4}>
              {/* Feature 4 */}
              <Grid item xs={12} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    backgroundColor: "#f0f4f8",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <School sx={{ fontSize: 50, color: "#6dd5fa" }} />
                  <CardContent>
                    <Typography variant="h6" fontWeight={400}>
                      Tailored to your learning preferences and academic goals.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Feature 5 */}
              <Grid item xs={12} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    backgroundColor: "#f0f4f8",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <Storage sx={{ fontSize: 50, color: "#6dd5fa" }} />
                  <CardContent>
                    <Typography variant="h6" fontWeight={400}>
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
          background: "linear-gradient(135deg, #6dd5fa, #fff1eb)",
          background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
          padding: "40px",
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Chatbox */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                width: "70%",
                ml: 9,
                color: "#fff",
                position: "relative",
                borderRadius: "5%",
                overflow: "hidden",
              }}
            >
              {/* Placeholder for the chatbox image */}
              <img
                src="/demo1.jpg"
                alt="Chatbox"
                style={{
                  width: "100%",
                  height: "auto", // Maintain aspect ratio of the image
                  display: "block", // Remove bottom space (if any)
                }}
              />
            </Paper>
          </Grid>

          {/* Right Side: Text with Gradient */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: "#1C3B74",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                }}
              >
                Discover the Perfect Professor, Every Time.
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  background:
                    "linear-gradient(135deg, #62cff4, #6A5ACD, #9B30FF)",
                  background:
                    "radial-gradient(circle at 48.7% 44.3%, rgb(30, 144, 231) 0%, rgb(56, 113, 209) 22.9%, rgb(38, 76, 140) 76.7%, rgb(31, 63, 116) 100.2%)",
                  background:
                    "linear-gradient(109.6deg, rgb(69, 179, 224) 11.2%, rgb(102, 51, 153) 100.2%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  mb: 4,
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

