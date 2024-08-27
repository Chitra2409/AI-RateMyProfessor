import { Box, Container } from "@mui/material";
// addprofessor layout

export default function AddProfessorLayout({ children }) {

  return (
    <Container
      disableGutters
      sx={{
        height: "calc(100vh-64px)",
        width: "100vw",
      }}
    >
      <Box sx={{ top: "50vh" }}>{children}</Box>
    </Container>
  );
}
