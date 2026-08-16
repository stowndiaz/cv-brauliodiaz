import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/mulish/latin-400.css";
import "@fontsource/mulish/latin-700.css";
import "@fontsource/mulish/latin-700-italic.css";
import "@fontsource/mulish/latin-ext-400.css";
import "@fontsource/mulish/latin-ext-700.css";
import "@fontsource/mulish/latin-ext-700-italic.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
