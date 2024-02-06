import React from "react";
import "./Skills.css";
import skillItem from "../data/skills";

import {
  IconContainer,
  SkillsCard,
  SkillsCardContainer,
} from "./SkillsElements";
import { HomeH1, HomePara } from "../HomeSection/HomeElements";
function Skills() {
  return (
    <div className="skillsWrapper" id="skills">
      <SkillsCardContainer>
        {skillItem.map((e) => {
          return (
            <SkillsCard>
              <IconContainer color="blue" size="4.5rem">
                {e.icon}
              </IconContainer>
              <IconContainer color="white" size="1rem">
                {e.tech}
              </IconContainer>
            </SkillsCard>
          );
        })}
      </SkillsCardContainer>
      <div>
        <HomeH1>
          MY <span style={{ color: "#7eadfc" }}>SKILLS</span>
        </HomeH1>
        <HomePara>
          I immersed myself in learning the latest front-end technologies and
          frameworks, including HTML, CSS, JavaScript, and React.Proficient in
          HTML5, CSS3, and JavaScript and also have hands-on experience with
          React for building modern and responsive user interfaces. Strong
          understanding of web accessibility and best practices. Familiarity
          with version control systems like Git.
        </HomePara>
        <HomePara>
          Ability to solve problems and think creatively. Enthusiastic learner
          with a passion for staying updated on the latest industry trends.
        </HomePara>
      </div>
    </div>
  );
}

export default Skills;
