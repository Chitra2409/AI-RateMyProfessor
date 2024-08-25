'use client'
import React, { useState } from 'react';
import { Box, Button, Fade, FormControl, Modal, Stack, TextField, Typography } from '@mui/material';

const ProcessForm = () => {
    const [open, setOpen] = useState(false);

    const [record, setRecord] = useState(
        {
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

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {

        fetch('/api/addProfessor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record),
        }).then(response => {
            if (response.ok) {
                // Handle successful response here
                // close the modal:
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
                // Handle other response statuses (e.g., error handling)
                console.error('Error adding professor:', response.statusText);
            }
        })
            .catch(error => {
                // Handle any network or other errors
                console.error('Network error:', error);
            });
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" 
         >
            <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                    <Box
                        sx={{
                            minWidth: '60%',
                            height: screen,
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
                        <Typography variant="h5" sx={{position: 'absolute', top: 4, left: 2, fontWeight:600 , background: 'linear-gradient(135deg, #6dd5fa, #ffffff)', width:'100%', padding:2 }}>Add a new professor</Typography>
                        <Stack position='relative' direction='row' sx={{ mt: 14, display: 'flex', gap: 4, mr: 4 }}>
                            <Box sx={{ mr: 4, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
                                <TextField label="Name" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.name} onChange={(e) => setRecord({ ...record, name: e.target.value })} />
                                <TextField label="Email" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.contact} onChange={(e) => setRecord({ ...record, contact: e.target.value })} />
                                <TextField label="Designation" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.designation} onChange={(e) => setRecord({ ...record, designation: e.target.value })} />
                                <TextField label="Profile image" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.profile_image} onChange={(e) => setRecord({ ...record, profile_image: e.target.value })} />
                                <TextField label="Department" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.department} onChange={(e) => setRecord({ ...record, department: e.target.value })} />
                                <TextField label="Profile summary" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.profile_summary} onChange={(e) => setRecord({ ...record, profile_summary: e.target.value })} />
                            </Box>
                            <Box sx={{ mr: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField label="Work Experience" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.work_experience} onChange={(e) => setRecord({ ...record, work_experience: e.target.value })} />
                                <TextField label="Research Interests" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.research_interests} onChange={(e) => setRecord({ ...record, research_interests: e.target.value })} />
                                <TextField label="Teaching Philosophy" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.teaching_philosophy} onChange={(e) => setRecord({ ...record, teaching_philosophy: e.target.value })} />
                                <TextField label="Courses Taught" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.courses_taught} onChange={(e) => setRecord({ ...record, courses_taught: e.target.value })} />
                                <TextField label="Awards And Grants" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.awards_and_grants} onChange={(e) => setRecord({ ...record, awards_and_grants: e.target.value })} />
                                <TextField label="Scholarly Activities" multiline rows={3} variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.scholarly_activities} onChange={(e) => setRecord({ ...record, scholarly_activities: e.target.value })} />
                            </Box>
                        </Stack>
                        <Button type="submit" variant="contained" color="primary"
                        sx={{ width: '30%', height: '100%' , mt:4}}
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Box>
                </Fade>
            </Modal>
            {
                !open && (
                    <Button variant="contained" color="primary" onClick={handleOpen} style={{ position: 'absolute' }}>
                        Add professor
                    </Button>
                )
            }
        </Box >
    )
}

export default ProcessForm;
