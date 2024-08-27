"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Fade,
  Stack,
  TextField,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProcessForm = () => {
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    fetch("/api/addProfessor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    })
      .then((response) => {
        if (response.ok) {
          handleClose();
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{

        height:"calc(100vh - 64px)"
      }}
    >
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box
            sx={{
              minWidth: "60%", // Reduced the width
              maxWidth: "600px", // Added max-width for responsiveness
              p: 3, // Increased padding for better spacing
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
              overflow: "hidden",
              borderRadius: 2,
              position: "relative",
            }}
          >
            {/* Close button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "#666",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
              Add a New Professor
            </Typography>

            <Stack direction="row" sx={{ display: "flex", gap: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.name}
                  onChange={(e) =>
                    setRecord({ ...record, name: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.contact}
                  onChange={(e) =>
                    setRecord({ ...record, contact: e.target.value })
                  }
                />
                <TextField
                  label="Designation"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.designation}
                  onChange={(e) =>
                    setRecord({ ...record, designation: e.target.value })
                  }
                />
                <TextField
                  label="Profile image"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.profile_image}
                  onChange={(e) =>
                    setRecord({ ...record, profile_image: e.target.value })
                  }
                />
                <TextField
                  label="Department"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.department}
                  onChange={(e) =>
                    setRecord({ ...record, department: e.target.value })
                  }
                />
                <TextField
                  label="Profile summary"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.profile_summary}
                  onChange={(e) =>
                    setRecord({ ...record, profile_summary: e.target.value })
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  label="Work Experience"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.work_experience}
                  onChange={(e) =>
                    setRecord({ ...record, work_experience: e.target.value })
                  }
                />
                <TextField
                  label="Research Interests"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.research_interests}
                  onChange={(e) =>
                    setRecord({ ...record, research_interests: e.target.value })
                  }
                />
                <TextField
                  label="Teaching Philosophy"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.teaching_philosophy}
                  onChange={(e) =>
                    setRecord({
                      ...record,
                      teaching_philosophy: e.target.value,
                    })
                  }
                />
                <TextField
                  label="Courses Taught"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.courses_taught}
                  onChange={(e) =>
                    setRecord({ ...record, courses_taught: e.target.value })
                  }
                />
                <TextField
                  label="Awards And Grants"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.awards_and_grants}
                  onChange={(e) =>
                    setRecord({ ...record, awards_and_grants: e.target.value })
                  }
                />
                <TextField
                  label="Scholarly Activities"
                  variant="outlined"
                  sx={{ mb: 2, minWidth: "400px" }}
                  value={record.scholarly_activities}
                  onChange={(e) =>
                    setRecord({
                      ...record,
                      scholarly_activities: e.target.value,
                    })
                  }
                />
              </Box>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
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
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
      {!open && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
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
      )}
    </Box>
  );
};
export default ProcessForm;
