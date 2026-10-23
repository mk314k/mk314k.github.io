import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { writings } from '../content/about';

export const PdfViewer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) {
    return (
      <div className='container pdf-view'>
        <h2 className='section-title'>Writing not found</h2>
        <p>No piece matches “{slug}”.</p>
        <ul>
          {writings.map((w) => (
            <li key={w.slug}><Link to={`/writing/${w.slug}`}>{w.title}</Link></li>
          ))}
        </ul>
      </div>
    );
  }

  const src = `${import.meta.env.BASE_URL}content/pdf/${encodeURIComponent(writing.file)}.pdf`;

  return (
    <div className='container pdf-view'>
      <h2 className='section-title'>{writing.title}</h2>
      {/* iframe PDF rendering is unreliable on mobile browsers, so always offer a direct link. */}
      <p className='pdf-download'>
        <a href={src} target="_blank" rel="noopener noreferrer">Open the PDF in a new tab</a>
      </p>
      <iframe
        className='pdf-frame'
        src={src}
        title={writing.title}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
