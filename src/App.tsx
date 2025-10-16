import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css'
import { Resume } from './components/resume/resume';
import Portfolio from './components/portfolio/Portfolio';
import { About, profile, pdfs } from './content/about';
import { SideBar } from './components/sidebar';
import { Navbar } from './components/navbar';
import PdfViewer from './components/pdfview';

interface HomeProps {
  setPdfFile: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ setPdfFile }:HomeProps){
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  const navigate = useNavigate();
  const handleClickWriting = (file_name:string)=>{
    setPdfFile(file_name);
    navigate('/writing');
  }
  return (
    <>
      <div className="container flex-vertical">
          <h2 className="section-title">About me</h2>
          <div className='flex-horizontal about-wrapper'>
            <div className='about'>
              <p className="about-para">
                {About.main}
              </p>
              {
                isExpanded ? (
                  <>
                    {About.para.map((text, id) =>{
                      return (
                        <>
                        <p key={id} className='about-para'>
                          {text}
                        </p>
                        </>
                      );
                      
                    })}
                  </>
                ):(
                  <p className="more-button" onClick={toggleExpand}>
                    <a>Read More</a>
                  </p>
                )
              }
              
              <br></br>
              <br></br>
            </div>
            <div className='writing'>
              <h2 className="section-title">Recent Writing</h2>
              <br />
              <ul>
                {pdfs.map((file_name, idx)=>((
                  <li key={idx} ><a onClick={()=>handleClickWriting(file_name)}>{file_name}</a></li>
                )))}
              </ul>
            </div>
          </div>
      </div>
      <div></div>
      <Portfolio username="mk314k"/>
    </>
  );
}



function App() {
  const [pdf_file, setPdfFile] = useState(pdfs[0]);
  return (
    <Router>
      <Navbar />
      <SideBar />
      <main className='flex-vertical'>
          <Routes>
            <Route path="/" element={<Home setPdfFile={setPdfFile} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Portfolio username={profile.git} />} />
            <Route path="/writing" element={<PdfViewer file_name={pdf_file}/>} />
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
