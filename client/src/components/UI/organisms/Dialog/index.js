import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { userMessage, sendMessage } from "../../../../actions/watson";
import Message from "../../molecules/Message";

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 400,
        height: 300,
        overflowY: 'scroll',
        padding: 15,
        borderBottom: 'solid 1px #eee',
        marginBottom: 15,
        paddingBottom: 30,
    },

}));

const Dialog = ({ chat }) => {
    const classes = useStyles();

    //Fix to Jest use Ref
    if (!HTMLElement.prototype.scrollIntoView) {
        HTMLElement.prototype.scrollIntoView = () => {}
    }

    const endOfMessages = useRef(null);

    const scrollToBottom = () => {
        endOfMessages.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [chat]);

    return (
        <div className={classes.root} data-testid="dialog">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {chat.length === 0
                    ? ""
                    : chat.map((msg) => <Message text={msg.message} type={msg.type} />)}
                <div ref={endOfMessages}></div>
            </Box>
        </div>
    );
};
const mapStateToProps = (state) => ({
    chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Dialog);