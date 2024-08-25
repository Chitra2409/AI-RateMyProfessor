import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material';
import { School, Insights, Timer, CheckCircle, DataUsage, Person } from '@mui/icons-material'; // Material Icons
import Link from "next/link";

const LandingPage = () => {
  return (
    <Box
      sx={{
        // background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
        backgroundImage: '/background.png',
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h2" gutterBottom>
          AI-Driven Professor Recommendation System
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Personalized recommendations to help you find the best professors for
          your courses.
        </Typography>
        <Link href="/recommendation">
          <Button variant="contained" color="primary" sx={{ mt: 4 }}>
            Get Started
          </Button>
        </Link>

        {/* Features Section */}
        {/* <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: '#f0f4f8', textAlign: 'center', padding: '20px' }}>
              <School sx={{ fontSize: 50, color: '#6dd5fa' }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Personalized Recommendations
                </Typography>
                <Typography variant="body1">
                  Receive suggestions tailored to your academic goals, based on ratings, reviews, and teaching styles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: '#f0f4f8', textAlign: 'center', padding: '20px' }}>
              <Insights sx={{ fontSize: 50, color: '#6dd5fa' }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Advanced AI Integration
                </Typography>
                <Typography variant="body1">
                  Leverage the power of OpenAI's GPT-4 and Pinecone's vector similarity search to find the best professor matches.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: '#f0f4f8', textAlign: 'center', padding: '20px' }}>
              <Timer sx={{ fontSize: 50, color: '#6dd5fa' }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Real-Time Interaction
                </Typography>
                <Typography variant="body1">
                  Enjoy a responsive and interactive user experience with real-time recommendations delivered via streaming.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                background: "linear-gradient(135deg, #f0f4f8 0%, #e6e9ef 100%)",
                textAlign: "center",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <School
                sx={{
                  fontSize: 60,
                  color: "#6dd5fa",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#4a90e2",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Personalized Recommendations
                </Typography>
                <Typography variant="body1">
                  Receive suggestions tailored to your academic goals, based on
                  ratings, reviews, and teaching styles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                background: "linear-gradient(135deg, #f0f4f8 0%, #e6e9ef 100%)",
                textAlign: "center",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Insights
                sx={{
                  fontSize: 60,
                  color: "#6dd5fa",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#4a90e2",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Advanced AI Integration
                </Typography>
                <Typography variant="body1">
                  Leverage the power of OpenAI's GPT-4 and Pinecone's vector
                  similarity search to find the best professor matches.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                background: "linear-gradient(135deg, #f0f4f8 0%, #e6e9ef 100%)",
                textAlign: "center",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Timer
                sx={{
                  fontSize: 60,
                  color: "#6dd5fa",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#4a90e2",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Real-Time Interaction
                </Typography>
                <Typography variant="body1">
                  Enjoy a responsive and interactive user experience with
                  real-time recommendations delivered via streaming.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Comparison Section */}
        {/* <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Why Choose ProfSpector Over Traditional Methods?
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#e0f7fa",
                  padding: "20px",
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Traditional Methods
                  </Typography>
                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Ease of Use
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Requires reaching out to seniors or wandering around campus.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <CheckCircle sx={{ fontSize: 40, color: "#ff7043" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Accuracy of Information
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Varies based on the person consulted; may be biased.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Timer sx={{ fontSize: 40, color: "#ff7043" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Time Efficiency
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Time-consuming; requires physical effort.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Personalization
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Limited to the opinions of a few people.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <DataUsage sx={{ fontSize: 40, color: "#ff7043" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Comprehensive Data
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Relies on anecdotal evidence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#b2ebf2",
                  padding: "20px",
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    ProfSpector
                  </Typography>
                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Ease of Use
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    One-click personalized recommendations.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <CheckCircle sx={{ fontSize: 40, color: "#42a5f5" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Accuracy of Information
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Data-driven insights using AI and comprehensive reviews.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Timer sx={{ fontSize: 40, color: "#42a5f5" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Time Efficiency
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Instant results with minimal effort.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Personalization
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Tailored to your learning preferences and academic goals.
                  </Typography>

                  <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                    <DataUsage sx={{ fontSize: 40, color: "#42a5f5" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Comprehensive Data
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Analyzes extensive data from multiple sources.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> */}
        {/* <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Why Choose ProfSpector Over Traditional Methods?
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#ffebee",
                  padding: "30px",
                  textAlign: "center",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#e53935" }}
                  >
                    Traditional Methods
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Person sx={{ fontSize: 50, color: "#e53935" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Ease of Use
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Requires reaching out to seniors or wandering around
                      campus.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <CheckCircle sx={{ fontSize: 50, color: "#e53935" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Accuracy of Information
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Varies based on the person consulted; may be biased.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Timer sx={{ fontSize: 50, color: "#e53935" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Time Efficiency
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Time-consuming; requires physical effort.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Person sx={{ fontSize: 50, color: "#e53935" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Personalization
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Limited to the opinions of a few people.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <DataUsage sx={{ fontSize: 50, color: "#e53935" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Comprehensive Data
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Relies on anecdotal evidence.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#e3f2fd",
                  padding: "30px",
                  textAlign: "center",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#1e88e5" }}
                  >
                    ProfSpector
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Person sx={{ fontSize: 50, color: "#1e88e5" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Ease of Use
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      One-click personalized recommendations.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <CheckCircle sx={{ fontSize: 50, color: "#1e88e5" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Accuracy of Information
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Data-driven insights using AI and comprehensive reviews.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Timer sx={{ fontSize: 50, color: "#1e88e5" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Time Efficiency
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Instant results with minimal effort.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Person sx={{ fontSize: 50, color: "#1e88e5" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Personalization
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Tailored to your learning preferences and academic goals.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <DataUsage sx={{ fontSize: 50, color: "#1e88e5" }} />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Comprehensive Data
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Analyzes extensive data from multiple sources.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> */}

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Why Choose ProfSpector Over Traditional Methods?
          </Typography>

          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="comparison table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Feature
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Traditional Methods
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    ProfSpector
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Row 1 */}
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Ease of Use
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="body2">
                        Requires reaching out to seniors or wandering around
                        campus.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="body2">
                        One-click personalized recommendations.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 2 */}
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Accuracy of Information
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="body2">
                        Varies based on the person consulted; may be biased.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="body2">
                        Data-driven insights using AI and comprehensive reviews.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 3 */}
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Time Efficiency
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Timer sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="body2">
                        Time-consuming; requires physical effort.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Timer sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="body2">
                        Instant results with minimal effort.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 4 */}
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Personalization
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="body2">
                        Limited to the opinions of a few people.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="body2">
                        Tailored to your learning preferences and academic
                        goals.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 5 */}
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Comprehensive Data
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <DataUsage sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="body2">
                        Relies on anecdotal evidence.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <DataUsage sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="body2">
                        Analyzes extensive data from multiple sources.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Why Choose ProfSpector Over Traditional Methods?
          </Typography>

          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="A vs B comparison table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Traditional Methods
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    ProfSpector
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Row 1: Ease of Use */}
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Requires effort
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Reaching out to seniors or wandering around campus.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        One-click
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Personalized recommendations in one click.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 2: Accuracy of Information */}
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Inconsistent
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Based on opinions; potentially biased.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Data-driven
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        AI insights and reviews for accuracy.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 3: Time Efficiency */}
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Timer sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Time-consuming
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Requires physical effort and time.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Timer sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Fast
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Instant results with minimal effort.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 4: Personalization */}
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Limited
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Based on the opinions of a few people.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Highly Personalized
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Tailored to your preferences and goals.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 5: Comprehensive Data */}
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <DataUsage sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Anecdotal
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Relies on anecdotal evidence.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <DataUsage sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        Data-rich
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Analyzes extensive data from multiple sources.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Why Choose ProfSpector Over Traditional Methods?
          </Typography>

          <TableContainer
            component={Paper}
            sx={{ mt: 4, boxShadow: "none", backgroundColor: "transparent" }}
          >
            <Table
              sx={{ minWidth: 650, borderCollapse: "collapse" }}
              aria-label="A vs B comparison table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                      borderBottom: "none",
                    }}
                  >
                    Traditional Methods
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "18px",
                      borderBottom: "none",
                    }}
                  >
                    ProfSpector
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Row 1: Ease of Use */}
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Requires Effort
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Reaching out to seniors or wandering around campus.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        One-click
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Personalized recommendations in one click.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 2: Accuracy of Information */}
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Inconsistent
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Based on opinions; potentially biased.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Data-driven
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        AI insights and reviews for accuracy.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 3: Time Efficiency */}
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Timer sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Time-consuming
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Requires physical effort and time.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Timer sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Fast
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Instant results with minimal effort.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 4: Personalization */}
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Limited
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Based on the opinions of a few people.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "24px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Person sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Highly Personalized
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Tailored to your preferences and goals.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>

                {/* Row 5: Comprehensive Data */}
                <TableRow>
                  <TableCell sx={{ textAlign: "center", padding: "24px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <DataUsage sx={{ fontSize: 40, color: "#ff7043" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Anecdotal
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Relies on anecdotal evidence.
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", padding: "24px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <DataUsage sx={{ fontSize: 40, color: "#42a5f5" }} />
                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold" }}
                      >
                        Data-rich
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        Analyzes extensive data from multiple sources.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
