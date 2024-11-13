import React from 'react';

export const PdfViewer: React.FC<{ file_name: string }> = ({ file_name }) =>{
  // const url_split = file_url.split('/');
  // const title = url_split[url_split.length - 1].split('.')[0];
  return (
    <div style={{ height: '750px', width: '100%' }}>
      <h1>{file_name}</h1>
      <iframe
        src= {`./src/content/pdf/${file_name}.pdf`}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
