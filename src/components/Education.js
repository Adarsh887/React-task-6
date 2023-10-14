import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <section id="education-section" className="my-5 ">
      <br /><br /><FontAwesomeIcon icon={faGraduationCap} className='text-dark fs-1 p-2' /><br/>
      <h2 className="fw-bolder text-dark">Educational Background</h2><br />
      <div>
        <h4 className='text-dark p-1 m-0'>Vellore Institute of Technology, Chennai</h4>
        <p className="text-dark p-1 m-0">B.Tech. Computer Science and Engineering with specialization in Artificial Intelligence & Robotics</p>
        <p className="text-dark p-1 m-0">Graduating in 2025</p>
      </div>
    </section>
  );
}

export default Education;