function ProjectCard({ src, h3, link, p1, p2, p3 }) {
  return (
    <a href={link} target="_blank">
      <img className="projectImg" src={src} alt="" />
      <h3>{h3}</h3>
      <p>
        {p1} <br /> {p2} <br /> {p3}
      </p>
    </a>
  );
}

export default ProjectCard;
