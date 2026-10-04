export interface Role {
    company: string;
    location: string;
    /** Blurb about the organization, shown above the bullets. */
    about?: string;
    /** One entry per title held at this organization: [title, timespan]. */
    title_timespan: string[][];
    work: string[];
}

export const resume = {
    name: "Kartikesh Mishra",
    contact: {
        email: "mk314k@mit.edu",
        linkedin: "linkedin.com/in/mk314k",
        twitter: "x.com/mk314k",
        website: "mk314k.github.io",
        github: "github.com/mk314k",
        location: "San Francisco, CA",
    },
    expertise: `Artificial intelligence and applied mathematics, with specialization in deep learning,
        vision-language systems, reinforcement learning, autonomous systems, multimodal AI, and
        high-performance AI infrastructure.`,
    education: [
        {
            school: "Massachusetts Institute of Technology",
            location: "Cambridge, MA",
            degree: [
                {
                    name: "Master of Engineering in Computer Science (AI/ML)",
                    score: "",
                    graduation: "June 2025"
                },
                {
                    name: "Bachelor of Science in Computer Science and Engineering",
                    score: "",
                    graduation: "June 2024"
                },
                {
                    name: "Bachelor of Science in Mathematics",
                    score: "",
                    graduation: "June 2024"
                }
            ]
        }
    ],
    courses: {
        Graduate: [
            "Deep Learning", "Advances in Computer Vision", "Large Language Models",
            "Reinforcement Learning", "Advanced Computational Photography", "Matrix Methods", "Theory of Probability"
        ],
        Undergraduate: [
            "Machine Learning", "Design and Analysis of Algorithms", "Real Analysis",
            "Foundation of Statistics", "Elements of Software Construction", "Computational Structures"
        ]
    },
    skills: {
        'Languages': [
            "Python", "C++", "TypeScript", "SQL", "CUDA"
        ],
        'AI & Machine Learning': [
            "PyTorch", "Vision-Language Models", "Reinforcement Learning", "Computer Vision",
            "TransformerLens", "TensorFlow", "PyTorch Lightning", "OpenCV", "LangGraph"
        ],
        'AI Systems & Compute': [
            "GPU Memory Optimization", "Parallel Model Execution", "Inference Optimization",
            "Distributed AI Workloads", "Real-Time Media Pipelines"
        ],
        'Backend & Infrastructure': [
            "Node.js", "FastAPI", "Fastify", "PostgreSQL", "pgvector", "Redis",
            "AWS (S3, SQS)", "WebSockets", "JSON-RPC", "Docker", "Linux"
        ],
        'Frontend': [
            "React", "Next.js", "TypeScript", "UI Architecture"
        ]
    },
    experiences: [
        {
            company: "Lamina AI, Inc.",
            location: "San Francisco, CA",
            about: `Y Combinator-backed company building the visualization layer for AI to bring visual explanation everywhere text is today.`,
            title_timespan: [
                ["Co-Founder & Chief Technology Officer", "April 2026 - Present"]
            ],
            work: [
                "Co-founded the company and lead technical vision, system architecture, and engineering execution across the core platform and AI infrastructure.",
                "Architected and scaled the production visual generation engine, distributed job orchestration, and high-throughput GPU compute systems from prototype to production.",
                "Built full-stack product interfaces, developer APIs, and foundational infrastructure powering visual explanation workflows."
            ]
        },
        {
            company: "Abacus AI",
            location: "San Francisco, CA",
            about: `Enterprise AI platform serving over two million users and Fortune 500 customers.`,
            title_timespan: [
                ["Software Engineer", "Jan 2026 - March 2026"]
            ],
            work: [
                "Engineered end-to-end factual verification and report regeneration pipelines for deep research agents operating at production scale (2M+ users).",
                "Reduced time-to-first-token (TTFT) and resolved critical production bottlenecks across agentic workflows."
            ]
        },
        {
            company: "Infinirate, Inc.",
            location: "San Francisco, CA",
            title_timespan: [
                ["Founding Engineer", "July 2025 - Jan 2026"]
            ],
            work: [
                "Architected and built the distributed agent-serving backend from the ground up, including session orchestration, JSON-RPC routing, authentication, and persistence.",
                "Engineered low-latency real-time communication infrastructure using queued event delivery, Socket.IO namespaces, and delivery acknowledgments."
            ]
        },
        {
            company: "Open Learning Exchange Nepal · MIT",
            location: "Kathmandu, Nepal",
            title_timespan: [
                ["AI/ML Engineering Intern", "June 2022 - Aug 2022"]
            ],
            work: [
                "Built a computer-vision document layout parser using OpenCV and Ghostscript (>90% region segmentation accuracy) and trained a TensorFlow CRNN for bilingual Devanagari and English OCR."
            ]
        },
        {
            company: "Robotics Association of Nepal",
            location: "Kathmandu, Nepal",
            title_timespan: [
                ["R&D Associate", "Dec 2019 - Aug 2020"]
            ],
            work: [
                "Prototyped autonomous navigation and mapping robotics systems, authored K-10 robotics curricula, and co-organized the Yantra 8.0 international robotics competition."
            ]
        }
    ] as Role[],
    research: [
        {
            company: "Distributed Robotics Lab, MIT CSAIL",
            location: "Cambridge, MA",
            about: `Advised by Prof. Daniela Rus (Director, MIT CSAIL) and Dr. Makram Chahine.`,
            title_timespan: [
                ["Graduate ML Research Assistant", "Jan 2025 - May 2025"]
            ],
            work: [
                "Extended the lab's FLEX baseline into a compositional vision-language navigation (VLN) system capable of executing multi-step, multi-directional spatial instructions on autonomous drones.",
                "Designed a transformer-based deep reinforcement learning policy and trajectory-alignment objective using synthetic Bézier/spline flight paths to map visual-language embeddings directly to 3D velocity, yaw, and subgoal completion signals.",
                "Demonstrated zero-shot sim-to-real transfer from a minimal geometric PyBullet curriculum to unseen real-world environments (85% average success on geometric targets, 78% on human-scale targets).",
                "Re-engineered the BLIP-2 inference stack against native pretrained weights and optimized GPU memory batching, accelerating forward passes by 25x and overall RL training throughput by >800x."
            ]
        },
        {
            company: "Department of EECS, MIT",
            location: "Cambridge, MA",
            title_timespan: [
                ["Graduate ML Research Assistant", "June 2024 - Jan 2025"]
            ],
            work: [
                "Developed a plug-and-play reinforcement learning (actor-critic) solver for inverse imaging problems, outperforming gradient-based baselines by ~7 dB PSNR.",
                "Reduced reconstruction inference iterations by 60% while maintaining ~36 dB PSNR at <50% sub-sampling, demonstrating zero-shot generalization across sparsity levels."
            ]
        },
        {
            company: "Tegmark AI Safety Group, MIT",
            location: "Cambridge, MA",
            title_timespan: [
                ["Undergraduate ML Research Assistant", "Nov 2022 - Aug 2023"]
            ],
            work: [
                "Designed differentiable rank-probing models to extract ordinal representations from transformer circuits, improving structural extraction accuracy by 40% over prior baselines.",
                "Trained and probed 50+ GPT-2 and Pythia (70M to 1.4B parameter) variants, achieving >95% accuracy on ordinal reasoning benchmarks."
            ]
        }
    ] as Role[],
    teaching: [
        {
            company: "Department of EECS, MIT",
            location: "Cambridge, MA",
            title_timespan: [
                ["Teaching Assistant · Machine Learning (6.390)", "Sept 2024 - Jan 2025"],
                ["Teaching Assistant · Advances in Computer Vision (6.8300)", "Jan 2024 - May 2024"],
                ["Lab Assistant · Machine Learning", "Jan 2022 - Dec 2023"]
            ],
            work: [
                "Led weekly recitations, designed assignments and exams, and mentored 20+ graduate/undergraduate research project teams across MIT's flagship Machine Learning (~400 students) and Computer Vision (~700 students) courses."
            ]
        },
        {
            company: "MISTI Global Teaching Labs, MIT",
            location: "Kathmandu, Nepal",
            title_timespan: [
                ["Fellow · Mathematics & Algorithms", "Sept 2024 - Jan 2025"]
            ],
            work: [
                "Inaugural MIT Global Teaching Lab Fellow in Nepal; taught algorithmic problem-solving and mathematical proof techniques to public school students."
            ]
        },
        {
            company: "Momentum AI, MIT",
            location: "Cambridge, MA",
            title_timespan: [
                ["AI/ML Instructor", "Aug 2022 & Aug 2023"]
            ],
            work: [
                "Taught end-to-end machine learning project seminars to ~100 underrepresented Boston-area high school students."
            ]
        }
    ] as Role[],
    projects: [
        {
            name: "3DAttnVAE-GAN",
            tools: ["PyTorch", "3D Vision", "VAE-GAN", "Attention"],
            description: "Single-view 3D shape reconstruction network combining variational autoencoders, self-attention blocks, and adversarial training on ShapeNetCore.",
            code: "https://github.com/mk314k/3DAttnVAE-GAN",
        },
        {
            name: "CTRL-MoE",
            tools: ["PyTorch", "Reinforcement Learning", "Mixture of Experts"],
            description: "Contextual multi-agent reinforcement learning framework using Mixture-of-Experts (MoE) routing policies for dynamic traffic control.",
            code: "https://github.com/mk314k/CTRL-MoE",
        },
        {
            name: "ImgLib & Poisson Inpainting",
            tools: ["C++", "CUDA", "Numerical PDEs"],
            description: "From-scratch C++/CUDA image processing engine and Conjugate Gradient Descent (CGD) Poisson PDE solver for deblurring and seamless cloning.",
            code: "https://github.com/mk314k/ImgLib",
        },
        {
            name: "MWU-RL",
            tools: ["Python", "RL Theory", "Game Theory"],
            description: "Algorithmic study of Multiplicative Weights Update (MWU) dynamics integrated with policy-gradient reinforcement learning.",
            code: "https://github.com/mk314k/MWU_RL",
        },
        {
            name: "Pyssemble & AssemblyTS",
            tools: ["Python", "TypeScript", "RISC-V", "PyPI"],
            description: "Open-source assembly interpreter, RISC-V execution tracer, and interactive debugging library published to PyPI.",
            code: "https://github.com/mk314k/Pyssemble",
        },
        {
            name: "ReKnew",
            tools: ["Python", "OpenCV", "MediaPipe", "AR"],
            description: "Real-time planar tracking and homography-based mixed-reality projection pipeline (3rd Place, Samsung Future of Wellness Hackathon).",
            code: "https://github.com/mk314k/ReKnew",
        },
    ],
    awards: [
        {
            name: "Honorable Mention, International Mathematical Olympiad (IMO 2019) · First award recipient in Nepal's history",
        },
        {
            name: "2nd Place Overall, Moonbeam Stacking DAO Hackathon",
        },
        {
            name: "3rd Place Overall, Samsung Future of Wellness Hackathon (2022)",
        },
    ],
    service: [
        {
            name: "Grand Jury of AI Innovation, Sparknify Human vs. AI Film Festival",
            url: "https://www.sparknify.com/grand-jury-of-ai-innovation",
            description: "Selected to the international Grand Jury alongside AI research pioneers and industry leaders to evaluate generative AI video and multimodal storytelling.",
        },
        {
            name: "Technical Judge, CalHacks 12.0",
            description: "Evaluated AI and systems engineering projects on technical depth and architecture.",
        },
        {
            name: "Technical Mentor, TreeHacks (Stanford)",
            description: "Advised teams on model integration, backend systems, and rapid prototyping.",
        },
    ]
}
