import './resume.css';
import { useState } from 'react';
import { resume, Role } from '../../content/resume';
import { thesis } from '../../content/about';
import { exportAtsResumePdf } from './exportAtsPdf';

function RoleItem({ role }: { role: Role }) {
  return (
    <div className="experience-item">
      <div className='company flex-horizontal'>
        <h3>{role.company}</h3>
        <p>{role.location}</p>
      </div>
      {role.title_timespan.map((tt, idx) => (
        <div className='role flex-horizontal' key={idx}>
          <p>{tt[0]}</p>
          <p>{tt[1]}</p>
        </div>
      ))}
      {role.about && <p className='org-about'>{role.about}</p>}
      <ul>
        {role.work.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Resume() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const visibleExperiences = showAllExperiences
    ? resume.experiences
    : resume.experiences.slice(0, 3);

  return (
    <>
      <div className='container resume flex-vertical'>
        <div className='exp-skill flex-horizontal'>
          <section className='experience-section'>
            <div className="section-header-row flex-horizontal">
              <h2 className='section-title'>Experience</h2>
              <button
                type="button"
                className="export-pdf-button"
                onClick={exportAtsResumePdf}
              >
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                <span>Export PDF</span>
              </button>
            </div>
            <div className='experience-container'>
              {visibleExperiences.map((experience, index) => (
                <RoleItem role={experience} key={index} />
              ))}
              {!showAllExperiences && resume.experiences.length > 3 && (
                <button
                  type="button"
                  className="show-more-button"
                  onClick={() => setShowAllExperiences(true)}
                >
                  Show {resume.experiences.length - 3} earlier roles ↓
                </button>
              )}
              {showAllExperiences && resume.experiences.length > 3 && (
                <button
                  type="button"
                  className="show-more-button"
                  onClick={() => setShowAllExperiences(false)}
                >
                  Hide earlier roles ↑
                </button>
              )}
            </div>
          </section>
          <section className='skill-section'>
            <h2 className='section-title'>Technical Stack</h2>
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div className='flex-horizontal' key={category}>
                <h3>{category}</h3>
                <p>{skills.join(", ")}</p>
              </div>
            ))}
          </section>
        </div>

        <section>
          <h2 className='section-title'>Research</h2>
          <div className='experience-container'>
            {resume.research.map((role, index) => (
              <RoleItem role={role} key={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='section-title'>Master&apos;s Thesis</h2>
          <div className='thesis-item'>
            <h3>
              <a href={thesis.url} target="_blank" rel="noopener noreferrer">
                {thesis.title} ↗
              </a>
            </h3>
            <p className='thesis-venue'>{thesis.venue} · {thesis.year}</p>
            <p>{thesis.summary}</p>
          </div>
        </section>

        <section>
          <h2 className='section-title'>Teaching</h2>
          <div className='experience-container'>
            {resume.teaching.map((role, index) => (
              <RoleItem role={role} key={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='section-title'>Selected Projects</h2>
          <div className='project-container'>
            {resume.projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h3>{project.name}</h3>
                <p className='project-tools'>{project.tools.join(" · ")}</p>
                <p>{project.description}</p>
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  Source on GitHub ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='section-title'>Honors &amp; Awards</h2>
          {resume.awards.map((award, index) => (
            <div className="award-item" key={index}>
              <p>{award.name}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className='section-title'>Selected MIT Coursework</h2>
          {Object.entries(resume.courses).map(([category, courses]) => (
            <div className='course-item' key={category}>
              <h3>{category}</h3>
              <p>{courses.join(", ")}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className='section-title'>Judging &amp; Mentorship</h2>
          {resume.service.map((activity, index) => (
            <div className="eca-item" key={index}>
              <h3>
                {'url' in activity && activity.url ? (
                  <a href={activity.url} target="_blank" rel="noopener noreferrer">
                    {activity.name} ↗
                  </a>
                ) : (
                  activity.name
                )}
              </h3>
              <ul><li>{activity.description}</li></ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
