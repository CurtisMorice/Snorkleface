import React from 'react';
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'

const Footer = () => {
  return (
    <footer>
      I am not on <img src={Facebook} width="150" height="50" alt="Facebook" />
      I am not on <img src={Twitter} width="150" height="50" alt="Twitter" />
      I am not on <img src={Instagram} width="150" height="50" className="instagram_img" alt="Instagram" />
      I am on     <img src={Github} width="150" height="50" className="github_img" alt="Github" />
    </footer>
  )
}
export default Footer