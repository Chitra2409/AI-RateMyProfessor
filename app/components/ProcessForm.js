'use client'
import React, { useState, useEffect } from 'react';
import { Box, Button, Fade, Stack, TextField, Typography, Modal, Select, MenuItem, InputLabel } from '@mui/material';

const ProcessForm = () => {
    const [open, setOpen] = useState(false);

    const [record, setRecord] = useState({
        name: '',
        designation: '',
        profile_image: '',
        department: '',
        profile_summary: '',
        work_experience: '',
        research_interests: '',
        teaching_philosophy: '',
        courses_taught: '',
        awards_and_grants: '',
        scholarly_activities: '',
        contact: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        // Set errorMessage only if email doesn't contain @
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(record.contact)) {
            setErrorMessage("Invalid email address");
        } else {
            setErrorMessage("");
        }

    }, [record.contact, errorMessage]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {
        fetch('/api/addProfessor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record),
        }).then(response => {
            if (response.ok) {
                handleClose();
                setRecord({
                    name: '',
                    designation: '',
                    profile_image: '',
                    department: '',
                    profile_summary: '',
                    work_experience: '',
                    research_interests: '',
                    teaching_philosophy: '',
                    courses_taught: '',
                    awards_and_grants: '',
                    scholarly_activities: '',
                    contact: ''
                })
            } else {
                console.error('Error adding professor:', response.statusText);
            }
        })
            .catch(error => {
                console.error('Network error:', error);
            });
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                    <Box
                        sx={{
                            minWidth: '60%',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 4px 8px #333',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            overflow: 'hidden',

                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 600, background: 'linear-gradient(135deg, #6dd5fa, #ffffff)', width: '100%', padding: 2, textAlign: 'center', mb: 4 }}>Add a new professor</Typography>
                        <Stack direction="row" sx={{ display: 'flex', gap: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
                                <TextField label="Name" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.name} onChange={(e) => setRecord({ ...record, name: e.target.value })} />
                                <TextField
                                    label="Email" 
                                    variant="outlined" type='email'
                                    error={errorMessage && record.contact !== ''}
                                    id="outlined-error-helper-text"
                                    defaultValue=""
                                    helperText={errorMessage} sx={{ mb: 2, minWidth: '400px' }} value={record.contact} onChange={(e) => setRecord({ ...record, contact: e.target.value })} />
                                <TextField label="Designation" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.designation} onChange={(e) => setRecord({ ...record, designation: e.target.value })} />
                                <TextField label="Profile image" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.profile_image} onChange={(e) => setRecord({ ...record, profile_image: e.target.value })} />
                                <TextField
                                    sx={{ mb: 2, minWidth: '400px', color: 'primary' }}
                                    value={record.department}
                                    label="Department"
                                    select
                                    onChange={(e) => setRecord({ ...record, department: e.target.value })}
                                >

                                    <MenuItem key={1} value='School of Computer Science'>School of Computer Science</MenuItem>
                                    <MenuItem key={2} value='School of Law'>School of Law</MenuItem>
                                    <MenuItem key={3} value='School of Liberal Studies'>School of Liberal Studies</MenuItem>
                                    <MenuItem key={4} value='School of Design'>School of Design</MenuItem>
                                    <MenuItem key={5} value='School of Business'>School of Business</MenuItem>
                                    <MenuItem key={6} value='School of Advanced Engineering'>School of Advanced Engineering</MenuItem>
                                    <MenuItem key={7} value='School of Health Science'>School of Health Science</MenuItem>
                                </TextField>
                                <TextField label="Profile summary" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.profile_summary} onChange={(e) => setRecord({ ...record, profile_summary: e.target.value })} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField label="Work Experience" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.work_experience} onChange={(e) => setRecord({ ...record, work_experience: e.target.value })} />
                                <TextField label="Research Interests" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.research_interests} onChange={(e) => setRecord({ ...record, research_interests: e.target.value })} />
                                <TextField label="Teaching Philosophy" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.teaching_philosophy} onChange={(e) => setRecord({ ...record, teaching_philosophy: e.target.value })} />
                                <TextField label="Courses Taught" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.courses_taught} onChange={(e) => setRecord({ ...record, courses_taught: e.target.value })} />
                                <TextField label="Awards And Grants" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.awards_and_grants} onChange={(e) => setRecord({ ...record, awards_and_grants: e.target.value })} />
                                <TextField label="Scholarly Activities" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.scholarly_activities} onChange={(e) => setRecord({ ...record, scholarly_activities: e.target.value })} />
                            </Box>
                        </Stack>
                        <Button type="submit" variant="contained" color="primary" sx={{
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
                        }} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Box>
                </Fade>
            </Modal>
            {
                !open && (
                    <Button variant="contained" color="primary" onClick={handleOpen}
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
                        }}>
                        Add professor
                    </Button>
                )
            }
        </Box >
    )
}

export default ProcessForm;
