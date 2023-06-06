import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "./components/Hero";
import About from "../about";
import Contact from "../contact";
import Career from "../career";
import Projects from "../projects";
import Skills from "../skills";
import Services from "../services";
const Home = () => {
    return (_jsxs("div", { id: "home", children: [_jsx(Hero, {}), _jsx(Services, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Career, {}), _jsx(Projects, {}), _jsx(Contact, {})] }));
};
export default Home;
