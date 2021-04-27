import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import moment from 'moment';
import * as hijri from 'hijri-js';
import { Card, CardContent, Typography } from '@material-ui/core';



const formateHijriDate = (date : any) =>{
    let hijriConverter = hijri.initialize();
    let hijriDate = hijriConverter.toHijri(moment(date).format('DD-MM-YYYY'), '-');
    console.log("hijriDate",hijriDate);
    return `${hijriDate.year}-0${hijriDate.month}-${hijriDate.day}`;
};

const formatCardHijrimonth = (date : any) =>{
    let hijriConverter = hijri.initialize();
    let hijriDate = hijriConverter.toHijri(moment(date).format('DD-MM-YYYY'), '-');
    return `${hijriDate.monthName}`;
};

const Calendar = () => {
  let date = new Date();
  let formatedDate = moment(date).format('YYYY-MM-DD');
  const [currentDate, setCurrentDate] = useState(formatedDate);
  const [currentHijiriDate, setHijiriCurrentDate] = useState(formateHijriDate(date));
  const [cradHijriMonth] = useState(formatCardHijrimonth(date));


  const onDateChange = async (event : any) => {
      await setCurrentDate(event.target.value);
      await setHijiriCurrentDate(formateHijriDate(currentDate));  
   };
  
    return(
        <>
            <TextField
            id={"gregDate"}
            label={"Gregorian Date"}
            type={"date"}
            value={currentDate}
            onChange={onDateChange}
            />

            <TextField
            id={"hijirDate"}
            label={"Hijri Date"}
            type={"date"}
            value={currentHijiriDate}
            />
            <Card variant='outlined' color='secondary'>
                <CardContent>
                    <Typography>
                        Month name : {cradHijriMonth}
                    </Typography>
                </CardContent>

            </Card>
        </>

    );
}

export default Calendar;