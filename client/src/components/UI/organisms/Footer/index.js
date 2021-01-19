import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SendMessage from '../../molecules/SendMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    padding: 15,
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
          <SendMessage />
      </Paper>
  );
}
