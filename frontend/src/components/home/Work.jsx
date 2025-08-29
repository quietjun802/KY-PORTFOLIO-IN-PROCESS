import React from 'react'
import "./styles/Work.scss"
import { works } from '../../utils/work'

const Work = () => {
  return (
    <div className="work-inner">
      <h1 className="tit">WORKS.</h1>
      <ul className="lst">
        {works.map((item) => (
          <li key={item.id}>
            {/* 텍스트 블록 */}
            <a href={item.links.demo} target="_blank" rel="noopener noreferrer" className="t-wrap">
              <h4 className="list-lst">{item.title}</h4>
              <p className="txt">{item.subtitle}</p>
              <p className="txt">{item.description}</p>
              <div className="hash-wrap">
                {item.tags.map((tag, i) => (
                  <span key={i} className="hash">#{tag}</span>
                ))}
              </div>
            </a>

            {/* 이미지 블록 → public/img 경로 직접 사용 */}
<a 
  href={item.links.demo} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="img-wrap"
>
  <img 
    src={item.thumbnail.replace(".png", ".webp")} 
    alt={item.title} 
  />
</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Work
