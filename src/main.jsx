import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RowContextProvider from "./context/RowContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <RowContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </RowContextProvider>
);
