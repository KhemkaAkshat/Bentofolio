import React, { useState, useRef } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Marquee from "react-fast-marquee";
import { Circle } from "rc-progress";
import skillArray from "../logo";

function Home() {
  const [selectedSkill, setSelectedSkill] = useState(
    skillArray.find((skill) => skill.name === "Java")
  );

  const welcomeGridRef = useRef(null);
  const skillsMeterGridRef = useRef(null);
  const linkedInLogoRef = useRef(null);
  const instaLogoRef = useRef(null);
  const projectGridRef = useRef(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleHover = (ref, styleProperty, value) => {
    if (ref.current && window.innerWidth > 1000) {
      ref.current.style[styleProperty] = value;
      ref.current.style.transition = "0.15s ease";
    }
  };

  const [backgroundColor, setBackgroundColor] = useState("rgb(240, 240, 240)");
  const [isToggled, setIsToggled] = useState(false);

  const toggleTheme = () => {
    setIsToggled(!isToggled);
    setBackgroundColor(isToggled ? "rgb(240, 240, 240)" : "#1C1C1C");
  };

  return (
    <div className="Home" style={{ backgroundColor }}>
      <div className="Header">
        <span className="Heading">BENTOFOLIO</span>
        <span className="HeadingBy">By: Akshat Khemka</span>
      </div>
      <div className="mainGrid">
        <div className="leftGrid">
          <img
            className="white-sky"
            src={isToggled ? "images/image.png" : "images/white-sky.jpg"}
            alt={isToggled ? "Dark Sky" : "White Sky"}
          />
          <div className="profileDetails">
            <img src="images/cat2.jpg" alt="Profile" className="dp" />
            <span className="name">Akshat.</span>
            <p className="details">Hey There!, I am a Full Stack developer.</p>
            <button className={isToggled ? "aboutDark" : "about"}>
              About me
            </button>
          </div>
        </div>
        <div className="centerGrid">
          <div className="centerTopGrid">
            <div className={isToggled ? "centerHiiGridDark" : "centerHiiGrid"}>
              <img
                src="images/waving-hand.gif"
                alt="Waving Hand"
                className="handGif"
              />
            </div>
            <div
              ref={welcomeGridRef}
              onMouseOver={() =>
                handleHover(welcomeGridRef, "backgroundSize", "120%")
              }
              onMouseOut={() =>
                handleHover(welcomeGridRef, "backgroundSize", "101%")
              }
              className={
                isToggled ? "centerWelcomeGridDark" : "centerWelcomeGrid"
              }
            >
              <h2>Welcome To Bentofolio!</h2>
              <p>
                Portfolio of a passionate tech enthusiast currently pursuing a
                Bachelor of Technology (B.Tech) at Bennett University.
              </p>
            </div>
          </div>
          <div className="centerBottomGrid">
            <div
              className={
                isToggled ? "centerSkillsGridDark" : "centerSkillsGrid"
              }
            >
              <Marquee speed={20}>
                {skillArray.map((skill) => (
                  <button
                    key={skill.name}
                    className={skill.name}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="logo">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        style={{ color: skill.color }}
                        className={`skillIcon ${skill.name.toLowerCase()}Icon`}
                      />
                    </div>
                  </button>
                ))}
              </Marquee>

              <Marquee speed={15} direction="right">
                {skillArray.map((skill) => (
                  <button
                    key={skill.name}
                    className={skill.name}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="logo">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        style={{ color: skill.color }}
                        className={`skillIcon ${skill.name.toLowerCase()}Icon`}
                      />
                    </div>
                  </button>
                ))}
              </Marquee>
            </div>

            <div
              ref={skillsMeterGridRef}
              className={
                isToggled
                  ? "centerSkillsMeterGridDark"
                  : "centerSkillsMeterGrid"
              }
              onMouseOver={() =>
                handleHover(skillsMeterGridRef, "fontSize", "150%")
              }
              onMouseOut={() =>
                handleHover(skillsMeterGridRef, "fontSize", "100%")
              }
            >
              {selectedSkill && (
                <div className="progressBar">
                  <Circle
                    style={{ background: "transparent" }}
                    percent={selectedSkill.percent}
                    strokeColor="white"
                    trailColor="none"
                    strokeWidth={3}
                    trailWidth={1.5}
                    className="glowing-circle"
                  />
                  <span className="skillName">{selectedSkill.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={isToggled ? "rightGridDark" : "rightGrid"}>
          <h3>Want to reach out?</h3>
          <button>Contact Me</button>
        </div>
        <div className="bottomGrid">
          <div
            ref={linkedInLogoRef}
            onMouseOver={() => handleHover(linkedInLogoRef, "fontSize", "150%")}
            onMouseOut={() => handleHover(linkedInLogoRef, "fontSize", "100%")}
            className={isToggled ? "linkedInGridDark" : "linkedInGrid"}
          >
            <a
              style={{ background: "transparent" }}
              href="https://www.linkedin.com/in/khemka-akshat/"
            >
              <FontAwesomeIcon
                className="linkedinLogo"
                icon={faLinkedinIn}
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
          <div
            ref={instaLogoRef}
            onMouseOver={() => handleHover(instaLogoRef, "fontSize", "150%")}
            onMouseOut={() => handleHover(instaLogoRef, "fontSize", "100%")}
            className={isToggled ? "instaGridDark" : "instaGrid"}
          >
            <a
              style={{ background: "transparent" }}
              href="https://www.instagram.com/akshatkhemka7/"
            >
              <FontAwesomeIcon
                className="instaLogo"
                icon={faInstagram}
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
          <div
            ref={projectGridRef}
            className={isToggled ? "projectGridDark" : "projectGrid"}
            onMouseOver={() =>
              handleHover(projectGridRef, "backgroundSize", "110%")
            }
            onMouseOut={() =>
              handleHover(projectGridRef, "backgroundSize", "101%")
            }
          ></div>
          <div
            className={isToggled ? "toggleContainerDark" : "toggleContainer"}
          >
            <div className={isToggled ? "toggleButtonDark" : "toggleButton"}>
              <div
                onClick={toggleTheme}
                className={isToggled ? "toggleBallDark" : "toggleBall"}
                style={{ left: isToggled ? "52px" : "3px" }}
              >
                {isToggled ? (
                  <FontAwesomeIcon
                    icon={faMoon}
                    style={{ color: "goldenrod" }}
                    className="moonIcon"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSun}
                    style={{ color: "goldenrod" }}
                    className="sunIcon"
                  />
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="quote">
        "An offbeat display of my professional journey."
      </div>
    </div>
  );
}

export default Home;
