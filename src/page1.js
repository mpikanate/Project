import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import { retrieveProfile, saveTempKidData } from 'utils/auth';
import { FormControl, Radio, RadioGroup } from '@mui/material';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Page1() {
  const profile = retrieveProfile()
  const [birthDay, setBirthDay] = useState(null);
  const [gender, setGender] = useState("M");


  useEffect(() => {
  }, [])

  const handleCheckedMale = (e) => {
    const checked = e.target.checked
    if (checked) {
      setGender("M")
    }
  }

  const handleCheckedFemale = (e) => {
    const checked = e.target.checked
    if (checked) {
      setGender("F")
    }
  }

  const handleGoToNextStep = async () => {
    saveTempKidData({
      UserId: profile["id"],
      DOB: moment(birthDay.$d).format("DD/MM/YYYY"),
      Gender: gender
    })
    setTimeout(() => {
      window.location.href = '/page2'
    }, 1000)
  }

  return (
    <center>
      <div>
        <h1>
          <img src="/baby-icon.png" width={300} height={300} />
        </h1>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="วันเกิด"
            value={birthDay}
            onChange={(newValue) => {
              setBirthDay(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="male" control={<Radio onChange={handleCheckedMale} />} label="เพศชาย" />
            <FormControlLabel value="female" control={<Radio onChange={handleCheckedFemale} />} label="เพศหญิง" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Button variant="contained" onClick={handleGoToNextStep}>next</Button>
      </div>
    </center>


  );
}
