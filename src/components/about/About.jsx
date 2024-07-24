import React from "react";
import "./about.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(240, 240, 240)");
  const [navColor, setNavColor] = useState("none");
  const navClick = () => {
    setNavColor("black");
  };

  const [isToggled, setIsToggled] = useState(false);
  const toggleTheme = () => {
    setIsToggled(!isToggled);
    setBackgroundColor(isToggled ? "rgb(240, 240, 240)" : "black");
  };

  const navigate = useNavigate();
  const handleNavbarClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{ backgroundColor }}>
      <div className="aboutPage">
        <div className="navbar">
          <button
            onClick={() => handleNavbarClick("/about")}
            className={isToggled ? "nav-button-dark" : "nav-button"}
          >
            About
          </button>
          <button
            onClick={() => handleNavbarClick("/")}
            className={isToggled ? "nav-button-dark" : "nav-button"}
          >
            Bentofolio
          </button>
          <button
            onClick={() => handleNavbarClick("/projects")}
            className={isToggled ? "nav-button-dark" : "nav-button"}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavbarClick("/contact")}
            className={isToggled ? "nav-button-dark" : "nav-button"}
          >
            Contact
          </button>
          <button
            onClick={toggleTheme}
            className={isToggled ? "nav-button-dark" : "nav-button"}
          >
            <FontAwesomeIcon
              icon={isToggled ? faSun : faMoon}
              style={{ color: isToggled ? "#dcdcdc" : "#1e1e1e" }}
              className="theme-icon"
            />
          </button>
        </div>
        <div className="text">
          <h1 className={isToggled ? "textHeadDark" : "textHead"}>About</h1>
          <p className="textSubHead">a glimpse into me</p>
        </div>
        <div className="image-wrapper">
          <img className="pp" src="./images/cat2.jpg" alt="Profile" />
        </div>
        <div className="textBox">
          <div className="text-wrapper">
            <div className="left">about</div>
            <div className={isToggled ? "rightDark" : "right"}>
              Hi, I'm <mark>Akshat</mark>, a full-stack developer with a passion
              for creating efficient and innovative solutions. My journey in the
              tech world is driven by my curiosity and the thrill of turning
              ideas into reality through code. I have honed my skills in various
              languages and frameworks, including{" "}
              <strong>Java, JavaScript, Python, React</strong>, and
              <strong> Node.js</strong>. Each line of code I write is a step
              towards making a difference, big or small. Welcome to my
              portfolio, a glimpse into my world.
            </div>
          </div>
          <div className="text-wrapper">
            <div className="left">hobbies</div>
            <div className={isToggled ? "rightDark" : "right"}>
              When I'm not coding, I enjoy a variety of hobbies. I like to play
              <span className="mark">cricket</span>, a game that brings me joy
              and relaxation. I also find solace in music, often expressing
              myself through the strings of my
              <span className="mark">guitar</span>. Additionally, I have a knack
              for <span className="mark">video editing</span>, transforming raw
              footage into captivating stories. These hobbies, while different,
              all contribute to who I am. They keep my mind fresh and my
              creativity flowing, complementing my work as a developer.
            </div>
          </div>
          <div className="text-wrapper">
            <div className="left">connect</div>
            <div className={isToggled ? "rightDark" : "right"}>
              <div className="connectText">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me on
              </div>
              <div>
                <a href="https://instagram.com/akshatkhemka7">
                  <button className={isToggled ? "igDark" : "ig"}>
                    {" "}
                    insta ↗
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/khemka-akshat/">
                  <button className={isToggled ? "igDark" : "ig"}>
                    {" "}
                    linkedin ↗
                  </button>
                </a>
              </div>
              <div>
                <a href="https://www.github.com/KhemkaAkshat">
                  <button className={isToggled ? "igDark" : "ig"}>
                    {" "}
                    github ↗
                  </button>
                </a>
                <button
                  onClick={() => handleNavbarClick("/contact")}
                  className={isToggled ? "igDark" : "ig"}
                >
                  contact ↗
                </button>
              </div>
            </div>
          </div>
          <div className="footer">
            <h4 className={isToggled ? "footerTextDark" : "footerText"}>
              “Thanks for stopping by. Reach out to collaborate!”
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
