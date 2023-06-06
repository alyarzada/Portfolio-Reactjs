import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsArrowThroughHeart } from "react-icons/bs";
const Timeline = ({ data }) => {
    return (_jsx(VerticalTimeline, { children: data.map((item) => {
            return (_jsxs(VerticalTimelineElement, { className: "vertical-timeline-element--work", contentStyle: {
                    background: "linear-gradient(153.47deg,rgba(255, 255, 255, 0) -341.94%,#101825 95.11%)",
                    color: "#fff",
                }, contentArrowStyle: {
                    borderRight: "7px solid  rgb(33, 150, 243)",
                }, date: item.date, iconStyle: {
                    background: "rgba(9, 151, 124, 0.1)",
                    color: "#04F6FF",
                }, icon: _jsx(BsArrowThroughHeart, {}), children: [_jsx("h3", { className: "vertical-timeline-element-title mb-1", children: item.title }), _jsx("h4", { className: "vertical-timeline-element-subtitle", children: item.content })] }, item.id));
        }) }));
};
export default Timeline;
