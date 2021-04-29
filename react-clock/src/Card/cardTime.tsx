import { CardContent, TextField,Card,Typography } from '@material-ui/core';
import React, { useState } from 'react';
import moment from 'moment';

  const CardTime = () =>{
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const[second,setSeconds] = useState(0);
    
    setTimeout(() => {
        const date = new Date();
        let time = `${date.getHours()}:${date.getMinutes()}`
        let formattedhour = moment(date.getHours(),"HH").format("hh");
        let fromattedminute = moment(date.getMinutes(),"mm").format("mm");
        setHour(formattedhour);
        setMinutes(fromattedminute);
        setSeconds(date.getSeconds());
     
    },1000);
 console.log(`${hour}:${minutes}`);

    return(
      <Card>
        <CardContent>
          <Typography>
          <TextField
           id ={'time'}
           label={"time"}
           type={'time'}
          value={`${hour}:${minutes}`}
         />
          </Typography>
        </CardContent>

      </Card>
         

         
    )
}

export default CardTime;
