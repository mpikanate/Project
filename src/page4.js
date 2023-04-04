import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { retrieveTempKidData } from 'utils/auth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import { getThaiDateAgeFromNowString, getThaiDateString } from 'utils/helper';
import moment from 'moment';
const API_URL = process.env.REACT_APP_API_ENDPOINT;

export default function Page4() {
  const kidTempData = retrieveTempKidData()
  const [kidData, setKidData] = useState({})

  useEffect(() => {
    fetchKidData({
      kid_id: get(kidTempData, "KidID", 0)
    })
  }, [])

  const fetchKidData = async (request) => {
    // Call Api
    axios.post(`${API_URL}/api/kids/find-by-id`, request)
        .then(function (response) {
            const { data, status } = response
            if (status == 200) {
              setKidData(get(data, "data[0]", {}))
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
  
  return (
    <center>
      <div>
        <h1>
          <img src="/baby-icon.png" width={300} height={300} />
        </h1>
      </div>

      <div>
          <h3>
          {get(kidData, "Gender", "M") == "M" ? "เด็กชาย" : "เด็กหญิง"} {get(kidData, "Name", "") ? `${get(kidData, "Name", "")} ${get(kidData, "SurName", "")}` : "เด็กชายไทก้า"} <br></br>
          {getThaiDateAgeFromNowString(get(kidData, "DOB", ""))}
          </h3>
        </div>

        <div>
          <h1>
          การเจริญเติบโต <br></br>
          </h1>
          <h4>
          ข้อมูลล่าสุดเมื่อ {getThaiDateString(moment(new Date()).format("DD/MM/YYYY"))}
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
