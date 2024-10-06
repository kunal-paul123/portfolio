import SkillList from "../../common/SkillList";
import "./SkillList.css";

function Skills() {
  return (
    <div>
      <h1 className="sectionTitle">skills</h1>
      <div className="Skillcontainer">
        <div className="skillList">
          <SkillList skill="HTML" />
          <SkillList skill="Css" />
          <SkillList skill="JavaScript" />
          <SkillList skill="React" />
          <SkillList skill="Node js" />
        </div>
        <hr />
        <div className="skillList">
          <SkillList skill="Express" />
          <SkillList skill="EJS" />
          <SkillList skill="MongoDB" />
          <SkillList skill="Python" />
          <SkillList skill="C" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
