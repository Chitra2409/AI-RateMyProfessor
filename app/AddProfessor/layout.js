import Navbar from "../components/Navbar"
import { Box } from "@mui/material"

// addprofessor layout

export default function AddProfessorLayout({ children }) {
    return (
        <Box sx={{top: '50vh'}}>
            {children}
        </Box>
    )
}