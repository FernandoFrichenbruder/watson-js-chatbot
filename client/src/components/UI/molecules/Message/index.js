import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    borderRadius: 5,
  },

  user: {
    backgroundColor: '#8EEAC0',
    alignSelf: 'flex-end',
    marginBottom: 20,
    borderTopRightRadius: 0,
  },

  bot: {
    backgroundColor: '#ddd',
    marginBottom: 20,
    borderTopLeftRadius: 0,
  },

}));

export default function Message(props) {
  const classes = useStyles();

  return (

    <Box className={[classes.root, props.type == 'user' ? classes.user : classes.bot]}>
      <Typography>{props.text}</Typography>
    </Box>

  );
}
