import "./CSS/footer.css";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="contact-info" id="contact">
        <h1>Contact</h1>
        <div className="contact-des">
          <h4>Hit me up via email or find me on Linkedin!</h4>
          <br />
          <h2>Jacksonc.pruett@gmail.com</h2>
          {/* <p>---------------</p> */}
        </div>

        <ul className="link-list">
          <li className="links">
            <a href="mailto:jacksonc.pruett@gmail.com" target="_blank">
              <MdOutlineMail size={30} color="white" />
            </a>
          </li>
          <li className="links">
            <a href="https://github.com/JacksonPruett" target="_blank">
              <FaGithub color="white" size={30} />
            </a>
          </li>
          <li className="links">
            <a href="https://www.linkedin.com/in/jacksoncpruett/" target="_blank">
              <FaLinkedin color="white" size={30} />
            </a>
          </li>
        </ul>
        <div className="top-page-arrow">
          <a id="navbar">
          <FaArrowAltCircleUp color="white" size={30} href="#navbar" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
