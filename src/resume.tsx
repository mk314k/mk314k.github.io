import './resume.css';
import { useState } from 'react';

export const resume = {
    name: "Kartikesh Mishra",
    contact: {
        email: "mk314k@mit.edu",
        linkedin: "linkedin.com/in/mk314k ",
        website: "mk314k.github.io",
        github: "github.com/mk314k"
    },
    education: [
        {
            school: "Massachusetts Institute of Technology",
            location: "Cambridge, MA",
            degree: [
                {
                  name: "Master of Engineering in Computer Science (Artificial Intelligence)",
                  score: "",
                  graduation: "Class of 2024"
                },
                {
                    name: "Bachelor of Engineering in Computer Science & Engineering",
                    score: "",
                    graduation: "Class of 2024"
                },
                {
                    name: "Bachelor of Science in Mathematics",
                    score: "",
                    graduation: "Class of 2024"
                }
            ]
        }
    ],
    courses: {
        Fundamentals: [
            "Machine Learning", "Design and Analysis of Algorithms", "Foundation of Statistics", 
            "Elements of Software Construction", "Computational Structures", "Fundamentals of Programming", 
            "Real Analysis"
        ],
        'Specialized (Graduate)': [
            "Deep Learning", "Computer Vision", "Advanced Computational Photography", "Large Language Models", "Matrix Methods", "Theory of Probability"
        ]
    },
    skills: {
        General: [
            "Python", "C++", "Typescript", "Arduino", "ESP32", "Jetson Tx2", "Proteus", "ROS", "Linux", "Bash", "Git", "VS Code", "Vim"
        ],
        'Machine Learning': [
            "Tensorflow", "Pytorch", "Transformer Lens", "NumPy", "OpenCV", "Scikit-Learn"
        ],
        'Web Development': [
            "HTML", "CSS", "Javascript", "React", "Node.js", "Express.js", "SQL"
        ]
    },
    experiences: [
        // {
        //   title: "ML Lab Assistant, Intro to Machine Learning",
        //   timespan: "Sept 2023 - Dec 2023",
        //   company: "Electrical Engineering and Computer Science (EECS) Department, MIT",
        //   location: "Cambridge, MA",
        //   work: [
        //       "Supervised and facilitated collaborative group sessions for 50 students in weekly interactive ML labs, enhancing their understanding of neural networks, decision trees, and reinforcement learning",
        //       "Conducted weekly office hours to provide personalized assistance to students and evaluate their progress on lab assignments"
        //   ]
        // },
        {
          title: "Undergraduate ML Research Assistant",
          timespan: "Nov 2022 - Aug 2023",
          company: "Tegmark Group, MIT",
          location: "Cambridge, MA",
          work: [
              "Achieved >95% accuracy on both train and test datasets by training over 50 one and two-layer transformer models for learning ordinal information, utilizing GPT-2 architecture with varying hyperparameters and parameter sizes.",
              "Identified neurons responsible for processing ordinal information, achieving a 60% accuracy from the selected neurons, a significant improvement compared to the 15% accuracy of its untrained counterparts; conducted through extensive analysis of encoder representations and attention activations of transformer models using TransformerLens and PyTorch.",
              "Designed a rank probing method to measure the contribution of neurons to ordinal information processing, enhancing the understanding of model performance by investigating differential ranking algorithms from the literature."
          ]
        },
        {
            title: "Machine Learning Research Intern",
            timespan: "June 2022 - Aug 2022",
            company: "Open Learning Exchange Nepal, MISTI MIT",
            location: "Kathmandu, Nepal",
            work: [
                "Achieved 99% accuracy in detecting and classifying text and images in scanned PDF by developing a parser using OpenCV and Ghostscript; originally designed to assist manual data collection but was more used like automation.",
                "Improved the computational speed of the parser model 10x by engineering custom geometry-based data structures, and dynamically merging overlapped bounding rectangles.",
                "Designed an end-to-end deep learning architecture (Convolutional Recurrent Neural Network) using TensorFlow for Devanagari and English text recognition."
            ]
        },
        {
            title: "Undergraduate Research Assistant",
            timespan: "June 2021 - Dec 2021",
            company: "Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT",
            location: "Cambridge, MA",
            work: [
                "Developed a ROS program to auto-collect data from various sensors (including camera) for DJI Matrix 300 drones.",
                "Built a ROS framework in a team of 3 to allow a single code run in both Flightmare Simulator and physical drone.",
                "Developed drone autonomy software for autonomous flight with velocity control and path planning."
            ]
        }
    ],
    projects: [
        {
          name: "Inpainting",
          tools: ["C++", "Python"],
          description:
            "Implemented conjugate gradient descent (CGD) algorithm for deblurring images; solved poison equations and used CGD for image composition (overlaying an image over another). See the source on GitHub",
          code: "GitHub link here",
        },
        {
          name: "EQT",
          tools: ["Typescript", "Figma", "node.js", "express.js", "HTML", "CSS", "SQL"],
          description:
            "Developed a full-stack education platform to match students with tutors; designed a mathematical model to balance resources for students with diverse economic statuses. See the source on GitHub",
          code: "GitHub link here",
        },
        {
          name: "ReKnew (Projecting Past Memories on Real Life Objects)",
          tools: ["Python", "OpenCV", "MediaPipe"],
          description: "Designed an algorithm using OpenCV and MediaPipe to detect targeted objects through the camera and augment our memories image on it",
          code: "GitHub link here",
        },
        {
          name: "R3DVAE-GAN",
          tools: ["Python", "Pytorch", "VAE", "GAN", "Attention"],
          description: "Augmented attention blocks in variational autoencoders and combined them with a generative adversarial network; trained them on dataset ShapeNetCore to learn 3d shapes from a single 2d image. See GitHub.",
          code: "GitHub link here",
        },
        {
          name: "Chess",
          tools: ["Python", "C++", "Arduino", "SQLite", "HTTP"],
          description: "A server-based chess engine allows two users across the globe to play using Arduino controlled Lcd display, taking inputs through buttons",
          code: "GitHub link here",
        },
      ],
      eca: [
        {
          name: "MITeri Club",
          role: "WebMaster",
          description: "Manage the website by updating events, building a new interactive website, and fostering the Nepalese community at MIT",
        },
        {
          name: "Momentum AI MIT",
          role: "Executive Member",
          description: "Instructed Machine Learning with Python to build an end-to-end model over a period of two weeks for high school students in Boston",
        },
      ],
      awards: [
        {
          name: "Honorable mention - International Mathematics Olympiad (first from my country Nepal)",
        },
        {
          name: "3rd Best Project - Samsung Future of Wellness Hackathon 2022 (Project: ReKnew)",
        },
        {
          name: "Runner up - Easy A x Polkadot Web3 Hackathon 2023 (Project: Greenify)",
        },
      ]
} as const

