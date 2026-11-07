import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { writings } from '../content/about';

export const PdfViewer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) {
    return (
      <div className='container pdf-view'>
        <div className="pdf-top-nav">
          <Link to="/" className="pdf-back-link">&larr; Back to Home</Link>
        </div>
        <h2 className='section-title'>Writing not found</h2>
        <p>No piece matches “{slug}”.</p>
        <div className="categories" style={{ marginTop: '0.85rem' }}>
          {writings.map((w) => (
            <Link key={w.slug} to={`/writing/${w.slug}`}>
              <button type="button" className="category-button">{w.title}</button>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const src = `${import.meta.env.BASE_URL}content/pdf/${encodeURIComponent(writing.file)}.pdf`;

  return (
    <div className='container pdf-view'>
      <div className="pdf-top-nav">
        <Link to="/" className="pdf-back-link">&larr; Back to Home</Link>
        <div className="pdf-switcher" role="navigation" aria-label="Switch expository paper">
          {writings.map((w) => (
            <Link key={w.slug} to={`/writing/${w.slug}`}>
              <button
                type="button"
                className={`category-button ${w.slug === writing.slug ? 'active' : ''}`}
              >
                {w.title}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="pdf-header-row">
        <div>
          <h2 className='section-title' style={{ marginBottom: '0.25rem' }}>{writing.title}</h2>
          {writing.tag && <p className="pdf-tag">{writing.tag}</p>}
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="export-pdf-button"
        >
          <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
          <span>Open PDF in New Tab</span>
        </a>
      </div>

      <iframe
        className='pdf-frame'
        src={src}
        title={writing.title}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
