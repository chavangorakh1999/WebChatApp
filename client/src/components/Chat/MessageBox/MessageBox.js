import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  TextField {
    width: 80%;
  }
  Button {
    width: 20%;
    height: 5%;
  }
`;

//renaming prop for use in the component
const MessageBox = (props) => {
  const [message, setMessage] = useState("");
  const messageRef = useRef("");

  const sendMessageClick = () => {
    if (messageRef.current.value === "") {
      return false;
    }
    const messageObject = {
      user_name: props.userData.currentUserData.user_name,
      user_avatar: props.userData.currentUserData.user_avatar,
      message: messageRef.current.value,
    };
    props.onSendMessage(messageObject);
    setMessage("");
  };

  return (
    <form className="chat-form" autoComplete="off">
      <Container>
        <TextField
          id="standard-basic"
          label="Write your message here"
          margin="normal"
          multiline
          fullWidth
          rows="4"
          inputRef={messageRef}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              //prevents enter from being pressed
              event.preventDefault();
              sendMessageClick();
            }
          }}
          value={message}
        />
        <Button variant="contained" color="primary" onClick={sendMessageClick}>
          <i class="fas fa-paper-plane"></i>
        </Button>
      </Container>
    </form>
  );
};

export default MessageBox;
