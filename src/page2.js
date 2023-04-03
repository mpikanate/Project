import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function page2() {
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
            <img src="/baby-icon.png" width={300 } height={300} />
            </h1>
        </div>
        <div>
          <TextField id="standard-basic" label="ส่วนสูง(เซนติเมตร)" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="น้ำหนัก(กิโลกรัม)" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="เส้นรอบศีรษะ(เซนติเมตร)" variant="standard" />
        </div>

        <div>
        <Link href="page3">
         <Button variant="contained">next</Button>
        </Link>
        </div>

      </Box>
    </center>
    </Box>
  );
}
