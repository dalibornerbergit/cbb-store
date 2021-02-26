import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import GlobalContextProvider from "./contexts/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <GlobalContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </GlobalContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
