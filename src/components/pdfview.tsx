import React from 'react';

export const PdfViewer: React.FC<{ file_name: string }> = ({ file_name }) =>{
  const encoded = encodeURIComponent(file_name);
  const base = import.meta.env.BASE_URL || './';
  const src = `${base}content/pdf/${encoded}.pdf`;
  return (
    <div style={{ height: '750px', width: '100%' }}>
      <h1>{file_name}</h1>
      <iframe
        src={src}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
