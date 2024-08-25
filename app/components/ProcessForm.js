'use client'
import React, { useState } from 'react';
import { Box, Button, Fade, FormControl, Modal, TextField, Typography } from '@mui/material';

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
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
            <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                    <Box
                        sx={{
                            minWidth: '600px',
                            height: 500,
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
                            backgroundColor: 'white'
                            // overflow: 'hidden',

                        }}
                    >
                        <Typography variant="h6" sx={{ m: 2, position: 'absolute', top: 2, left: 2, }}>Add a new professor</Typography>
                        <FormControl position='relative' sx={{ mt: 2 }}>
                            <TextField label="Name" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.name} onChange={(e) => setRecord({ ...record, name: e.target.value })} />
                            <TextField label="Email" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.contact} onChange={(e) => setRecord({ ...record, contact: e.target.value })} />
                            <Button type="submit" variant="contained" color="primary"
                                onClick={handleSubmit}>
                                Submit
                            </Button>
                        </FormControl>
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
