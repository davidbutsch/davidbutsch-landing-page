import "@/libs";
import "highlight.js/styles/night-owl.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
