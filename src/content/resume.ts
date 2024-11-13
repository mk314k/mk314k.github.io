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
                  graduation: "Class of 2025"
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
        Undergraduate: [
            "Machine Learning", "Design and Analysis of Algorithms", "Foundation of Statistics", 
            "Elements of Software Construction", "Computational Structures", "Fundamentals of Programming", 
            "Real Analysis"
        ],
        Graduate: [
            "Deep Learning", "Computer Vision", "Advanced Computational Photography", "Large Language Models", 
            "Matrix Methods", "Theory of Probability", "Reinforcement Learning"
        ]
    },
    skills: {
        'Programming Languages': [
            "Python", "C++", "Typescript", "SQL"
        ],
        'Machine Learning': [
            "Pytorch", "NumPy", "OpenCV", "Scikit-Learn", "Pandas", "Cuda"
        ],
        'Web Development': [
            "HTML", "CSS", "Javascript", "React", "Node.js", "Express.js", "Flask"
        ],
        'Dev Tools': [
            "ROS", "Linux", "Bash", "Git", "VS Code", "Vim", "Docker"
        ],
        'Hardware': [
            "Arduino", "ESP32", "Jetson Tx2", "Proteus"
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
          title: "Graduate Teaching Assistant : Machine Learning 6.3900",
          timespan: "Sept 2024 - Current",
          company: "EECS Department MIT",
          location: "Cambridge, MA",
          title_timespan : [
            ["Graduate Teaching Assistant : Machine Learning 6.3900", "Sept 2024 - Current"],
            ["Teaching Assistant : Advances in Computer Vision 6.8300/1","Jan 2024 - May 2024"],
            ["Lab Assistant : Machine Learning 6.3900", "Sept 2023 - Dec 2023"]
          ],
          work: [],
          type: ['teaching']
        },
        // {
        //   title: "Teaching Assistant : Advances in Computer Vision 6.8300/1",
        //   timespan: "Jan 2024 - May 2024",
        //   company: "EECS Department MIT",
        //   location: "Cambridge, MA",
        //   work: [],
        //   type: ['teaching']
        // },
        // {
        //   title: "Lab Assistant : Machine Learning 6.3900",
        //   timespan: "Sept 2023 - Dec 2023",
        //   company: "EECS Department MIT",
        //   location: "Cambridge, MA",
        //   work: [],
        //   type: ['teaching']
        // },
        {
          title: "Undergraduate ML Research Assistant",
          timespan: "Nov 2022 - Aug 2023",
          company: "Tegmark AI Safety Group, MIT",
          location: "Cambridge, MA",
          title_timespan : [
            ["Undergraduate ML Research Assistant", "Nov 2022 - Aug 2023"]
          ],
          work: [
              "Achieved >95% accuracy on both train and test datasets by training over 50 one and two-layer transformer models for learning ordinal information, utilizing GPT-2 architecture with varying hyperparameters and parameter sizes.",
              "Identified neurons responsible for processing ordinal information, achieving a 60% accuracy from the selected neurons, a significant improvement compared to the 15% accuracy of its untrained counterparts; conducted through extensive analysis of encoder representations and attention activations of transformer models using TransformerLens and PyTorch.",
              "Designed a rank probing method to measure the contribution of neurons to ordinal information processing, enhancing the understanding of model performance by investigating differential ranking algorithms from the literature."
          ],
          type: ['research']
        },
        {
            title: "Machine Learning Research Intern",
            timespan: "June 2022 - Aug 2022",
            company: "Open Learning Exchange Nepal, MISTI MIT",
            location: "Kathmandu, Nepal",
            title_timespan : [
              ["ML Research Intern", "June 2022 - Aug 2022"]
            ],
            work: [
                "Achieved 99% accuracy in detecting and classifying text and images in scanned PDF by developing a parser using OpenCV and Ghostscript; originally designed to assist manual data collection but was more used like automation.",
                "Improved the computational speed of the parser model 10x by engineering custom geometry-based data structures, and dynamically merging overlapped bounding rectangles.",
                "Designed an end-to-end deep learning architecture (Convolutional Recurrent Neural Network) using TensorFlow for Devanagari and English text recognition."
            ],
            type: ['research', 'internship']
        },
        {
            title: "Undergraduate Research Assistant",
            timespan: "June 2021 - Dec 2021",
            company: "Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT",
            location: "Cambridge, MA",
            title_timespan : [
              ["Undergraduate Research Assistant", "June 2021 - Dec 2021"]
            ],
            work: [
                "Developed a ROS program to auto-collect data from various sensors (including camera) for DJI Matrix 300 drones.",
                "Built a ROS framework in a team of 3 to allow a single code run in both Flightmare Simulator and physical drone.",
                "Developed drone autonomy software for autonomous flight with velocity control and path planning."
            ],
            type: ['research']
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