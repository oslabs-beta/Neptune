import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Pods(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Pods
        </Typography>
        <Typography variant='h2'>{props.podNumber}</Typography>
      </CardContent>
    </Card>
  );
}
