import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  user: {
    backgroundColor: '#8EEAC0',
    alignSelf: 'flex-end',
    marginBottom: 20,
    borderTopRightRadius: 0,
    padding: 10,
    borderRadius: 5,
  },

  bot: {
    backgroundColor: '#ddd',
    marginBottom: 20,
    borderTopLeftRadius: 0,
    padding: 10,
    borderRadius: 5,
  },

}));

export default function Message(props) {
  const classes = useStyles();

  return (

    <Box className={props.type == 'user' ? classes.user : classes.bot}>
      <Typography>{props.text}</Typography>
    </Box>

  );
}
