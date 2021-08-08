import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styled from "styled-components";
import reportWebVitals from "./reportWebVitals";
import "regenerator-runtime/runtime";

const Section=styled.div`
display:flex;
background: url("./images/WebChatApp.jpeg");
color:white;

  span,label {
    color:white;
  }

`;

const Person = styled.div`
  width:50%;
  margin:2%;
  padding: 3%;
  border: 2px solid;
  border-radius:10px;
  backdrop-filter: blur(10px);
  
`;

ReactDOM.render(
  <React.StrictMode>
  <Section>
    <Person>
      <App />
    </Person>
    <Person>
      <App />
    </Person>
    </Section>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

