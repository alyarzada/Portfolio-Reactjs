import { useState, useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Form from "./components/Form";

import SocialMedia from "../home/components/SocialMedia";
import EarthCanvas from "./components/EarthCanvas";
import StarsCanvas from "../../components/ui/Stars";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "-50px 0px 0px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="px-5 mt-10 lg:px-100px min-h-80vh text-white relative lg:(mt-0)">
      <h1 className="text-gradient text-40px font-semibold mb-6 lg:mb-10 text-center">
        Get In Touch
      </h1>
      <div className="flex justify-between flex-col-reverse lg:flex-row">
        <div ref={ref} className="hidden lg:block">
          {isVisible ? <EarthCanvas /> : null}
        </div>

        <div className="bg-primary/50 backdrop-blur-xl shadow-lg shadow-cyan-500/50 py-8 px-4 rounded-xl relative lg:(px-10 w-1/2 py-14)">
          <h1 className="text-30px lg:text-40px mb-4">
            Send me a <br /> message
          </h1>
          <Form />
          <SocialMedia />

          <div className="absolute -top-20 -right-14 w-260px rounded-lg bg-primary/50 backdrop-blur-xl shadow-lg shadow-pink-500/50 px-6 py-10 hidden lg:block">
            <h1 className="text-20px text-slate-50 mb-6 font-medium">
              My Contact Details
            </h1>

            <div>
              <ul className="text-slate-300 flex flex-col gap-y-4">
                <li className="flex gap-x-4 text-14px">
                  <MdLocationOn className="text-16px -translate-x-2px" />
                  <p className="-translate-x-3px">Baku / Azerbaijan</p>
                </li>
                <li className="flex gap-x-4 text-14px">
                  <BsFillTelephoneFill className="text-13px" />
                  <p>055 664-30-64 / 050 611-33-15</p>
                </li>
                <li className="flex gap-x-4 text-14px">
                  <SiGmail className="text-13px" />
                  <p>tunar.alyarzada.98@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <StarsCanvas />

      <div className="absolute -top-10 -left-20 blue__gradient w-300px h-300px rounded-full" />
      <div className="absolute -bottom-10 right-10 pink__gradient w-200px h-200px rounded-full" />
      <div className="absolute -top-40 left-0" id="contact" />
    </div>
  );
};

export default Contact;
