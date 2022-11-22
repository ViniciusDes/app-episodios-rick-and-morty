import React from "react";
import Home from "./pages/Home";
import { router } from "./routes";
import GlobalStyle from "./styles";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}

export default App;
