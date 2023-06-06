import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EachProject from "./components/EachProject";
import { projectsData } from "../../data/projectsData";
import { useMediaQuery } from "../../hooks/useMediaQuery";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Projects = () => {
    const { matches } = useMediaQuery("568");
    return (_jsxs("div", { className: "min-h-75vh relative px-5 lg:px-100px", children: [_jsx("h1", { className: "text-gradient text-40px font-semibold mb-10 text-center", children: "Projects" }), _jsx(Swiper, { modules: [Navigation, Pagination, Scrollbar, A11y], spaceBetween: 50, slidesPerView: matches ? 2 : 1, pagination: { clickable: true }, children: projectsData.map((item) => {
                    return (_jsx(SwiperSlide, { children: _jsx(EachProject, { item: item }, item.id) }));
                }) }), _jsx("div", { className: "absolute -top-20 right-1/2 w-240px h-240px rounded-full blue__gradient" }), _jsx("div", { className: "absolute -top-40 left-0", id: "projects" })] }));
};
export default Projects;
