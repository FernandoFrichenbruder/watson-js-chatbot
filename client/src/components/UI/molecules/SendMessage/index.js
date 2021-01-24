import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { userMessage, sendMessage } from "../../../../actions/watson";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  sendButton: {
    color: '#06c5fa',
  }
}));




const SendMessage = ({ userMessage, sendMessage }) => {
const classes = useStyles();
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {

    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Digite sua Mensagem"
        inputProps={{ 'aria-label': 'digite sua mensagem' }}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
        data-testid="input"
      />
    </Paper>
  );

};
const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(SendMessage);
