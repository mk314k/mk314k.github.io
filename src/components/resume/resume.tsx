import './resume.css';
import { useState } from 'react';
import { resume } from '../../content/resume';

// const categories = ["All", "AI/ML", "Web Dev", "Teaching", "Web3"];

export function Resume() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const toggleShowExperiences = () => {
    setShowAllExperiences(!showAllExperiences);
  };
    return (
      <>
        <div className='container resume flex-vertical'>
          <div className='exp-skill flex-horizontal'>
          <section className='experience-section'>
            <h2 className='section-title'>Experiences</h2>
            <div className='experience-container'>
              {resume.experiences.slice(0, showAllExperiences ? undefined : 3).map((experience, index) => (
                <div className="experience-item" key={index}>
                  <div className='company flex-horizontal'>
                    <h3>{experience.company}</h3>
                    <p>{experience.location}</p>
                  </div>
                  {experience.title_timespan.map((tt, _) => (
                    <div className='role flex-horizontal'>
                      <p>{tt[0]}</p>
                      <p>{tt[1]}</p>
                    </div>
                  ))}
                  {/* <div className='role flex-horizontal'>
                    <p>{experience.title}</p>
                    <p>{experience.timespan}</p>
                  </div> */}
                  <ul>
                    {experience.work.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {!showAllExperiences && (
                <p className="show-more-button" onClick={toggleShowExperiences}>
                  Show More
                </p>
              )}
            </div>
          </section>
          <section className='skill-section'>
            <h2 className='section-title'>Skills</h2>
            {Object.entries(resume.skills).map(([category, skills])=>(
              <div className='flex-horizontal'>
                <h3>{category}</h3>
                <p>{skills.join(", ")}</p>
              </div>
            ))}
          </section>
          </div>
          <section>
            <h2 className='section-title'>Projects</h2>
            <div className='project-container'>
              {resume.projects.map((project, index) => (
                <div className="project-item" key={index}>
                  <h3>{project.name}</h3>
                  <p>Tools: {project.tools.join(", ")}</p>
                  <p>{project.description}</p>
                  <a href={project.code}>GitHub Link</a>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className='section-title'>CourseWork</h2>
            {Object.entries(resume.courses).map(([category, courses])=>(
              <div className='course-item'>
                <h3>{category}</h3>
                <p>{courses.join(", ")}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className='section-title'>Extracurriculars</h2>
            {resume.eca.map((activity, index) => (
              <div className="eca-item" key={index}>
                <h3>{activity.name + ' ('+activity.role+')'}</h3>
                <ul><li>{activity.description}</li></ul>
              </div>
            ))}
          </section>
          <section>
            <h2 className='section-title'>Awards</h2>
            {resume.awards.map((award, index) => (
              <div className="award-item" key={index}>
                <p>{award.name}</p>
              </div>
            ))}
          </section>
        </div>
      </>
    );
  }