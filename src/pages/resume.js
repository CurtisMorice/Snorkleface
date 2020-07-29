import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Head from "../components/head"
import { FaHouseDamage, FaBriefcase } from "react-icons/fa"
import resume_pg1 from "../../static/curtismorice_fs_resume_pg1.jpg"
import resume_pg2 from "../../static/curtismorice_fs_resume_pg2.jpg"
import resume_pg3 from "../../static/curtismorice_fs_resume_pg3.jpg"
import resume_pg4 from "../../static/curtismorice_fs_resume_pg4.jpg"
import "../styles/resume.scss"

const ResumePage = () => {
  return (
    <div className="resume-wrapper">
      <Head title="Résumé" />
      <nav>
        <Link to="/">
          <FaHouseDamage />
        </Link>
        <Link to="/projects">
          <FaBriefcase />
        </Link>
      </nav>
      <div>
        <img src={resume_pg1} alt="resume" />
        <img src={resume_pg2} alt="resume" />
        <img src={resume_pg3} alt="resume" />
        <img src={resume_pg4} alt="resume" />
      </div>
      <Footer />
    </div>
  )
}
export default ResumePage
