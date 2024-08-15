import React from "react";

import IconGrid from "../../IconGrid";
import TitleAndDescription from "../../TitleAndDescription";

import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";
import SeeMoreButton from "../../SeeMoreButton";
import { LINKEDIN_SKILLS } from "../../../constants/index";

export const skills = [
  { icon: FaAws, name: "AWS" },
  { icon: FaReact, name: "React" },
  { icon: FaJs, name: "Javascript" },
  { icon: FaPython, name: "Python" },
  { icon: FaNodeJs, name: "NodeJs" },
  { icon: FaSass, name: "Sass" },
  { icon: FaHtml5, name: "HTML" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaCss3, name: "CSS" },
  { icon: FaGit, name: "Git" },
  { icon: FaReact, name: "React Native" },
  { icon: FaLinux, name: "Linux" },
];

type MySkillsProps = {};

const MySkills: React.FC<MySkillsProps> = ({}) => {
  const { isTabletOrMobile } = useAppContext();
  return (
    <>
      <TitleAndDescription
        title="My Skills."
        orientation={isTabletOrMobile ? "vertical" : "horizontal"}
        descrition=" My work is the bridge to various insightful digital and engineering
          Skill"
      />

      <IconGrid icons={skills} />
      <SeeMoreButton link={LINKEDIN_SKILLS} />
    </>
  );
};

export default MySkills;
