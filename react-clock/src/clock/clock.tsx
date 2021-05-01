import React, {useState} from 'react';
import { Card } from 'react-bootstrap';



interface IClock {
    location : string;
}

const Clock = (props : IClock) =>{

    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    

    setTimeout(() =>{
        const date = new Date();
        setHour(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
        

    },1000);

    return(
        <Card>
           <Card.Body>
               <Card.Title 
               style={{textAlign: "center"}} >  {props.location} 
               </Card.Title>
               <Card.Subtitle>
                  { `${hour} Hour: ${minutes} Minutes: ${seconds} Seconds ` } 
               </Card.Subtitle>
            </Card.Body> 
        </Card>
    )
};

export default Clock;