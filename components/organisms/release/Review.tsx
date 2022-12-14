import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Release Confirmation
      </Typography>
      <List disablePadding>
        <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
            Are you sure you want to confirm and release these results to the patient?
          </Typography>
      </List>
    </React.Fragment>
  );
}