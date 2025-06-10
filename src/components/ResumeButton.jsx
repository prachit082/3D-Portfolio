import { useState } from 'react';

const ResumeButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    const link = document.createElement('a');
    link.href = '/resume/Resume.pdf'; // Use public path without ../../
    link.download = 'Resume.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDownloading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`font-medium text-center px-1.5 py-1.5 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 ${
        isDownloading ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      {isDownloading ? (
        <>
          <span className="lg:block hidden text-white">Downloading...</span>
        </>
      ) : (
        <>
          <span className="lg:block hidden text-white">Download Resume</span>
        </>
      )}
    </button>
  );
};

export default ResumeButton;