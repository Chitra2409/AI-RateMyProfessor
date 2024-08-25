import Navbar from "../components/Navbar"
import { Box, Container } from "@mui/material"

// addprofessor layout

export default function AddProfessorLayout({ children }) {
    return (
        <Container disableGutters sx={{
            // background: 'linear-gradient(135deg, #6dd5fa, #ffffff)',
            height: '100vh',
            width:'100vw',
        }}>

            <Box sx={{ top: '50vh' }}>
                {children}
            </Box>
        </Container>
    )
}