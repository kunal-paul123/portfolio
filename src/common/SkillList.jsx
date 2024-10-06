import { GiCheckMark } from "react-icons/gi";

function SkillList({ skill }) {
  return (
    <span>
      <GiCheckMark />
      <p>{skill}</p>&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  );
}

export default SkillList;
