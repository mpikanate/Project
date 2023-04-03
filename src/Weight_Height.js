import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './Weight_Height.css';


export default function Weight_Height() {
    const [value, setValue] = React.useState(null);
    return (
        <div className='container6'>

   
        <center>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="วันที่วัดการเจริญเติบโต"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <br>
            </br>
            <div>
            <TextField id="demo-helper-text-misaligned-no-helper" label="น้ำหนัก" />
            </div>
            <br>
            </br>
            <div>
            <TextField id="demo-helper-text-misaligned-no-helper" label="ส่วนสูง" />
            </div>
            <br>
            </br>
            <div>
                <Link href="profile">
                    <Button variant="contained">next</Button>
                </Link>
            </div>
        </center>
        </div>
    );
}