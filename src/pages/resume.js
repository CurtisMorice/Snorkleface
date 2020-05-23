import React from "react";
import { Link } from "gatsby";
import { FaHouseDamage, FaBriefcase } from "react-icons/fa";
import resume_p1 from "../../assets/curtismorice_fs_resume_p1.jpg";
import resume_p2 from "../../assets/curtismorice_fs_resume_p2.jpg";
import resume_p3 from "../../assets/curtismorice_fs_resume_p3.jpg";
import '../styles/resume.scss'

const ResumePage = () => {
  return (
    <div className="resume-wrapper">
      <nav>
        <Link to="/">
          <FaHouseDamage />
        </Link>
        <Link to="/projects">
          <FaBriefcase />
        </Link>
      </nav>
      <div>
        <img src={resume_p1} alt="resume" />
        <img src={resume_p2} alt="resume" />
        <img src={resume_p3} alt="resume" />
      </div>
    </div >
  )
}
export default ResumePage