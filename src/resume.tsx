import './resume.css';

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
        undergrad: [
            "Machine Learning", "Design and Analysis of Algorithms", "Foundation of Statistics", 
            "Elements of Software Construction", "Computational Structures", "Fundamentals of Programming", 
            "Real Analysis"
        ],
        grad: [
            "Computer Vision", "Advanced Computational Photography", "Large Language Models", "Matrix Methods"
        ]
    },
    skills: {
        general: [
            "Python", "C++", "Typescript", "Arduino", "ESP32", "Jetson Tx2", "Proteus", "ROS", "Linux", "Bash", "Git", "VS Code", "Vim"
        ],
        ml: [
            "Tensorflow", "Pytorch", "Transformer Lens", "NumPy", "OpenCV", "Scikit-Learn"
        ],
        web: [
            "HTML", "CSS", "Javascript", "React", "Node.js", "Express.js", "SQL"
        ]
    },
    experiences: [
        {
            title: "Machine Learning Research Intern",
            timespan: "June 2022 - August 2022",
            company: "Open Learning Exchange Nepal, MISTI MIT",
            location: "Kathmandu, Nepal",
            work: [
                "Developed a pdf parser model to detect and classify text, images, and tables using OpenCV; tested on 200 pdf pages with 99% accuracy",
                "Created custom data structure for document pages using underlying geometric bounds to speed up the parser model by 10 times",
                "Designed a deep learning architecture, Convolutional Recurrent Neural Network using TensorFlow for Devanagari and English text recognition"
            ]
        },
        {
            title: "ML Lab Assistant, Intro to Machine Learning",
            timespan: "January 2022 - May 2022",
            company: "Electrical Engineering and Computer Science (EECS) Department, MIT",
            location: "Cambridge, MA",
            work: [
                "Supervised a collaborative group session of 50 students in weekly interactive ML labs and examined their lab assignment progress",
                "Held weekly office hours to help students understand ML content such as neural networks, decision trees, reinforcement learning, and more"
            ]
        },
        {
            title: "Undergraduate Research Assistant",
            timespan: "June 2021 - Dec 2021",
            company: "Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT",
            location: "Cambridge, MA",
            work: [
                "Developed a ROS program to auto-collect data from various sensors (including camera) for DJI Matrix 300 drones",
                "Built a ROS framework in a team of 3 to allow a single code run in both Flightmare Simulator and physical drone",
                "Developed drone autonomy software for autonomous flight with velocity control and path planning"
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
    return (
      <>
        <div className='resume flex-vertical'>
          <h1 className='name'>{resume.name}</h1>
          <div className='contact-section flex-horizontal'>
            {Object.keys(resume.contact).map((key) => (
              <h3 className='contact' key={key}>
                {resume.contact[key]}
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
          </section>
          <section>
            <h2>Experiences</h2>
            {resume.experiences.map((experience, index) => (
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
          </section>
          <section>
            <h2>Projects</h2>
            {resume.projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h3>{project.name}</h3>
                <p>Tools: {project.tools.join(", ")}</p>
                <p>{project.description}</p>
                <a href={project.code}>GitHub Link</a>
              </div>
            ))}
          </section>
          <section>
            <h2>Extracurriculars</h2>
            {resume.eca.map((activity, index) => (
              <div className="eca-item" key={index}>
                <h3>{activity.name}</h3>
                <p>Role: {activity.role}</p>
                <p>{activity.description}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>Awards</h2>
            {resume.awards.map((award, index) => (
              <div className="award-item" key={index}>
                <h3>{award.name}</h3>
              </div>
            ))}
          </section>
        </div>
      </>
    );
  }