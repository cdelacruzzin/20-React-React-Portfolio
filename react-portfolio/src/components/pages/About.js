import { React, useState } from 'react';
import { animated } from 'react-spring';
import '../styles/about.css';
import avatar2 from '../images/Capture.PNG';

export default function About() {

  const iconArr = ['css', 'express', 'git', 'github', 'HTML', 'js', 'mern', 'mongodb', 'mysql', 'node', 'npm', 'react'];

  const imgsrc = {};

  const [scaleStyles, setScaleStyles] = useState(Array(iconArr.length).fill('scale(1)'));

  const handleHoverAction = (event, scale) => {
    // "event" is the React SyntheticEvent object
    const divElement = event.currentTarget;
    const index = parseInt(divElement.getAttribute('data-index'), 10); // Get index
    const newScaleStyles = [...scaleStyles];  //create a shallow copy of the existing scaleStyles array and store it in a new variable newScaleStyles.
    newScaleStyles[index] = `scale(${scale})`;
    setScaleStyles(newScaleStyles);
  };


  const handleHover = (event) => handleHoverAction(event, 1.1);
  const handleHoverOut = (event) => handleHoverAction(event, 1);

  iconArr.forEach((icon) => imgsrc[icon] = require(`../images/skillIcons/${icon}.svg`));

  const setDivs = iconArr
    .map((icon, index) =>
      <animated.div style={{ transform: scaleStyles[index] }} key={index} className='col-md-2 col-sm-4 col-12 skill d-flex justify-content-center align-items-center flex-column m-2 pt-2' onMouseOver={handleHover} onMouseOut={handleHoverOut} id={icon} data-index={index}>
        <img src={imgsrc[icon]} alt={icon}></img>
        <h5>{icon}</h5>
      </animated.div>
    );


  return (
    <main className='p-5 '>
      <div className='d-flex justify-content-center mb-5'>
        <div className='col-md-6'>
          <div className=" h-100 d-flex flex-column align-items-center">



            <div className='profile-container'>
              <img src={avatar2} alt='avatar' className='avatar'></img>

            </div>
            <div className="vertical-line"></div>
            <h2 className="mt-3 heading">ABOUT ME</h2>
            <h2 className='heading'>Just a bit...</h2>
            <p className='text-center'>
              Hello and welcome. I'm Carlos Dela Cruz, a Full Stack Developer with a
              blend of technical skills and creative vision. Having graduated from
              University of Toronto's esteemed full-stack flex development bootcamp with a
              95%, I specialize in database management, including both MySQL and NoSQL, Express,
              React, Node.js.
              <h2 className='my-5'>Educational Milestones</h2>
              The bootcamp experience at University of Toronto was an intensive but fulfilling journey.
              The curriculum was comprehensive, covering everything from fundamental web development
              techniques to the nuanced applications of modern JavaScript frameworks.
              This academic venture has armed me with the skills required to excel in
              today's fast-paced tech landscape.
            </p>

            <h2 className='my-3'>Check out my resume</h2>
            <a href='https://docs.google.com/document/d/1zke1d35Mmcl6ZtYxAuzp1ZBTjjPvKcw6suzLyIquCGc/edit?usp=sharing' className=' mb-4 mt-1 resume-a' id='resume'>
              <img src={require('../images/skillIcons/resume.svg').default} alt='resume' />
            </a>
            <div className="vertical-line"></div>
            <h2 className='heading'>My Skillset</h2>
            <div className='horizontal-line rounded-box'></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row d-flex justify-content-center">
          {setDivs}
        </div>
      </div>
    </main>
  );
}
