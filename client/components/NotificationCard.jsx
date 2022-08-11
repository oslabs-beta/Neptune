import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function CardForNoti({alertname, description, namespace, service, severity, state, activeAt, value, summary}) {

    const color = severity === 'critical' ? "red" : "orange";

    return (
      <Card sx={{ minWidth: 275, border: "1px solid", padding: "10px", boxShadow: `5px 10px ${color}` }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Alert Name: {alertname}
          </Typography>
          <Typography variant="h5" component="div">
            Description: {description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Namespace: {namespace}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Service: {service}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Severity: {severity}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            State: {state}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Active at: {activeAt}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Value: {value}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Summary: {summary}
          </Typography>
        </CardContent>
      </Card>
    );
  }
