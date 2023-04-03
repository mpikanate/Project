import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function page4() {
  return (
    <center>


      <div>
        <h1>
          <img src="/baby-icon.png" width={300} height={300} />
        </h1>
      </div>

      <div>
          <h3>
          เด็กชายไทก้า <br></br>
          อายุ 3 ปี 7 เดือน 10 วัน
          </h3>
        </div>

        <div>
          <h1>
          การเจริญเติบโต <br></br>
          </h1>
          <h4>
          ข้อมูลล่าสุดเมื่อ 22 กุมภาพันธ์ 2566
          </h4>

        </div>

       
      <div>
        <Link href="homeapp">
          <Button variant="contained">next</Button>
        </Link>
      </div>


    </center>

  );
}
