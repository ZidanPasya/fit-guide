import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBotImg from '../assets/images/chat-bot.png';
import { chatBotOptions, fetchData } from '../utils/fetchData';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    try {
      setIsLoading(true);
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key':
            '0341c258f1mshb28d132a870ca52p1b9925jsn40795b5cae00',
          'X-RapidAPI-Host': 'lemurbot.p.rapidapi.com',
        },
        body: JSON.stringify({
          bot: 'dilly',
          client: 'ca55769b-e5b6-4bb2-bc2f-258bc8fa7f8c',
          message: `${inputMessage} dalam bahasa indonesia`,
        }),
      };
      // berikan saya rekomendasi workout untuk pemula berikan jawaban dalam bahasa indonesia
      const response = await fetch(
        'https://lemurbot.p.rapidapi.com/chat',
        options
      );

      if (response.status === 200) {
        const responseJson = await response.json();
        const { input, output } = responseJson.data.conversation;

        setMessages([...messages, { input, output }]);
      } else {
        console.error('Gagal mengambil respons dari Chatbot API');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setInputMessage('');
      setIsLoading(false);
      console.log(messages);
    }
  };
  return (
    <Paper
      sx={{
        '@media (max-width: 600px)': {
          width: '200px',
          minHeight: '140px',
        },
        '@media (min-width: 601px)': {
          width: '400px',
          minHeight: '200px',
        },
      }}
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)',
      }}
    >
      <Stack
        sx={{
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px',

            borderBottom: '1px solid #D1D1D1',
          }}
        >
          {' '}
          <Typography variant='h6'>FitBot</Typography>
          <IconButton style={{ alignSelf: 'flex-end' }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            p: 2,
            maxHeight: '400px',
            overflowY: 'scroll',
            minHeight: '300px',
          }}
        >
          {messages?.map((message, index) => (
            <Stack
              key={index}
              sx={{
                gap: '30px',
                marginBottom: '30px',
                lineHeight: '26px',
              }}
            >
              <Typography
                variant='p'
                fontWeight='bold'
                sx={{
                  textAlign: message.input ? 'right' : 'left',
                  background: message.input ? '#EEE' : '#0074D9',
                  padding: 2,
                  color: message.input ? '#333' : 'white',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  borderTopLeftRadius: '10px',
                }}
              >
                {message.input}
              </Typography>
              <Typography
                variant='p'
                fontSize='20px'
                sx={{
                  background: message.output && '#124C6E',
                  padding: 2,
                  color: message.output && 'white',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              >
                {message.output}
              </Typography>
            </Stack>
          ))}
          {messages?.length === 0 && (
            <Stack
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <img src={ChatBotImg} alt='Chat Bot' width='240' height='240' />
            </Stack>
          )}
        </Box>
        <Box display='flex'>
          <TextField
            fullWidth
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder='Tanya saya disini...'
            style={{
              border: 'none',
              flex: 1,
              height: '50px',
            }}
          />
          <Button
            variant='contained'
            sx={{
              height: '54px',
              borderRadius: '0',
              bgcolor: '#124C6E',
            }}
            onClick={handleSendMessage}
          >
            {isLoading ? (
              <MoreHorizIcon
                sx={{
                  cursor: 'not-allowed',
                }}
              />
            ) : (
              <SendIcon />
            )}
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ChatBot;
