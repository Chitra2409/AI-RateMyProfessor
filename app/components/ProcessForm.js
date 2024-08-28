import React, { useState } from "react";
import {
  Box,
  Button,
  Fade,
  Stack,
  TextField,
  Typography,
  Modal,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon


const ProcessForm = ({ open, onClose }) => {
  const [record, setRecord] = useState({
    name: "",
    designation: "",
    profile_image: "",
    department: "",
    profile_summary: "",
    work_experience: "",
    research_interests: "",
    teaching_philosophy: "",
    courses_taught: "",
    awards_and_grants: "",
    scholarly_activities: "",
    contact: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
    } else {
      setErrorMessage("");
    }

    setRecord({ ...record, contact: email });
  };

  const handleSubmit = async () => {
    if (errorMessage || !record.contact) {
      return; // Prevent submission if email is invalid or empty
    }

    fetch("/api/addProfessor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    })
      .then((response) => {
        if (response.ok) {
          onClose(); // Close the modal after successful submission
          setRecord({
            name: "",
            designation: "",
            profile_image: "",
            department: "",
            profile_summary: "",
            work_experience: "",
            research_interests: "",
            teaching_philosophy: "",
            courses_taught: "",
            awards_and_grants: "",
            scholarly_activities: "",
            contact: "",
          });
        } else {
          console.error("Error adding professor:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Box
          sx={{
            minWidth: "60%",
            maxWidth: "600px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1C3B74",
              textAlign: "center",
              mb: 4,
            }}
          >
            Add a New Professor
          </Typography>
          <Stack direction="row" sx={{ width: "100%", gap: 3 }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={record.name}
                onChange={(e) => setRecord({ ...record, name: e.target.value })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                error={Boolean(errorMessage)}
                helperText={errorMessage}
                fullWidth
                value={record.contact}
                onChange={handleEmailChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Designation"
                variant="outlined"
                fullWidth
                value={record.designation}
                onChange={(e) =>
                  setRecord({ ...record, designation: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Profile Image URL"
                variant="outlined"
                fullWidth
                value={record.profile_image}
                onChange={(e) =>
                  setRecord({ ...record, profile_image: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <FormControl fullWidth>
                <InputLabel id="select-department-label">Department</InputLabel>
                <Select
                  labelId="select-department-label"
                  value={record.department}
                  label="Department"
                  onChange={(e) =>
                    setRecord({ ...record, department: e.target.value })
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                    },
                  }}
                >
                  <MenuItem value="School of Computer Science">
                    School of Computer Science
                  </MenuItem>
                  <MenuItem value="School of Law">School of Law</MenuItem>
                  <MenuItem value="School of Liberal Studies">
                    School of Liberal Studies
                  </MenuItem>
                  <MenuItem value="School of Design">School of Design</MenuItem>
                  <MenuItem value="School of Business">
                    School of Business
                  </MenuItem>
                  <MenuItem value="School of Advanced Engineering">
                    School of Advanced Engineering
                  </MenuItem>
                  <MenuItem value="School of Health Science">
                    School of Health Science
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Profile Summary"
                variant="outlined"
                fullWidth
                value={record.profile_summary}
                onChange={(e) =>
                  setRecord({ ...record, profile_summary: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Work Experience"
                variant="outlined"
                fullWidth
                value={record.work_experience}
                onChange={(e) =>
                  setRecord({ ...record, work_experience: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Research Interests"
                variant="outlined"
                fullWidth
                value={record.research_interests}
                onChange={(e) =>
                  setRecord({
                    ...record,
                    research_interests: e.target.value,
                  })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Teaching Philosophy"
                variant="outlined"
                fullWidth
                value={record.teaching_philosophy}
                onChange={(e) =>
                  setRecord({
                    ...record,
                    teaching_philosophy: e.target.value,
                  })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Courses Taught"
                variant="outlined"
                fullWidth
                value={record.courses_taught}
                onChange={(e) =>
                  setRecord({ ...record, courses_taught: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Awards and Grants"
                variant="outlined"
                fullWidth
                value={record.awards_and_grants}
                onChange={(e) =>
                  setRecord({ ...record, awards_and_grants: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
              <TextField
                label="Scholarly Activities"
                variant="outlined"
                fullWidth
                value={record.scholarly_activities}
                onChange={(e) =>
                  setRecord({
                    ...record,
                    scholarly_activities: e.target.value,
                  })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              mt: 3,
              backgroundColor: "#1C3B74",
              "&:hover": {
                backgroundColor: "#153E6E",
              },
            }}
          >
            Add Professor
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProcessForm;
