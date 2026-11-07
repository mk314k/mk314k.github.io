import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { Resume } from './components/resume/resume';
import Portfolio from './components/portfolio/Portfolio';
import { About, profile, thesis, writings } from './content/about';
import { SideBar } from './components/sidebar';
import { Navbar } from './components/navbar';
import PdfViewer from './components/pdfview';

const DEFAULT_TITLE = 'Kartikesh Mishra | Co-Founder & CTO at Lamina AI · MIT EECS & Mathematics';
const DEFAULT_DESC = 'Kartikesh Mishra is the Co-Founder and CTO of Lamina AI (YC), building the visualization layer for AI. MIT EECS M.Eng. and B.S. in CS & Mathematics. Researcher in vision-language navigation, reinforcement learning, and AI systems.';

function RouteMetaUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = DEFAULT_TITLE;
    let desc = DEFAULT_DESC;
    let canonical = `https://mk314k.github.io${path === '/' ? '/' : path}`;

    if (path === '/resume') {
      title = 'Resume & CV | Kartikesh Mishra · Co-Founder & CTO at Lamina AI · MIT EECS';
      desc = 'Curriculum Vitae and engineering resume of Kartikesh Mishra — Co-Founder & CTO at Lamina AI (YC), MIT EECS M.Eng. in AI/ML, dual B.S. in Computer Science and Mathematics.';
    } else if (path === '/project') {
      title = 'Projects & Open Source | Kartikesh Mishra · MIT EECS & Lamina AI';
      desc = 'Selected open-source systems, machine learning research, and engineering projects by Kartikesh Mishra, including AssemblyTS, Pyssemble, OctoCloud, 3DAttnVAE-GAN, and CTRL-MoE.';
    } else if (path.startsWith('/writing/')) {
      const slug = path.replace('/writing/', '');
      const found = writings.find((w) => w.slug === slug);
      if (found) {
        title = `${found.title} | Kartikesh Mishra · Expository Paper`;
        desc = `${found.title} (${found.tag || 'Technical Note'}) by Kartikesh Mishra, MIT EECS & Mathematics.`;
      }
    }

    document.title = title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', desc);
    const canonLink = document.querySelector('link[rel="canonical"]');
    if (canonLink) canonLink.setAttribute('href', canonical);
  }, [location.pathname]);

  return null;
}

function Home(){
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <section className="container flex-vertical" aria-labelledby="about-heading">
        <article className='about-editorial'>
          <h1 id="about-heading" className="section-title">About</h1>
          <p className="about-para about-lead">
            {About.head}
          </p>
          {
            isExpanded ? (
              <>
                {About.body.map((text, id) => (
                  <p key={id} className='about-para'>{text}</p>
                ))}
                <p className="about-para">{About.foot}</p>
                <button
                  type="button"
                  className="more-button"
                  onClick={() => setExpanded(false)}
                >
                  Show less ↑
                </button>
              </>
            ) : (
              <>
                <p className="about-para">{About.foot}</p>
                <button
                  type="button"
                  className="more-button"
                  onClick={() => setExpanded(true)}
                >
                  Read full background →
                </button>
              </>
            )
          }
        </article>

        <div className="research-writing-grid" aria-label="Research Thesis and Technical Writing">
          <div className="writing-panel thesis-panel">
            <h2 className="section-title">Master&apos;s Thesis</h2>
            <div className='thesis-callout'>
              <span className='thesis-venue'>{thesis.venue} · {thesis.year}</span>
              <a href={thesis.url} target="_blank" rel="noopener noreferrer" className="thesis-title-link">
                {thesis.title}
              </a>
              <p className='thesis-summary'>{thesis.summary}</p>
              <a href={thesis.url} target="_blank" rel="noopener noreferrer" className="thesis-action-link">
                Read on MIT DSpace ↗
              </a>
            </div>
          </div>

          <div className="writing-panel">
            <h2 className="section-title">Expository Notes &amp; Papers</h2>
            <ul className="writing-list">
              {writings.map((writing) => (
                <li key={writing.slug} className="writing-item">
                  <Link to={`/writing/${writing.slug}`} className="writing-link">
                    <span className="writing-title">{writing.title}</span>
                    {writing.tag && <span className="writing-tag">{writing.tag}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Portfolio username={profile.git}/>
    </>
  );
}

function App() {
  const lastUpdated: Date = new Date(__BUILD_TIME__);
  const formattedUpdated = lastUpdated.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  return (
    <Router>
      <RouteMetaUpdater />
      <Navbar />
      <div className="page-shell">
        <SideBar />
        <main className='flex-vertical'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/project" element={<Portfolio username={profile.git} />} />
              <Route path="/writing" element={<Navigate to={`/writing/${writings[0].slug}`} replace />} />
              <Route path="/writing/:slug" element={<PdfViewer />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
      </div>
      <footer>
        <div className="footer">
          <p>&copy; {new Date().getFullYear()} Kartikesh Mishra · San Francisco, CA · Updated {formattedUpdated}</p>
        </div>
      </footer>
    </Router>
  )
}

export default App
