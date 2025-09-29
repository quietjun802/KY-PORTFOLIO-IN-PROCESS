import React from 'react'
import { FaGithub } from "react-icons/fa"
import { SiNotion } from "react-icons/si"
import footer from "../../utils/footer"
import "./styles/Footer.scss"
const Footer = () => {
  return (
    <footer>
      <div className='inner foot-inner'>
        <div className='left'>
          <h2>{footer.brand.name}</h2>
        </div>
        <div className='right'>
          <a
            href="https://github.com/quietjun802/KY-PORTFOLIO-IN-PROCESS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.notion.so/portfolio-25af8f48641e80a6aa23f7fe11d41565?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNotion size={28} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer