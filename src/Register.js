import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import background from "./bg.png";
import { saveProfile } from 'utils/auth';
import { get } from 'lodash';

function Register(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const API_URL = process.env.REACT_APP_API_ENDPOINT;

  const usernameRef = useRef('username')
  const emailRef = useRef('email')
  const passwordRef = useRef('password')

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current?.value
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const body = {
      username: username,
      email: email,
      password: password
    }
    console.log("body: ", body)

    // Call Api
    axios.post(`${API_URL}/api/user/create`, body)
      .then(function (response) {
        const { data, status } = response
        if (status == 200) {
          toast.success('Register success!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          saveProfile({
            id: get(data, 'data.insertId', 0)
          })
          setTimeout(() => {
            window.location.href = '/page1'
          }, 3000)
        }else {
          toast.error('Register unsuccess!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Register unsuccess!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="ชื่อผู้ใช้งาน"
                label="ชื่อผู้ใช้งาน"
                name="ชื่อผู้ใช้งาน"
                autoComplete="ชื่อผู้ใช้งาน"
                autoFocus
                inputRef={usernameRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="อีเมล"
                label="อีเมล"
                name="อีเมล"
                autoComplete="อีเมล"
                autoFocus
                inputRef={emailRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="รหัสผ่าน"
                label="รหัสผ่าน"
                type="password"
                id="รหัสผ่าน"
                inputRef={passwordRef}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                สร้างบัญชี
              </Button>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}