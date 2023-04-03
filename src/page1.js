import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <center>
        <div>
            <h1>
            <img src="/baby-icon.png" width={300 } height={300} />
            </h1>
        </div>
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
        label="วันเกิด"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
         />
        </LocalizationProvider>
        </div>
        <div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="เพศชาย" />
        <FormControlLabel control={<Checkbox />} label="เพศหญิง" />
    
        </div>
        
        <div>
        <Link href="page2">
         <Button variant="contained">next</Button>
        </Link>
        </div>
    </center>
    
    
  );
}
