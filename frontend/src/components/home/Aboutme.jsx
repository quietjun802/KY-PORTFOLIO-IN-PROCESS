import React from 'react'
import "./styles/Aboutme.scss"
import aboutMe from '../../utils/aboutme'

const Aboutme = () => {
  const profile = aboutMe.basic
  const skills = aboutMe.skills
  const exper = aboutMe.experiences
  const interests = aboutMe.interests

  return (
    <div className='inner aboutme-inner'>
      <h1 className="tit">
        <span className="star-spin"><i className="star">✱</i></span>
        aboutMe
      </h1>
      <div className="t-wrap">
        <h2 className="sub-tit">profile</h2>
        <p className="txt">
          들어가는 최종 요소나 사용된다. <br />
          레이아웃 들어가는 로렘 부르며,
          <br /> 들어가는 최종 전에 프로젝트 사용할 사용된다.
        </p>
      </div>

      <div className="about-container">
        <div className="in-wrap">
          <h4 className='list-lst'>list-tit</h4>
          <ul className="lst">
            <li><strong>이름</strong> : {profile.name}</li>
            <li><strong>나이</strong> : {profile.age}</li>
            <li><strong>사는곳</strong> : {profile.location}</li>
            <li><strong>MBTI</strong> : {profile.mbti}</li>
          </ul>
        </div>

        <div className="in-wrap skills-wrap">
          <h4 className='list-lst'>Skills</h4>
          <ul className="lst">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="in-wrap exper-wrap">
          <h4 className='list-lst'>Experiences</h4>
          <ul className="lst">
            {exper.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="in-wrap interests-wrap">
          <h4 className='list-lst'>Interests</h4>
          <ul className="lst">
            {interests.map((int, i) => (
              <li key={i}>{int}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
