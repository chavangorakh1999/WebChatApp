import React, {useState} from "react";
import styled from "styled-components";
import Chat from "./components/Chat/Chat"
import LoginForm from "./components/Login/LoginForm/LoginForm";

const App = () =>{
  const [userData, setUserData] = useState(null);
  if(userData === null){
    return (
      <Container>
      <div className="container">
        <div className="container-title">Enter Your name and upload image to join room</div>
        <LoginForm
          setUserDataForChat={setUserData}
        />
      </div>
      </Container>
    )
  }
  return (
    <Container>
    <Chat
    currentUserData={userData}
    />
    </Container>
  );
  
}

export default App;

const Container = styled.div`
width:100%;
text-align: center;
padding:auto;
`;