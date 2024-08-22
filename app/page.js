import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import { School, Insights, Timer, CheckCircle, DataUsage, Person } from '@mui/icons-material'; // Material Icons

const LandingPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6dd5fa, #ffffff)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h2" gutterBottom>
          AI-Driven Professor Recommendation System
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Personalized recommendations to help you find the best professors for your courses.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Get Started
        </Button>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
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
        </Grid>

        {/* Comparison Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Why Choose ProfSpector Over Traditional Methods?
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', backgroundColor: '#e0f7fa', padding: '20px' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Traditional Methods
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Person sx={{ fontSize: 40, color: '#ff7043' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Ease of Use</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Requires reaching out to seniors or wandering around campus.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ fontSize: 40, color: '#ff7043' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Accuracy of Information</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Varies based on the person consulted; may be biased.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Timer sx={{ fontSize: 40, color: '#ff7043' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Time Efficiency</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Time-consuming; requires physical effort.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Person sx={{ fontSize: 40, color: '#ff7043' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Personalization</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Limited to the opinions of a few people.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <DataUsage sx={{ fontSize: 40, color: '#ff7043' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Comprehensive Data</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Relies on anecdotal evidence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', backgroundColor: '#b2ebf2', padding: '20px' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    ProfSpector
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Person sx={{ fontSize: 40, color: '#42a5f5' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Ease of Use</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    One-click personalized recommendations.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ fontSize: 40, color: '#42a5f5' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Accuracy of Information</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Data-driven insights using AI and comprehensive reviews.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Timer sx={{ fontSize: 40, color: '#42a5f5' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Time Efficiency</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Instant results with minimal effort.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <Person sx={{ fontSize: 40, color: '#42a5f5' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Personalization</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Tailored to your learning preferences and academic goals.
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                    <DataUsage sx={{ fontSize: 40, color: '#42a5f5' }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>Comprehensive Data</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Analyzes extensive data from multiple sources.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
