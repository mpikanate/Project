import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { retrieveTempKidData, saveTempKidData } from 'utils/auth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import moment from 'moment';
const API_URL = process.env.REACT_APP_API_ENDPOINT;

export default function Page3() {
  const kidData = retrieveTempKidData()
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  useEffect(() => {
  }, [])

  const handleGoToNextStep = async () => {
    await createKid({
      ...kidData,
      name: name,
      SurName: surName
    })
  }


  const createKid = async (request) => {
    // Call Api
    axios.post(`${API_URL}/api/kids/create`, request)
      .then(function (response) {
        const { data, status } = response
        if (status == 200) {
          saveTempKidData({
            ...kidData,
            KidID: get(data, 'data.insertId', 0)
          })
          const now = new Date()
          axios.post(`${API_URL}/api/history/create`, {
            KidID: get(data, 'data.insertId', 0),
            DMY: moment(now).format("DD/MM/YYYY"),
            Weight: kidData["Weight"],
            Height: kidData["Height"],
          }).then((response) => {
            const { data, status } = response
            if (status == 200) {
              window.location.href = '/page4'
            } else {
              toast.error('Internal Server Error! Please try again', {
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
          }).catch(function (error) {
            console.log(error);
            toast.error('Internal Server Error! Please try again', {
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
        } else {
          toast.error('Internal Server Error! Please try again', {
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
      }).catch(function (error) {
        console.log(error);
        toast.error('Internal Server Error! Please try again', {
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
  }

  return (
    <center>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 5, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h1>
            <img src="/baby-icon.png" width={300} height={300} />
          </h1>
        </div>
        <div>
          <TextField id="standard-basic" label="ชื่อ" variant="standard" onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div>
          <TextField id="standard-basic" label="นามสกุล" variant="standard" onChange={(e) => { setSurName(e.target.value) }} />
        </div>

        <div>
          <Button variant="contained" onClick={handleGoToNextStep}>next</Button>
        </div>

      </Box>
    </center>

  );
}
