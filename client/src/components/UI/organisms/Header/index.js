import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BotInfo from '../../molecules/BotInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#dae222',
    borderTopLeftRadius: 45,
    padding: 15,
  },
}));


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <BotInfo />
    </div>
  );
}
