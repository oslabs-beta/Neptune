import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({name, ip, os, color}) {
    return (
<Card sx={{ minWidth: 275, border: "1px solid", padding: "10px", boxShadow: `5px 10px ${color}`}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name: {name}
        </Typography>
        <Typography variant="h5" component="div">
          IP: {ip}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          OS: {os}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
  }