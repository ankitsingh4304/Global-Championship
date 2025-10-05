import banner from "../../assets/homebg.png";
import "./home.scss";

const Home = () => {
  // Function to handle PDF downloads
  const handleDownloadPDF = (pdfType: 'rulebook' | 'championship') => {
    const pdfUrls = {
      rulebook: '/pdfs/rulebook.pdf',
      championship: ''
    };
    
    const link = document.createElement('a');
    link.href = pdfUrls[pdfType];
    link.download = pdfType === 'rulebook' ? 'GC_Rulebook.pdf' : 'General_Championship.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="home-content">
        {/* Description Section with Semi-transparent Background */}
        <div className="description-box">
          <h1 className="homepage-title">
            Welcome to Global Championship
          </h1>
          <p className="homepage-description">
            Global Championship (GC) is the ultimate sports showdown where top athletes
            and teams compete to showcase skill, passion, and glory. Join us for an
            unforgettable journey of sportsmanship and victory.
          </p>
          
          {/* PDF Download Buttons */}
          <div className="pdf-buttons-container">
            <button 
              className="pdf-download-btn"
              onClick={() => handleDownloadPDF('rulebook')}
            >
              <span className="btn-icon">📖</span>
              Download Rulebook
            </button>
            <button 
              className="pdf-download-btn championship-btn"
              onClick={() => handleDownloadPDF('championship')}
            >
              <span className="btn-icon">🏆</span>
              General Championship Info
            </button>
          </div>
        </div>

        {/* Events Section */}
        <h2 className="events-title">Upcoming Events</h2>
        <div className="event-buttons-container">
          <div className="event-card">
            <div className="card-icon">⚽</div>
            <h3>Football Championship</h3>
            <p>Join the ultimate football showdown</p>
          </div>
          <div className="event-card">
            <div className="card-icon">🏀</div>
            <h3>Basketball League</h3>
            <p>Experience high-flying action</p>
          </div>
          <div className="event-card">
            <div className="card-icon">🏏</div>
            <h3>Cricket Tournament</h3>
            <p>Witness legendary matches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;