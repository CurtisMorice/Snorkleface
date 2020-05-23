import React from "react"
import Header from "../components/header"
import AboutCurtis from "../components/about-curtis"
import CareerHistory from "../components/career-history"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <body>
      <Header />

      <div className="parallax sisyphus">
        <h3> My place of employment </h3>
      </div>

      <AboutCurtis id="About_Me" />

      <div className="parallax cafe-curt"> </div>

      <CareerHistory />

      <div className="parallax pond"></div>

      <Projects />

      <div className="parallax snorkleface">
        <h3>
          This is Snorkleface
          <br />
          He is my smelly bubby who likes to eat wild crunchies.
        </h3>
      </div>

      <Footer />
      <script src="" async defer></script>
    </body>
  )
}
export default IndexPage
