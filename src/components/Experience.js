import { FaGithub } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";


import "./CSS/experience.css";

const Exp = () => {
  return (
    <section className="exp" id="experience">
      <h1>Experience</h1>
      <ul className="exp-list">
        <li className="exp-icons">
          <FaGithub size={50} color="white" />
        </li>
        <li className="exp-icons">
          <DiRuby size={50} color="white" />
        </li>
        <li className="exp-icons">
          <IoLogoJavascript size={50} color="white" />
        </li>
        <li className="exp-icons">
          <FaReact size={50} color="white" />
        </li>
        <li className="exp-icons">
          <BiLogoPostgresql size={50} color="white" />
        </li>
        <li className="exp-icons">
          <SiRubyonrails size={50} color="white" />
        </li>
      </ul>
    </section>
  );
};

export default Exp;
