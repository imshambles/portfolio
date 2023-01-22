import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="Project1" />
          </div>
          <h3>Friday - The Future</h3>
          <p>Friday is an implementation of OpenAI api and uses Natural Language processing to answer the questions asked. Give it a try!</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/imshambles/friday"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://friday-six.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Project2" />
          </div>
          <h3>Character Recognizer</h3>
          <p>Character Recognizer is a Deep-Learning based model that is being used for recognizing handwritten characters.</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/imshambles/Character-Recognition"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {/* <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="Project3" />
          </div>
          <h3>NewsApp</h3>
          <p>NewsApp is a news portal that uses News-API for real-time updation. It is built using ReactJS.</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/imshambles/NewsApp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {/* <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
