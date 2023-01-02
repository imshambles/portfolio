import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1.5+ years working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Collaborations?</h5>
              <small>Actively</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I am a Software engineer for Wipro Technologies, currently working
            as a core UI engineer for Cynergy Bank, UK. I speak JavaScript
            fluently, can paint with CSS as well (these aren't the only arrows
            in my quiver). Being a lazy one, I dont like to code the same thing
            twice. I try to be an active listener and an original thinker which
            makes team collaborations fruitful. If you are intrigued, lets have
            a chat. Cheers!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
