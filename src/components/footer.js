import React from 'react';
import Github from '../../assets/GitHub-Mark-Light-64px.png'

const Footer = () => {
  return (
    <footer>
      You can find me on  <a href="https://github.com/CurtisMorice" target="_blank" rel="noopener noreferrer" ><img src={Github} width="150" height="50" className="github_img" alt="Github" /></a>
    or <a href="mailto:curtismorice@gmail.com" target="_blank" rel="noopener noreferrer">curtismorice@gmail.com</a>
    </footer>
  )
}
export default Footer