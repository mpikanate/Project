import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { retrieveTempKidData, saveTempKidData } from 'utils/auth';
import { useEffect, useState } from 'react';

export default function Page2() {
  const kidData = retrieveTempKidData()
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
  }, [])

  const handleGoToNextStep = async () => {
    saveTempKidData({
      ...kidData,
      Weight: weight,
      Height: height
    })
    setTimeout(() => {
      window.location.href = '/page3'
    }, 1000)
  }

  return (
    <Box component="main" sx={{ p: 2 }}>
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
            <TextField id="standard-basic" label="ส่วนสูง(เซนติเมตร)" variant="standard" onChange={(e) => { setHeight(e.target.value) }} />
          </div>
          <div>
            <TextField id="standard-basic" label="น้ำหนัก(กิโลกรัม)" variant="standard"  onChange={(e) => { setWeight(e.target.value) }} />
          </div>
          <div>
            <Button variant="contained" onClick={handleGoToNextStep}>next</Button>
          </div>
        </Box>
      </center>
    </Box>
  );
}
