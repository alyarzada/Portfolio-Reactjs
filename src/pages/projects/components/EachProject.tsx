import { Button } from "antd";
import { DataTypes } from "../../../data/projectsData";

const EachProject = ({ item }: { item: DataTypes }) => {
  return (
    <div className="bg-gray-800/50 p-4 rounded-lg relative h-280px">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-cyan-500 text-18px font-semibold">{item.title}</h5>
        <h5 className="bg-cyan-500/10 rounded-lg p-1 text-sm text-cyan-500 text-left font-medium">
          {item.status}
        </h5>
      </div>
      <hr className="border-solid border-slate-200/10" />
      <h5 className="text-slate-50 text-sm text-left mb-3">{item.about}</h5>

      <div className="gap-x-5 flex flex-col md:flex-row">
        {/* image */}
        <div className="w-50% mb-3">
          <img
            className="w-full rounded-lg border-3 border-solid border-cyan-500/50"
            src={item.img}
            alt={item.title}
          />
        </div>

        {/* content */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {item.techs?.map((tech: string, index: number) => (
              <div
                key={index}
                className="p-1 rounded text-slate-50 bg-transparent shadow shadow-cyan-500/50"
              >
                <p className="text-xs lg:text-sm">{tech}</p>
              </div>
            ))}
          </div>
          <div className="w-full mt-5 absolute bottom-3 right-3 mt-0">
            <div className="flex justify-end gap-x-2 w-full">
              <Button className="bg-blue-gradient border-none font-medium">
                <a target="_blank" href={item.srcLink}>
                  Source Code
                </a>
              </Button>
              {item.liveDemo ? (
                <Button className="bg-slate-950 text-slate-50 font-medium border-none">
                  Live Demo
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
