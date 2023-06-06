import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(RouterProvider, { router: router }));
