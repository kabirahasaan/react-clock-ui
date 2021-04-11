import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import moment from 'moment';


const Calendar = () => {
  let date = new Date();
  let formatedDate = moment(date).format('YYYY-MM-DD');
  const [currentDate, setCurrentDate] = useState(formatedDate);

  const onDateChange = (event : any) => {
      //console.log("event value", event.target.value);
      setCurrentDate(event.target.value);
      //console.log("currentDate", currentDate);
  };
  
    return(
        <>
            <TextField
            id={"date"}
            label={"calendar"}
            type={"date"}
            value={currentDate}
            onChange={onDateChange}
            >

            </TextField>
        </>

    );
}

export default Calendar;