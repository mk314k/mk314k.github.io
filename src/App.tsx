import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Resume } from './resume';
import Portfolio from './Portfolio';
import Games from './games';

const links = new Map([
  ['github','https://github.com/mk314k'],
  ['facebook', 'https://www.facebook.com/mk3.14k/'],
  ['envelope', 'mailto:mk314k@mit.edu'],
  ['linkedin', 'https://www.linkedin.com/in/mk314k/']
]);

function SocialIcon(){
  return (
    <>
      <div className="social-icons" id ="social-icons">
        {Array.from(links.keys()).map((key)=>(
          <div className='icon' key={key}>
            <a href={links.get(key)} target='_blank'>
              <i className={`fa${key==='envelope'?'':'-brands'} fa-${key}`}></i>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
function Header() {
  return (
    <>
      <header>
        <nav>
          {/* <div className="logo"></div>
          <img src='../assets/logo.png' alt='Logo'></img> */}
          <div>
            <Link to="/">
              <span className="nav-link">About</span>
            </Link>
            <Link to="/project">
              <span className="nav-link">Projects</span>
            </Link>
            <Link to="/resume">
              <span className ="nav-link">Resume</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
function Home(){
  const [isExpanded, setExpanded] = useState(true);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  return (
    <>
      <div className="container flex-vertical">
          <h2 className="section-title">About me</h2>
          <p className="about">
            Hi! I'm Kartikesh, an undergraduate student at MIT, pursuing a dual major in Computer Science & Engineering and Mathematics (Class of 2024). 
            My academic journey at MIT has been a dynamic exploration, delving into the realms of Machine Learning (ML), Analysis, Probability, and 
            Statistics on the technical side, and Philosophy on the non-technical side. During my time at MIT, I've actively engaged in cutting-edge 
            research, particularly focusing on Robotics and ML, with a keen interest in the interpretability of Large Language Models. 
          </p><br />
          {
            isExpanded ? (
              <>
                <p className="about">
                  Beyond the academic sphere, I contribute to the Momentum Ai club, where we empower underprivileged high school students in the Boston Area 
                  with knowledge in AI and ML. I'm also a member of MITeri, a club fostering the Nepali community and those fascinated by Nepali cultures. 
                </p><br />
                <p className="about">
                  In my leisure, I channel my passion for AI/ML and general Software Development into intriguing mini projects, many of which you can explore 
                  on this website. Among my recent projects is "Pyssemble," a fusion of Python and assembly to simplify debugging for those learning Assembly. 
                  Another project of mine is "R3DVAE-GAN," where I blend Attention in transformers with VAE-GAN architecture to facilitate the generation of 
                  3D images from 2D counterparts.
                </p><br />
                <p className="about">
                  My project interests span Education Technology, Green Environment initiatives, AI Safety projects leveraging ML, Full Stack Software development,
                  and the fascinating world of Web3. If any of these areas resonate with you or spark curiosity, feel free to reach out. Whether you're looking to 
                  collaborate, work together, or simply brainstorm, I'm always open to exciting opportunities. Let's connect and explore the realms of innovation together!
                  {/* Hi, I am Kartikesh, an undergraduate student at MIT, majoring in Computer Science & Engineering and Mathematics (Class of 2024). At MIT,
                  I have mostly taken classes focused on Machine Learning(ML), Analysis, Probability and Statisticsin the technical side and Philosophy on
                  non-technical side. I have also been part of research focused on Robotics, ML especially Interpretability of Large Language Models. Apart 
                  from research and academics, I am part of Momentum Ai club where, we teach AI and ML to underprivilleged high school students around Boston 
                  Area. I am also part of MITeri, a club for Nepali community and people interested in Nepali cultures. 
                  
                  In my free time, I work on some mini projects in the AI/ML or general Software Development field, mostly listed on this website. Some of my
                  recent projects include Pyssemble, where I am mixing python and assembly so as to help one with easy debugging when learning Assembly, and
                  R3DVAE-GAN which combines Attention in transformer with VAE-GAN architecture for learning to generate 3d image from 2d images. Project-wise,
                  I am interested in Education Technology, Green Environment, AI Safety related projects using the technology ML, Full Stack Software development
                  and Web3. Please reach out to me if any of these sounds interesting and you want to work on it or simply brainstrom together. */}
                </p>
              </>
            ):(
              <p className="more-button" onClick={toggleExpand}>
                Read More
              </p>
            )
          }
          
          <br></br>
          <br></br>
      </div>
      <div></div>
      <Portfolio username="mk314k"/>
    </>
  );
}
function SideBar(){
  return (
    <>
      <div className="sidebar flex-vertical">
        <div className="flex-vertical">
          <div className='fullname flex-vertical'>
            <h2 className="name">Kartikesh</h2>
            <h2 className="name">Mishra</h2>
          </div>
          <br />
          <p className="subtitle">MIT Class of 2024</p>
          <p className="subtitle">Comp. Sci. and Eng.</p>
          <p className="subtitle">Mathematics</p>
        </div>

        <div className='flex-vertical'>
          <br />
          <p className='subtitle'>Software Developer</p>
          <p className='subtitle'>ML Researcher</p>
          <SocialIcon />
          <p></p>
          <Link to="/resume">
            <button className="resume">View my Resume</button>
          </Link>
        </div>
      </div>
    </>
  );
}


function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <main className='flex-vertical'>
        {/* <div className='flex-vertical main-content'> */}
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/resume" element={<Resume></Resume>} />
            <Route path="/project" element={Portfolio({username:"mk314k"})} />
            <Route path="/games" element={Games({username:"mk314k"})} />
          </Routes>
        {/* </div> */}
      </main>
      <footer>

      </footer>
    </Router>
  )
}

export default App
