export const About = {
    head: `Hi, I’m Kartikesh. I am the Co-Founder and CTO of Lamina AI (YC), where we are building the visualization layer for AI and working to bring visual explanation everywhere text is today.`,
    body: [
        `Before starting Lamina, I was a software engineer at Abacus AI, where I built factual verification and report regeneration tools for deep research agents serving over two million users. Prior to that, I was a founding engineer at Infinirate, where I architected the distributed agent-serving backend and real-time communication layer.`,
        `My academic background is in computer science, mathematics, and machine learning at MIT. At MIT CSAIL's Distributed Robotics Lab under Prof. Daniela Rus, I extended the lab’s FLEX baseline into a compositional vision-language navigation system for drones capable of executing multi-step spatial instructions, demonstrating zero-shot transfer from abstract simulation to unseen real-world targets. My earlier research spans reinforcement learning solvers for inverse imaging and probing ordinal structure in transformers with the Tegmark AI Safety Group.`,
        `I also care deeply about teaching. At MIT, I served as a Teaching Assistant for Machine Learning and Advances in Computer Vision, taught mathematics and algorithms in Nepal as a MISTI Global Teaching Lab Fellow, and instructed AI and machine learning summer camps for high school students through MIT Momentum.`,
    ],
    foot: `If you are working on multimodal AI, vision-language systems, applied mathematics, or reinforcement learning, or building something ambitious, I am always glad to connect.`
}

export const profile = {
    first_name: 'Kartikesh',
    last_name:'Mishra',
    git: 'mk314k',
    location: 'San Francisco, CA',
    sidebar: [
        [`Co-Founder & CTO`, `Lamina AI (YC)`],
        [`MIT EECS M.Eng. '25`, `AI / ML`],
        [`MIT B.S. '24`, `Computer Science & Eng.`, `Mathematics`],
    ],
}

export const thesis = {
    title: `Minimalist Approach to End-to-End Vision Language Navigation with Multi-Modal Foundation Model Features`,
    venue: `Master's Thesis, MIT CSAIL`,
    year: `2025`,
    url: `https://hdl.handle.net/1721.1/163018`,
    summary: `A compositional vision-language navigation system for autonomous drones, trained in a minimal simulation curriculum with zero-shot transfer to unseen real-world environments.`,
}

export interface Writing {
    slug: string;
    title: string;
    /** Filename (without extension) under public/content/pdf/ */
    file: string;
    tag?: string;
}

export const writings: Writing[] = [
    {
        slug: 'transformer-based-learning-to-rank',
        title: 'Transformer Based Learning to Rank',
        file: 'Transformer Based Learning to Rank',
        tag: 'Transformers · Ranking',
    },
    {
        slug: 'iterative-polynomial-root-finding',
        title: 'Iterative Polynomial Root Finding Algorithms',
        file: 'Iterative Polynomial Root Finding Algorithms',
        tag: 'Numerical Analysis',
    },
    {
        slug: 'multiplicative-weight-update-in-rl',
        title: 'Multiplicative Weight Update in Reinforcement Learning',
        file: 'Multiplicative Weight Update in Reinforcement Learning',
        tag: 'RL Theory · Game Theory',
    },
    {
        slug: 'random-walk',
        title: 'Random Walk',
        file: 'Random Walk',
        tag: 'Stochastic Processes',
    },
]
