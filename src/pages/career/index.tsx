import { Button } from "antd";
import { useState } from "react";
import { educationData, experienceData } from "../../data/career";
import Timeline from "./components/Timeline";

const Career = () => {
  const [active, setActive] = useState<string>("experience");

  return (
    <div className="px-5 lg:custom-px relative min-h-80vh">
      <div>
        <h1 className="text-gradient text-40px font-semibold text-center mb-6">
          Qualifications
        </h1>
      </div>
      <div className="flex justify-center gap-x-4 lg:gap-x-10 text-slate-50 mb-20">
        <Button
          className="bg-transparent border-cyan-500 shadow-lg shadow-cyan-500/50 text-slate-50"
          onClick={() => setActive("experience")}
        >
          Work Experience
        </Button>
        <Button
          className="bg-transparent border-pink-500 shadow-lg px-7 shadow-pink-500/50 text-slate-50"
          onClick={() => setActive("education")}
        >
          Education
        </Button>
      </div>
      <div className="relative">
        <Timeline
          data={active === "experience" ? experienceData : educationData}
        />

        {/* gradients */}
        <div className="absolute top-10% right-10% white__gradient w-20% h-30% rounded-full" />
      </div>

      <div className="absolute -top-30 left-0" id="career" />
    </div>
  );
};

export default Career;
