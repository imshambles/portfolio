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
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              fugiat tempore commodi! Est, laboriosam accusamus? Perspiciatis
              quia et nobis blanditiis nihil tenetur iste omnis eveniet, placeat
              quod laborum pariatur itaque.
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
