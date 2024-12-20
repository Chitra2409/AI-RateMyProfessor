import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  Rating,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  IconButton,
  Autocomplete,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon
import toast, { Toaster } from "react-hot-toast";



const FeedbackModal = ({
  open,
  onClose,
  rating,
  setRating,
  feedback,
  user,
  setFeedback,
  school,
  setSchool,
  professor,
  setProfessor,
  schoolsList,
  professorsList,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/addFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          school,
          professor,
          feedback,
          rating,
        }),
      });
      console.log("Data being sent to the API:", {
        user,
        school,
        professor,
        feedback,
        rating,
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit feedback. Please try again.");
      }

      const result = await response.json();
      console.log("Feedback submitted successfully:", result);
      toast.success("Feedback submitted successfully");
      onClose(); // Close modal after successful submission
      setSchool(null);
      setProfessor(null);
      setRating(null);
      setFeedback(null);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="feedback-modal-title"
      aria-describedby="feedback-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          maxWidth: "600px",
          bgcolor: "#ffffff",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          border: "1px solid #ccc",
          background: "linear-gradient(135deg, #f0f4f8, #ffffff)",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="feedback-modal-title"
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#1C3B74",
            textAlign: "center",
            mb: 2,
          }}
        >
          Give Your Feedback
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 3,
          }}
        >
          {/* Choose School */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="select-school-label">Choose School</InputLabel>
            <Select
              labelId="select-school-label"
              value={school}
              label="Choose School"
              onChange={(e) => setSchool(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  fontSize: "1rem",
                },
              }}
            >
              {schoolsList.map((schoolItem) => (
                <MenuItem key={schoolItem} value={schoolItem}>
                  {schoolItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Autocomplete
            options={professorsList}
            getOptionLabel={(option) => option} // Adjust this if your options are objects
            value={professor}
            onChange={(event, newValue) => {
              setProfessor(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Professor"
                variant="outlined"
                fullWidth
              />
            )}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                fontSize: "1rem",
              },
            }}
          />

          {/* Feedback */}
          <TextField
            label="Your Feedback"
            multiline
            rows={5}
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                fontSize: "1rem",
              },
            }}
          />

          {/* Rating */}
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Rating
              name="rating"
              value={rating}
              size="large"
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#FFD700", // Golden color
                },
                "& .MuiRating-iconHover": {
                  color: "#F5DEB3", // Beige color
                },
              }}
            />
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            disabled={!user || isSubmitting}
            sx={{
              mt: 3,
              paddingY: 1.5,
              borderRadius: 3,
              fontSize: "1.1rem",
              background: "linear-gradient(90deg, #62cff4, #02386e)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #5a99f4, #02386e)",
              },
              "&:disabled": {
                background: "grey", // Set a grey background when the button is disabled
                color: "rgba(255, 255, 255, 0.7)", // Lighten the text color
                cursor: "not-allowed", // Change the cursor to indicate not allowed action
              },
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>

          {/* Error Message */}
          {errorMessage && (
            <Typography
              sx={{
                mt: 2,
                color: "red",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "0.8rem",
              }}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
        {!user && (
          <Typography
            sx={{
              mt: 2,
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "0.8rem",
            }}
          >
            Login or Sign Up First
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
