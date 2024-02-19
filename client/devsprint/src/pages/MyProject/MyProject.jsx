import React,{useEffect,useState} from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

export const MyProject = () => {
  const [project, setProject] = useState([]);
  const email=localStorage.getItem("email")
  
  async function getProject() {
    const response = await axios.get(`http://localhost:5000/myprojectshow/${email}`);
    const data = response.data;
    setProject(data);
  }


  useEffect(() => {
    getProject();
  });

  return (
    <>
          <div className="grid grid-cols-5 gap-2 bg-white">
            <div className="col-span-4 p-5 bg-white flex flex-wrap gap-6 justify-center">
              {project.map((am, index) => (
                <ProjectCard
                  project={am}
                  key={index}
                />
              ))}
            </div>
          </div>
    </>
  );
};
export default MyProject;
