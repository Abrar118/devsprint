import React from "react";
import "./ProjectCard.css";
import axios from "axios";
import { toast } from "react-toastify";

function ProjectCard({ project }) {
  return (
    <div className="guava">
      <div className="kola">{project.title}</div>
      <div className="kola1">{project.category}</div>
      <div className="komola">{project.subcategory}</div>
      <div className="ranoutofname">Skills: {project.skills}</div>
    </div>
  );
}

export default ProjectCard;
