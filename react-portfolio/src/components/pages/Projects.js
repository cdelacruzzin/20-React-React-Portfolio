import React, { useState } from 'react';
import mode_de_vie from '../images/project-icons/mode-de-vie.PNG';
import itinerary_planner from '../images/project-icons/itinerary-planner.PNG';
import nosql_social_network_api from '../images/project-icons/nosql-social-network-api.PNG';

import mvc_tech_blog from '../images/project-icons/mvc-tech-blog.PNG';

import ORM_e_commerce_back_end from '../images/project-icons/ORM-e-commerce-back-end.PNG';

import MySQL_employee_tracker from '../images/project-icons/MySQL-employee-tracker.PNG';

import pwa_text_editor from '../images/project-icons/pwa-text-editor.PNG';
import weather_dashboard from '../images/project-icons/weather-dashboard.PNG';

import '../styles/projects.css';
export default function Blog() {


  const topProjects = [
    ['Mode-de-Vie',
      ['https://github.com/PythonFabi/mode-de-vie',
        'https://warm-caverns-23380-13159eb09b79.herokuapp.com/login',
        'deployment',
        mode_de_vie,
        'Mode de Vie is a social platform where users share life experiences, with a rankings page highlighting popular posts. Developed using the MVC paradigm and team collaboration, it features user authentication and database connectivity.',
        'Bcrypt, Express, Handlebars, MySQL, Sequelize, Node.js'
      ],
      'topProjects'],

    ['Itinerary-Planner',
      ['https://github.com/Koro999/itinerary-planner',
        'https://koro999.github.io/itinerary-planner/',
        'deployment',
        itinerary_planner,
        'Our website integrates Google and Wikipedia APIs to provide comprehensive information on various locations, setting us apart from Google Maps. Users can conveniently save and retrieve details about locations, allowing them to return and reference later.',
        'Google Maps API, jQuery, Javascript, Html, CSS'
      ],
      'topProjects'],

  ];

  const backEnd = [
    ['NoSQL-Social-Network-API',
      ['https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API',
        'https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API#demo-links',
        'demo',
        nosql_social_network_api,
        "The SocialNetwork-API powers a social web platform allowing users to post thoughts, react to peers, and maintain a friend list. It's built on Express.js for routing, with MongoDB as the database and Mongoose ODM for data management. Date formatting is handled by Moment.js, while Faker-js seeds the database with mock user and thought data.",
        'Node.js, Express, MongoDB, Mongoose, Insomnia'
      ],
      'backEnd'],

    ['MVC-Tech-Blog',
      ['https://github.com/cdelacruzzin/14-Model-View-Controller-MVC-Tech-Blog',
        'https://warm-spire-10804-b87ddf9aa334.herokuapp.com/',
        'deployment',
        mvc_tech_blog,
        "The platform serves as a space for developers to both publish tech-related blogs and engage with others' posts through comments. It's constructed using Handlebars for templates, Sequelize for data modeling, and express-session for session management.",
        'Handlebars, MVC, Node.js, MySQL, Sequelize, Insomnia, NPM.'
      ],
      'backEnd'],

    // ['ORM-E-Commerce-Back-End',
    //   ['https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End',
    //     'https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End#demo-links',
    //     'demo',
    //     ORM_e_commerce_back_end,
    //     "This is the backend code for an e-commerce platform, built using Express.js API, Sequelize, and a MySQL database. The provided starter code was enhanced with express.js, sequelize, and dotenv for seamless MySQL interactions. The application's main endpoints are: Categories, Products, and Tags, each offering functionalities to GET (all and by ID), POST (create), PUT (update by ID), and DELETE (by ID).",
    //     'Node.js, Express.js, MySQL, Sequelize, Insomnia'
    //   ],
    //   'backEnd'],

    ['SQL-Employee-Tracker',
      ['https://github.com/cdelacruzzin/12-SQL-Employee-Tracker',
        'https://drive.google.com/file/d/1_Z3yE_0LUblo5XvWU2eR_SON3tpqBQgF/view',
        'demo',
        MySQL_employee_tracker,
        "This command-line application assists in managing a company's departments, roles, and employees. It offers an interactive interface for database operations, enabling business owners, HR professionals, and managers to maintain and access their organizational data efficiently, all from their terminal.",
        ' Node.js, Inquirer.js, NPM, MySQL'
      ],
      'backEnd'],
  ]

  const frontEnd = [
    // ['Itinerary-Planner',
    //   ['https://github.com/Koro999/itinerary-planner',
    //     'https://koro999.github.io/itinerary-planner/',
    //     'deployment',
    //     itinerary_planner,
    //     'Our website integrates Google and Wikipedia APIs to provide comprehensive information on various locations, setting us apart from Google Maps. Users can conveniently save and retrieve details about locations, allowing them to return and reference later.',
    //     'Google Maps API, jQuery, Javascript, Html, CSS'
    //   ],
    //   'frontEnd'],

    ['PWA-Text-Editor',
      ['https://github.com/cdelacruzzin/19-Progressive-Web-Applications-PWA-Text-Editor',
        'https://pwa-text-editor-app-98a67a010265.herokuapp.com/',
        'deployment',
        pwa_text_editor,
        'The text editor is developed using JavaScript and Node.js and operates as a Progressive Web App, ensuring functionality even offline. With the integration of tools like Webpack and NPM, it offers smooth performance and reliable features.',
        'PWA, Lighthouse, Webpack, Service Worker, IndexedDB, Cache'
      ],
      'frontEnd'],

    ['Weather-Dashboard',
      ['https://github.com/cdelacruzzin/Weather-Dashboard',
        'https://cdelacruzzin.github.io/Weather-Dashboard/',
        'deployment',
        weather_dashboard,
        'This website provides users with the current weather and a 5-day forecast for their chosen city. It addresses the need for users to view weather predictions for various cities, aiding in their planning. The project enhanced my skills in utilizing server-side APIs and extracting relevant data from them.',
        'HTML, CSS, Javascript, Weather API, jquery.'
      ],
      'frontEnd']
  ]
  const allProjects = [topProjects, frontEnd, backEnd]



  const [hoveredProjectID, setHoveredProjectID] = useState(null);
  const [isVisible, setIsVisible] = useState(false);


  console.log(isVisible)
  const setProjects = (projects) => {

    return projects.map((projectCategory, index) => {
      const src = projectCategory[1][3];

      return (
        <div className='project-entry-column col-md-4'>
          <div
          onClick={() => {
            if (hoveredProjectID !== projectCategory[0]) {
              setHoveredProjectID(projectCategory[0]);
              setIsVisible(true);
            } else {
              setHoveredProjectID(null);
              setIsVisible(false);
            }
          }}
            onMouseEnter={() => {
              setHoveredProjectID(projectCategory[0]);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredProjectID(null);
              setIsVisible(false);
            }}
            className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg'>
              <span className='img-wrapper'>
                <img src={src} className='project-img' alt={`Project-${projectCategory[0]}`} />
                <span className='thumb-info-title'>
                  <span className='thumb-info-inner'>
                    {projectCategory[0]}
                  </span>
                </span>
              </span>
            </div>
            {hoveredProjectID === projectCategory[0] && (
              <div className={isVisible ? "description-box visible d-flex flex-column justify-self-center align-self-center" : "description-box d-flex flex-column justify-self-center align-self-center"}>

                <div className='d-flex flex-row justify-content-center'>
                  <div className="repo bg-dark d-flex">
                    <a className='project-links d-flex align-self-center justify-content-center' href={projectCategory[1][0]}>
                      github
                    </a>
                  </div>
                  <div className="repo bg-dark d-flex">
                    <a className='project-links  d-flex align-self-center justify-content-center' href={projectCategory[1][1]}>
                      {projectCategory[1][2]}
                    </a>
                  </div>
                </div>
                <div className="repo bg-dark d-flex flex-column align-self-center">
                  <a className='project-links px-5 d-flex  text-center' href={projectCategory[1][1]}>
                    {projectCategory[1][5]}
                  </a>
                </div>

                <div className="repo-desc bg-dark d-flex flex-column align-self-center ">
                  <h2 className='project-links d-flex align-self-center justify-content-center my-3 underlined'>
                    <strong >Project Description</strong>
                  </h2>
                  <p className='p-3'>
                    {projectCategory[1][4]}
                  </p>
                </div>
              </div>


            )}
          </div>
        </div>
      );
    });
  };


  // <div className="description-box d-flex flex-column justify-content-center ">
  //             <div className='d-flex flex-row justify-content-center'>
  //               <div className="repo bg-dark d-flex">
  //                 <a className='project-links d-flex align-self-center justify-content-center' href={projectCategory[1][0]}>
  //                   github
  //                 </a>
  //               </div>
  //               <div className="repo bg-dark d-flex">
  //                 <a className='project-links  d-flex align-self-center justify-content-center' href={projectCategory[1][1]}>
  //                   {projectCategory[1][2]}
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="repo bg-dark d-flex flex-column align-self-center">
  //                 <a className='project-links  d-flex align-self-center justify-content-center' href={projectCategory[1][1]}>
  //                   {projectCategory[1][5]}
  //                 </a>
  //               </div>

  //             <div className="repo-desc bg-dark d-flex flex-column align-self-center ">
  //               <h2  className='project-links d-flex align-self-center justify-content-center my-3 underlined'>
  //                 <strong >Project Description</strong>
  //               </h2>
  //               <p>
  //               {projectCategory[1][4]}
  //             </p>
  //             </div>
  //           </div>





  const setCategory = allProjects.map((projectCat) => {
    return (
      <div className="d-flex flex-column align-items-center px-5">
        <div className="vertical-line my-3 "></div>
        <h2 className='heading '>{projectCat[0][2]}</h2>
        <div className='horizontal-line rounded-box mb-5'></div>
        <div className='project-container row'>
          {setProjects(projectCat)}
        </div>
      </div>
    );
  });
  return (

    <div>
      {setCategory}
    </div>
  );
}
