import React, { useEffect, useRef } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';
import background from "./bg.png";
import { clearToken, saveProfile } from 'utils/auth';
import { get } from 'lodash';
function Copyright(props) {
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

  const emailRef = useRef('email')
  const passwordRef = useRef('password')
  
  useEffect(() => {
    clearToken()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const body = {
      email: email,
      password: password
    }

    // Call Api
    axios.post(`${API_URL}/api/user/login`, body)
      .then(function (response) {
        const { data, status } = response
        if (status == 200) {
          toast.success('Success!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          saveProfile(get(data, 'data', {}))
          window.location.href = '/homeapp'
        } else {
          toast.error('Email or Password was incorrect!', {
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
        toast.error('Email or Password was incorrect!', {
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
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square backgroundImage>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            }}

          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              เข้าสู่ระบบ
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="อีเมล"
                label="อีเมล"
                name="อีเมล"
                autoComplete="อีเมล"
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

              {/* <Link href="Homeapp"> */}


              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                เข้าสู่ระบบ
              </Button>
              {/* </Link> */}
              <span>ยังไม่ได้เป็นสมาชิก? <a href="/Register">สมัครสมาชิก</a></span>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}