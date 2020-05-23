/*jshint esversion: 6 */
import * as React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaHouseDamage, FaAddressCard, FaBriefcase } from "react-icons/fa";
import '../styles/header.scss'
/**************************** HEADER ANIMATION ****************************************/

const Header = () => {
  const headerData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)
  React.useEffect(() => {
    const text = document.querySelector(".animate")
    const strText = text.textContent
    const splitText = strText.split("")
    text.textContent = ""

    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML +=
        "<span class='animate_title'>" + splitText[i] + "</span>"
    }
    let char = 0
    let timer = setInterval(onTick => {
      const span = text.querySelectorAll("span")[char]
      span.classList.add("colorMe")
      char++
      if (char === splitText.length) {
        complete()
        return
      }
    }, 300)
    let complete = () => {
      clearInterval(timer)
      timer = null
    }
  }, [])
  return (
    <header>
      <a href="https://github.com/CurtisMorice" target="_blank" rel="noopener noreferrer">
        <h1 className="animate"> {headerData.site.siteMetadata.author} </h1>
      </a>
      <nav>
        <Link to="/#"> About Me
        <FaHouseDamage />
        </Link>
        <Link to="/resume"> Résumé
        <FaAddressCard />
        </Link>
        <Link to="/projects"> Projects
        <FaBriefcase />
        </Link>
      </nav>
    </header>
  )
}
export default Header