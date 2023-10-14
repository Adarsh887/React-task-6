import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const skillsList = ["HTML", "CSS", "Bootstrap", "JavaScript", "React JS", "Express JS", "Java", "Python", "C", "C++", "MongoDB","R"];

function Skills() {
  return (
    <section id="skills-section" className="my-5">
      <div className='skill-head'>
        <FontAwesomeIcon icon={faCode} className='text-dark fs-1 p-2' />
        <h2 className='fw-bolder p-2'>Skills and Technologies</h2>
      </div><br/>
      <div className="row">
        {skillsList.map((skill, index) => (
          <div className={`col-md-6 d-flex ${index % 2 === 0 ? 'justify-content-end' : 'justify-content-start'}`} key={skill}>
            <div className='skill-item border-dark btn btn-dark text-light'>{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;