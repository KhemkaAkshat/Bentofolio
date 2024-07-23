import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div className="aboutPage">
        <div className="navbar">
          <p>About</p>
          <p>Bentofolio</p>
          <p>Contact</p>
          <p>
            <FontAwesomeIcon
              icon={faMoon}
              style={{ color: "1e1e1e" }}
              className="moon"
            />
          </p>
        </div>
        <div className="image-wrapper">
          <img className="pp" src="./images/cat2.jpg" alt="" />
        </div>
        <div className="textBox">
          <div className="text-wrapper">
            <div className="left">about</div>
            <div className="right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              laborum blanditiis omnis reprehenderit saepe explicabo magni
              fugiat fugit excepturi distinctio, esse odit!
            </div>
            
          </div>
          <div className="text-wrapper">
            <div className="left">about</div>
            <div className="right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              laborum blanditiis omnis reprehenderit saepe explicabo magni
              fugiat fugit excepturi distinctio, esse odit!
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
