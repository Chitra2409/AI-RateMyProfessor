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
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          width="500px"
          height="700px"
          border="1px solid black"
          p={2}
          spacing={3}
        >
          <Stack
            direction="column"
            spacing={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="100%"
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.role === "assistant" ? "flex-start" : "flex-end"
                }
              >
                <Box
                  bgcolor={
                    message.role === "assistant"
                      ? "primary.main"
                      : "secondary.main"
                  }
                  color="white"
                  borderRadius={16}
                  p={3}
                >
                  {message.content}
                </Box>
              </Fade>
            </Box>
          ))}
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
          >
            Send
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
