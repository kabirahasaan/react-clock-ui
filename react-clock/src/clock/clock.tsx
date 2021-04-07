import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { setSyntheticTrailingComments } from 'typescript';


interface IClock {
    location : string;
}

const Clock = (props : IClock) =>{

    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [year, setFullYear] = useState(0);

    setTimeout(() =>{
        const date = new Date();
        setHour(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
        setFullYear(date.getFullYear());

    },1000);

    return(
        <Card>
           <Card.Body>
               <Card.Title 
               style={{textAlign: "center"}} >  {props.location} Time Now
               </Card.Title>
               <Card.Subtitle>
                  { `${year} Year: ${hour} Hour: ${minutes} Minutes: ${seconds} Seconds ` } 
               </Card.Subtitle>
            </Card.Body> 
        </Card>
    )
};

export default Clock;