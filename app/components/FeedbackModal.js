import React from "react";
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
  MenuProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon

const FeedbackModal = ({
  open,
  onClose,
  rating,
  setRating,
  feedback,
  user,
  setFeedback,
  handleSubmit,
  school,
  setSchool,
  professor,
  setProfessor,
  schoolsList,
  professorsList,
}) => {
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

          {/* Choose Professor */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="select-professor-label">
              Choose Professor
            </InputLabel>
            <Select
              labelId="select-professor-label"
              value={professor}
              label="Choose Professor"
              onChange={(e) => setProfessor(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  fontSize: "1rem",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 200, // Adjust this value as needed
                  },
                },
              }}
            >
              {professorsList.map((professorItem) => (
                <MenuItem key={professorItem} value={professorItem}>
                  {professorItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
            disabled={!user}
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
            Submit Feedback
          </Button>
        </Box>
        {!user && (
          <Typography
            // variant="caption"
            sx={{
              mt: 2,
              color: "red", // Color for emphasis
              fontWeight: "bold", // Make the text bold to draw attention
              textAlign: "center", // Center the text for better alignment with form elements
              fontSize:"0.8rem"
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
