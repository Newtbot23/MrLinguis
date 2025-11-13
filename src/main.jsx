import React from "react";
import { createRoot } from "react-dom/client";
import Plantilla from "./layout/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Plantilla />
    </React.StrictMode>
);
