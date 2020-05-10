/*jshint esversion: 6 */

import * as React from 'react';
import { Link } from "gatsby";

/**************************** HEADER ANIMATION ****************************************/


const Header = () => {
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
  },[])
  return (
    <header>
      <a href="https://github.com/CurtisMorice" target="_blank" rel="noopener noreferrer">
        <h1 className="animate"> Curtis Morice </h1>
      </a>
      <nav>
        <Link to="/#"> About Me </Link> <Link to="/resume"> Résumé </Link>
        <Link to="/projects"> Projects </Link>
      </nav>
    </header>
  )
}
export default Header