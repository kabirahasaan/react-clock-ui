import React from 'react';
import TextField from '@material-ui/core/TextField'
import moment from 'moment';


const Calendar = () => {
  let date = new Date();
  let formatedDate = moment(date).format('YYYY-MM-DD');
  
    return(
        <>
            <TextField
            id={"date"}
            label={"calendar"}
            type={"date"}
            value={formatedDate}
            >

            </TextField>
        </>

    );
};

export default Calendar;