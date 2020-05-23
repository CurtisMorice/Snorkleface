import React from "react";
import { Link } from "gatsby";
import { FaHouseDamage, FaAddressCard } from "react-icons/fa";
import "../styles/project.scss";

const ProjectsPage = () => {
  return (
    <div className="projects-wrapper">
      <nav>
        <Link to="/">
          <FaHouseDamage />
        </Link>
        <Link to="/resume">
          <FaAddressCard />
        </Link>
      </nav>
      <a
        href="https://www.welspun.com"
        target="_blank"
        rel="noopener noreferrer"
      >

        <h2 class="link">Welspun</h2>
      </a>
      <a
        href="https://webcenter.sisyphus-industries.com/users/sign_in"
        target="_blank"
        rel="noopener noreferrer"
      >

        <h2 class="link">Sisyphus Industries</h2>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.sisbot.sisyphus&hl=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >

        <h2 class="link">Sisyphus on Google Play</h2>
      </a>
      <h2>Dignity 4 Dementia</h2>
      <iframe
        src="https://dignity4dementia.com/"
        width="900"
        height="600"
        title="dignity4dementia website" />
      <h2>Banks Electric Company</h2>
      <iframe
        src="http://bankselectriccompany.com/"
        width="900"
        height="600"
        title="Banks Electric Companies website"
        style={{
          backgroundColor: "#fff"
        }}
      />
    </div>
  );
};

export default ProjectsPage;
