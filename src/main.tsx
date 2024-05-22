import React from "react";
import ReactDOM from "react-dom/client";
import MicroFrontend from "./MicroFrontend";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <MicroFrontend />
    </main>
  </React.StrictMode>
);
