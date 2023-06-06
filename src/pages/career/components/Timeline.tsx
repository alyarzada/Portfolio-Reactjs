import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsArrowThroughHeart } from "react-icons/bs";

type Props = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const Timeline = ({ data }: { data: Props[] }) => {
  return (
    <VerticalTimeline>
      {data.map((item: Props) => {
        return (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "linear-gradient(153.47deg,rgba(255, 255, 255, 0) -341.94%,#101825 95.11%)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date={item.date}
            iconStyle={{
              background: "rgba(9, 151, 124, 0.1)",
              color: "#04F6FF",
            }}
            icon={<BsArrowThroughHeart />}
          >
            <h3 className="vertical-timeline-element-title mb-1">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.content}
            </h4>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
