import React from "react"
import { Link } from "gatsby"
import "../styles/reset.css"
import "../styles/main.scss"
import { useStaticQuery, graphql } from "gatsby"

const ResumePage = () => {
    const data = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "curtismorice_fs_resume" }) {
        name
        extension
        publicURL
      }
    }
  `)
  return(
    <div>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Resume data={data} />
      </div>
    </div>
  )
}
class Resume extends React.Component {
  render() {
    return (
    <div>
      <a href={this.props.data.pdf.publicURL} target="_blank"  rel="noopener noreferrer">
        Click ME
      </a>
      <img src="http://localhost:8000/static/03f0e953beb08d1d4ff79fe23fe48037/curtismorice_fs_resume.pdf" width="800" height="2000" alt="resume"/>
    </div>
    )
  }
}
export default ResumePage