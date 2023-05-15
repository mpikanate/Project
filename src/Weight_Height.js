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
import { retrieveSelectedTempKidData } from 'utils/auth';
import { useState } from 'react';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_ENDPOINT;


export default function Weight_Height() {
    const [value, setValue] = useState(null);
    const selectedKid = retrieveSelectedTempKidData()
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleSaveHistory = async () => {
        const data = {
            DMY: moment(value.$d).format("DD/MM/YYYY"),
            height: height || 0,
            weight: weight || 0,
            KidID: selectedKid && selectedKid["KidID"] ? selectedKid["KidID"] : 0
        }
        if (!data.DMY || !data.height || !data.weight) {
            toast.warning('กรุณากรอกข้อมูลให้ครบถ้วน!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            axios.post(`${API_URL}/api/history/create`, data).then((response) => {
                const { status } = response
                if (status == 200) {
                    window.location.href = '/profile'
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
    }

    return (
        <div className='container6'>
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

            <center>
                <div>
                <img src="/calendar.png" alt="" width={60} height={60} />
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
                <img src="/height (1).png" alt="" width={60} height={60} />
                    <TextField id="demo-helper-text-misaligned-no-helper" label="ส่วนสูง" onChange={(e) => { setHeight(e.target.value) }} />
                </div>
                <br>
                </br>
                <div>
                <img src="/weight (1).png" alt="" width={60} height={60} />
                    <TextField id="demo-helper-text-misaligned-no-helper" label="น้ำหนัก" onChange={(e) => { setWeight(e.target.value) }} />
                </div>
                <br>
                </br>
                <div>
                    <Button variant="contained" onClick={handleSaveHistory}>next</Button>
                </div>
            </center>
        </div>
    );
}