import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
