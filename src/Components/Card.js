import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';


export default function OutlinedCard({quote}) {
  const bull = <span display= "inline-block" margin= '0 2px' transform= 'scale(0.8)' >•</span>;
  return (
    <Card  className="card" width="100%" variant="outlined">
      <CardContent >
        <p className="card-text">
          {quote}
        </p>  
      </CardContent>
    </Card>
  );
  /*return (
    <Card height="100%" width="100%" variant="outlined" bordered= "false">
      <CardContent>
        <Typography variant="h5" component="h2">
          {quote}
        </Typography>  
      </CardContent>
    </Card>
  );*/
}
