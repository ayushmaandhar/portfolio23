import React from 'react';
import './intro.css';

const ResumeDownloadButton = () => {
  const downloadResume = () => {
    // Replace 'resume.pdf' with the actual file name of your resume
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';

    // Create an anchor element
    const downloadLink = document.createElement('a');

    // Set the download attribute with the desired file name
    downloadLink.download = 'Ayushmaan_resume.pdf';

    // Set the href attribute to the path of your resume file
    downloadLink.href = resumePath;

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
  };

  return (
    <button className='btn' onClick={downloadResume} style={{color:'white', border: 'white', background: 'rgb(50, 50, 50)'}}>
      Download Resume
    </button>
  );
};

export default ResumeDownloadButton;
