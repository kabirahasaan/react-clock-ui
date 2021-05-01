import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Clock from './clock/clock';
import Calendar from './calendar'



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation = {20}>
      <CardContent> 

        <Typography variant="h5" component="h2">
          <h5> Current location Time Now</h5>
        
          <Clock location=" "/>
          
        </Typography>

        <Typography variant="body2" component="p">
         <Calendar/>
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Month Name : Ramadan</Button>
      </CardActions>
    </Card>
  );
}
