import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white shadow-lg shadow-cyan-500/50 p-6 bg-transparent">
      <p>Created by @tunaralyarzada</p>
      <div className="mt-3 block lg:hidden">
        <ul className="flex flex-col gap-y-2 lg:gap-y-4">
          <li className="flex gap-x-4 text-14px">
            <MdLocationOn className="text-16px lg:-translate-x-2px" />
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
  );
};

export default Footer;
