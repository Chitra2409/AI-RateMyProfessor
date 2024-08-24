'use client'
import React, { useState } from 'react';
import { Box, Button, Fade, FormControl, Input, Modal, TextField, Typography } from '@mui/material';
import { Pinecone } from '@pinecone-database/pinecone'


const pc = new Pinecone({ apiKey: 'PINECONE_API_KEY' })
const index = pc.index("rag")

const ProfessorForm = () => {
    const [open, setOpen] = useState(false);
    // const [record, setRecord] = useState({
    //     name: '',
    //     email: '',
    //     review: '',
    // });
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
        contact: '',
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        // Handle form submission logic here
        try {
            await index.upsert({
                id: record.name, 
                values:
                    [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
                metadata: {
                    contact: record.contact, 
                    ...record
                }});
            console.log('Record added successfully!');
            handleClose();
        } catch (error) {
            console.error('Error adding record:', error);
        }
    };

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
                        <FormControl onSubmit={handleSubmit} position='relative' sx={{ mt: 2 }}>
                            <TextField label="Name" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.name} onChange={(e) => setRecord({ ...record, name: e.target.value })} />
                            <TextField label="Email" variant="outlined" sx={{ mb: 2, minWidth: '400px' }} value={record.contact} onChange={(e) => setRecord({ ...record, contact: e.target.value })} />
                            <Button type="submit" variant="contained" color="primary">
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
    );
};

export default ProfessorForm;
