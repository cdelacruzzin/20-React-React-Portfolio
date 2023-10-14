import { React, useState } from 'react';
import './styles/footer.css';
import resume from './images/CarlosD-Resume.pdf';

function Footer({ currentPage, handlePageChange }) {

    const icons = ['github', 'linkedin', 'mail', 'resume'];

    const iconLinks = {
        'linkedin': 'https://www.linkedin.com/in/carlos-dela-cruz-45a087227/',
        'github': 'https://github.com/cdelacruzzin',
        'mail': 'mailto:en.carlos.delacruz@gmail.com',
        'resume': 'https://docs.google.com/document/d/1zke1d35Mmcl6ZtYxAuzp1ZBTjjPvKcw6suzLyIquCGc/edit?usp=sharing'
    };
    const imgsrc = {};
    const googleDocID = '1zke1d35Mmcl6ZtYxAuzp1ZBTjjPvKcw6suzLyIquCGc';
    const googleDocURL = `https://docs.google.com/document/d/${googleDocID}/view`;
    const resumeURL = '/CarlosD-Resume.pdf';


    

    for (let index = 0; index < icons.length; index++) {
        imgsrc[icons[index]] = require(`./images/skillIcons/${icons[index]}.svg`)
    }


    // ['scale(1)', 'scale(1)',]
    const [scaleStyle, setScale] = useState(Array(icons.length).fill('scale(1)'));
    const handleHoverAction = (event, scale) => {
        // "event" is the React SyntheticEvent object
        const divElement = event.currentTarget;
        const index = parseInt(divElement.getAttribute('data-index'), 10);
        const newScale = [...scaleStyle];
        newScale[index] = `scale(${scale})`;
        setScale(newScale);
    };
    const handleHover = (event) => handleHoverAction(event, 1.1);
    const handleHoverOut = (event) => handleHoverAction(event, 1);

    const setLinks = icons.map((icon, index) => {
        const isLast = index === icons.length - 1;  //determines if it is the last property in icons. let's us know if we are mapping the resume
        return (
            <a
                className='m-2'
                key={index}
                data-index={index}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                style={{ transform: scaleStyle[index] }}
                {...(isLast ? { href: resume } : { href: iconLinks[icon] })}
            >
                <img src={imgsrc[icon]} alt={icon} />
            </a>
        );
    });



    return (
        <footer className=' mt-5 row'>
            <aside className='col-lg-5 col-12 d-flex flex-column justify-content-center'>
                <h5 className='fs-1 d-flex justify-content-center' >Carlos Dela Cruz</h5>
                <div className='img-links d-flex justify-content-center flex-wrap'>
                    {setLinks}
                </div>
            </aside>

            <section className='col-lg-7 col-12 row'>
                <nav className=' col-12 d-flex justify-content-center flex-column'>
                    <h3 className='text-center mt-5'>Menu</h3>
                    <ul className='nav nav-tabs py-4 row' id='footer-ul'>
                        <li className="nav-item  col-sm-3">
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link ' : 'nav-link'}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item  col-sm-3">
                            <a
                                href="#projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link ' : 'nav-link'}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item col-sm-3">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link ' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='col-12 d-flex justify-content-center'>
                    <h3 className='contact-me '>Contact me:{" "}
                        <a href='mailto:en.carlos.delacruz@gmail.com'>
                            en.carlos.delacruz@gmail.com
                        </a>
                    </h3>
                </div>
            </section>
            <p className='copywrite text-center  mt-4'> &copy; Carlos' Portfolio 2023</p>
        </footer>
    );

}
export default Footer;