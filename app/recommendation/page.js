"use client";
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Fade,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the Rate My Professor support assistant. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSchoolOptions, setShowSchoolOptions] = useState(true); // New state to show school options
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSchoolSelection = (school) => {
    setMessages((messages) => [
      ...messages,
      { role: "user", content: school },
      {
        role: "assistant",
        content: `You selected ${school}. How can I assist you with the professors in this school?`,
      },
    ]);
    setShowSchoolOptions(false); // Hide options after selection
  };

  const sendMessage = async () => {
    if (message.trim() === "") return;

    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    setMessage("");
    setIsLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let result = "";
    reader.read().then(function processText({ done, value }) {
      if (done) {
        setIsLoading(false);
        return result;
      }

      const text = decoder.decode(value || new Uint8Array(), { stream: true });
      setMessages((messages) => {
        const lastMessage = messages[messages.length - 1];
        const otherMessages = messages.slice(0, messages.length - 1);
        return [
          ...otherMessages,
          { ...lastMessage, content: lastMessage.content + text },
        ];
      });

      return reader.read().then(processText);
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        // background: "linear-gradient(135deg, #6dd5fa, #ffffff)",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: "600px",
          height: "80vh",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 3,
          bgcolor: "#f9f9f9",
          boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Chat Messages */}
        <Stack
          direction="column"

          spacing={3}
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            padding: 2,
            maxHeight: "100%", 
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Fade in>
                <Box
                  component={Paper}
                  elevation={2}
                  sx={{
                    maxWidth: "75%",
                    padding: 2,
                    borderRadius: 4,
                    bgcolor:
                      message.role === "assistant" ? "#e1f5fe" : "#bbdefb",
                    color: "#333",
                    wordWrap: "break-word",
                    boxShadow:
                      message.role === "assistant"
                        ? ""
                        : "0px 2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    {message.content}
                  </Typography>
                </Box>
              </Fade>
            </Box>
          ))}

          {/* School Options */}
          {showSchoolOptions && (
            <Stack direction="column" spacing={2} mt={3}>
              <Typography variant="body2">
                Please select the school you want to ask about:
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Computer Science")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Computer Science
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Advanced Engineering")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Advanced Engineering
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Design")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Design
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Health Sciences")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Health Science
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Law")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Law
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Business")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Business
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSchoolSelection("School of Liberal Studies")}
                sx={{ bgcolor: "#0288d1", color: "#fff" }}
              >
                School of Liberal Studies
              </Button>
            </Stack>
          )}
          <div ref={chatEndRef} />
        </Stack>

        {/* Loading Indicator */}
        {isLoading && (
          <Box display="flex" justifyContent="center" mb={2}>
            <CircularProgress size={24} sx={{ color: "#0288d1" }} />
          </Box>
        )}

        {/* Input and Send Button */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <TextField
            label="Type your message..."
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              bgcolor: "#ffffff",
              borderRadius: 4,
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
              },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            disabled={showSchoolOptions} // Disable input while choosing school
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            endIcon={<SendIcon />}
            sx={{
              bgcolor: "#0288d1",
              color: "#fff",
              paddingX: 3,
              borderRadius: 4,
              "&:hover": {
                bgcolor: "#0277bd",
              },
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            disabled={showSchoolOptions} // Disable button while choosing school
          >
            Send
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
