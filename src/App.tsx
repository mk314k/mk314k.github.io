import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import { Resume } from './components/resume/resume';
import Portfolio from './components/portfolio/Portfolio';
import { About } from './content/about';
import { SideBar } from './components/sidebar';
import { Navbar } from './components/navbar';
import { profile } from './content/about';




function Home(){
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  console.log(About.para);
  return (
    <>
      <div className="container flex-vertical">
          <h2 className="section-title">About me</h2>
          <p className="about">
            {About.main}
          </p><br />
          {
            isExpanded ? (
              <>
                {About.para.map((text, id) =>{
                  return (
                    <>
                    <p key={id} className='about'>
                      {text}
                    </p><br />
                    </>
                  );
                  
                })}
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



function App() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <main className='flex-vertical'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Portfolio username={profile.git} />} />
          </Routes>
      </main>
      <footer>
        <div className="footer">
          <p>&copy; 2024 Kartikesh Mishra.</p>
        </div>
      </footer>
    </Router>
  )
}

export default App
