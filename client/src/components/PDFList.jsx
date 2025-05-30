import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PDFList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pdfs/getPDF')
      .then((res) => {
        setPdfs(res.data);
      })
      .catch(err => {
        console.log('Error is:', err);
      });
  }, []);

  const getPdfBlobUrl = (pdfData) => {
    try {
      const byteArray = new Uint8Array(pdfData.data); // Convert buffer to byte array
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      return URL.createObjectURL(blob);
    } catch (err) {
      console.error("Failed to convert pdfData", err);
      return null;
    }
  };

  return (
    <div>
      <h1>Saved PDFs</h1>
      {pdfs.map((data, index) => {
        const blobUrl = getPdfBlobUrl(data.pdfData);
        return (
          <div key={data._id || index} style={{ marginBottom: '20px' }}>
            <h2>{data.title}</h2>
            <p>Class: {data.class}</p>
            <p>Subject: {data.subject}</p>
            {blobUrl ? (
              <a href={blobUrl} download={`${data.title}.pdf`}>
                <button>Download PDF</button>
              </a>
            ) : (
              <p>PDF unavailable</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PDFList;
