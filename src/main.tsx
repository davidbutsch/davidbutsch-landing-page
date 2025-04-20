import "@/libs";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import "./assets/fonts/Lexend.ttf";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