export function Resume() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const toggleShowExperiences = () => {
    setShowAllExperiences(!showAllExperiences);
  };
    return (
      <>
        <div className='container resume flex-vertical'>
          <div>
          {/* <h1 className='name'>{resume.name}</h1>
          <div className='contact-section flex-horizontal'>
            {Object.entries(resume.contact).map(([key, value]) => (
              <h3 className='contact' key={key}>
                {value}
              </h3>
            ))}
          </div>
          <section>
            <h2>Education</h2>
            {resume.education.map((school, index) => (
              <div className="education-item" key={index}>
                <div className='company flex-horizontal'>
                  <h3>{school.school}</h3>
                  <p>{school.location}</p>
                </div>
                {school.degree.map((degree, idx) => (
                  <div className="degree-item flex-horizontal" key={idx}>
                    <h4>{degree.name}</h4>
                    <p>{degree.graduation}</p>
                  </div>
                ))}
              </div>
            ))}
          </section> */}
          </div>
          <div className='exp-skill flex-horizontal'>
          <section className='experience-section'>
            <h2 className='section-title'>Experiences</h2>
            <div className='experience-container'>
              {resume.experiences.slice(0, showAllExperiences ? undefined : 4).map((experience, index) => (
                <div className="experience-item" key={index}>
                  <div className='role flex-horizontal'>
                    <h3>{experience.title}</h3>
                    <p>{experience.timespan}</p>
                  </div>
                  <div className='company flex-horizontal'>
                    <p>{experience.company}</p>
                    <p>{experience.location}</p>
                  </div>
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
            <div className='project-container flex-horizontal'>
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