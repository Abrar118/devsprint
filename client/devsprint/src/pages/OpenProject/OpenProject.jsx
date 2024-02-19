import axios from "axios";
import styles from "./OpenProject.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

const OpenProject = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState();
  const [skills, setSkills] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const reqbody={
        email:localStorage.getItem("email"),
        name:name,
        category:category,
        subcategory:subcategory,
        skills:skills
        }
    const response=await axios.post(`http://localhost:5000/insertproject`,reqbody);
    const data=response.data
    if(!data.acknowledged)
    {
      toast.error("Data couldn't be inserted")
      return
    }
    toast.success("Data successfully inserted")
    // setTimeOut(() =>{
    //   window.location.reload(true)
    // },1000)
  };
  return (
    <  div className={styles.postJobtutor} >
      {/* <section className={styles.postJobtutorChild} /> */}
      <div className={styles.title}>Project Name</div>
      <div className={styles.class}>Category</div>
      <div className={styles.requiredTime}>Subcategory</div>
      <div className={styles.medium}>Skills</div>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={styles.postJobtutorItem}
          type="text"
        />
        <input
          required
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className={styles.postJobtutorInner}
          type="text"
        />
        <input
          required
          onChange={(e) => {
            setSubcategory(e.target.value);
          }}
          className={styles.rectangleInput}
          type="text"
        />
        <input
          required
          onChange={(e) => {
            setSkills(e.target.value.split(","));
          }}
          className={styles.postJobtutorChild1}
          type="text"
        />
        <button className={styles.groupButton} autoFocus={true} type="submit">
          {/* <div className={styles.groupChild} /> */}
          Create Project
        </button>
      </form>
    </div>
  );
};

export default OpenProject;
