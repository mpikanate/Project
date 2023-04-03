import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './Homepage.css';


export default function Homepage() {
  
    return (

        <div>



            <center>
                <img src="/logo.png" width={700} height={450} />
                <h1 className='Appname'>
                 Food for child
                </h1>
                <Stack spacing={2} direction="column">

                    <Link href="Login">
                        <Button variant="contained"

                            size="large">เข้าสู่ระบบ</Button>
                    </Link>

                    <Link href="Register">
                        <Button variant="contained"
                            size="large">สมัครสมาชิก</Button>
                    </Link>



                </Stack>
            </center>

        </div>

    );

}
