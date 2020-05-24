import React from 'react';
// import logos from './logos'
import Aws from './logos/aws.png'
import Backbonejs from './logos/Backbonejs_logo.png'
import Bootstrap from './logos/bootstrap.svg'
import HTML_CSS_JS from './logos/html_css_js.png'
import Java from './logos/java.png'
import Nodejs from './logos/node_js.png'
import PHP from './logos/php.png'
import React_Redux from './logos/react.svg'
import ROR from './logos/rails-logo.svg'
import SASS from './logos/sass.png'
import Shopify from './logos/shopify_logo_black.png'
import Wordpress from './logos/wordpress.png'
import lac_dannecy_square from '../../static/lac_dannecy_square.jpg'
const logoArray = [
  Aws,
  Backbonejs,
  Bootstrap,
  HTML_CSS_JS,
  Java,
  Nodejs,
  PHP,
  React_Redux,
  ROR,
  SASS,
  Shopify,
  Wordpress
]
const Projects = () => {
  return (
    <section style={{ backgroundImage: `url(${ lac_dannecy_square })` }}>
      <div className="inner-wrapper">
        <h2 style={{ color: '#141A46', fontFamily: 'monospace' }}>Tech-Stack</h2>
        <div className="logo-container">
          {logoArray.map((logo, id) => <img key={id} src={logo} description='logo' alt="technology logos" height={100} width={205} style={{ margin: '20px' }} />)}
        </div>
      </div>
    </section>
  )
}
export default Projects
