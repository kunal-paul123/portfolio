import ProjectCard from "../../common/ProjectCard";
import "./Projectsection.css";

function Projects() {
  return (
    <div>
      <h1 className="projecttitle">projects</h1>
      <div>
        <div className="projectcontainer">
          <ProjectCard
            src={"./images/wanderlust.jpg"}
            link="https://github.com/kunal-paul123/wanderlust"
            h3="Wanderlust"
            p1="A hotel booking website built"
            p2="with HTML, CSS, JavaScript,"
            p3="Node.js, Express, and EJS"
          />
          <ProjectCard
            src={"./images/weather.jpg"}
            link="https://github.com/kunal-paul123/Weather-App"
            h3="Weather"
            p1="Built a weather app in ReactJs"
            p2="using open weather API"
          />
          <ProjectCard
            src={"./images/currency_converter.webp"}
            link="https://github.com/kunal-paul123/wanderlust"
            h3="Currency Converter"
            p1="Currency-converter"
            p2="with html, css and js"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
