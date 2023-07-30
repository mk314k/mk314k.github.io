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
          <div className="logo"></div>
          <div>
            <Link to="/">
              <button className="nav-link">Home</button>
            </Link>
            <Link to="/project">
              <button className="nav-link">Projects</button>
            </Link>
            <Link to="/games">
              <button className ="nav-link">Play Games</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
function Home(){
  return (
    <>
      <div className="container flex-vertical">
          <h2 className="name">Kartikesh Mishra</h2>
          <p className="subtitle">| Student | Researcher | Developer | Designer |</p>
          <SocialIcon />
          <p></p>
          <Link to="/resume">
            <button className="resume">View my Resume</button>
          </Link>
        </div>
    </>
  );
}


function App() {
  return (
    <Router>
      <Header />
      <main className="flex-vertical">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/resume" element={<Resume></Resume>} />
          <Route path="/project" element={Portfolio({username:"mk314k"})} />
          <Route path="/games" element={Games({username:"mk314k"})} />
        </Routes>
      </main>
      <footer>

      </footer>
    </Router>
  )
}

export default App
