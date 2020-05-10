import React from "react"
import { Link } from "gatsby"
import { FaAngleLeft } from "react-icons/fa"
const ProjectsPage = () => {
  return (
    <div className="projects-wrapper">
      <div>
        <Link to="/">
          <FaAngleLeft /> Back To Main
        </Link>
      </div>
      <h2>Dignity 4 Dementia</h2>
      <iframe
        src="https://dignity4dementia.com/"
        width="900"
        height="600"
      ></iframe>
      <h2>Banks Electric Company</h2>
      <iframe
        src="http://bankselectriccompany.com/"
        width="900"
        height="600"
      ></iframe>
      <a
        href="https://webcenter.sisyphus-industries.com/users/sign_in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Sisyphus Industries</h2>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.sisbot.sisyphus&hl=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Sisyphus on Google Play</h2>
      </a>
    </div>
  )
}
export default ProjectsPage
