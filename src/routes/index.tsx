import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Root from "../layout";

export const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
