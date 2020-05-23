import React from "react";
import { Link } from "gatsby";
import { FaHouseDamage, FaAddressCard } from "react-icons/fa";
import Footer from '../components/footer'
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

        <h2 className="link">Welspun</h2>
      </a>
      <a
        href="https://webcenter.sisyphus-industries.com/users/sign_in"
        target="_blank"
        rel="noopener noreferrer"
      >

        <h2 className="link">Sisyphus Industries</h2>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.sisbot.sisyphus&hl=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >

        <h2 className="link">Sisyphus on Google Play</h2>
      </a>
      <a
        href="https://dignity4dementia.com/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <h2 className="link">Dignity 4 Dementia</h2>
      </a>
      <iframe
        src="https://dignity4dementia.com/"
        width="900"
        height="600"
        title="dignity4dementia website"
      />
      <a
        href="http://bankselectriccompany.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="link">Banks Electric Company</h2>
      </a>
      <iframe
        src="http://bankselectriccompany.com/"
        width="900"
        height="600"
        title="Banks Electric Companies website"
        style={{
          backgroundColor: "#fff"
        }}
      />
      <Footer />
    </div>

  );
};

export default ProjectsPage;
