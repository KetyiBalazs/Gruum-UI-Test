import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import FloatingQA from "./FloatingQA";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {location.pathname === "/floating-qa" ? <FloatingQA /> : <App />}
  </StrictMode>,
);
