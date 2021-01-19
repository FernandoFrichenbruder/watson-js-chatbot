import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import botImg from '../../../../assets/images/chatbot2.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#06c5fa',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function BotAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={botImg} className={[classes.purple, classes.large]} />
    </div>
  );
}
