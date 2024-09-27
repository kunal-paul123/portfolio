import "./HeroSection.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <div>
      <div className="container">
        <div className="info">
          <h1>
            Kunal <br /> Paul
          </h1>
          <h2>Fullstack Developer</h2>
          <span className="icons">
            <a href="https://github.com/kunal-paul123" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-paul-1aa6b0293/"
              target="_blank">
              <FaLinkedin />
            </a>
            <a href="" target="_blank">
              <FaSquareXTwitter />
            </a>
          </span>
          <p>
            I'm a full-stack developer with <br /> experience in building both
            front-end <br /> and back-end applications. <br /> I enjoy creating
            efficient <br /> and user-friendly websites.
          </p>
          <a href="">
            <button>Resume</button>
          </a>
        </div>
        <div className="img">
          <img
            src="./images/portfolio.png"
            alt="portfolio picture of Kunal Paul"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
