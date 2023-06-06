import Header from "./Header";
import "@unocss/reset/eric-meyer.css";
import "virtual:uno.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-h-screen bg-primary font-main">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
