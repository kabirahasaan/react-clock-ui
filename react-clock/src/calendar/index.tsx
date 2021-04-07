import React from 'react';
import TextField from '@material-ui/core/TextField'




const Date = () => {

    return(
        <>
            <TextField
            id={"date"}
            label={"Date"}
            type={"date"}
            value={"2017-05-24"}
            >

            </TextField>
        </>

    );
};

export default Date;