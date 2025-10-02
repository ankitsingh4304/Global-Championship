import banner from "../../assets/homebg.png"; // full-page background
import "./home.scss";

const Home = () => {
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
        {/* Description Section */}
        <h1 className="homepage-title">
          Welcome to Global Championship
        </h1>
        <p className="homepage-description">
          Global Championship (GC) is the ultimate sports showdown where top athletes
          and teams compete to showcase skill, passion, and glory. Join us for an
          unforgettable journey of sportsmanship and victory.
        </p>

        {/* Events Section */}
        <h2 className="events-title">Upcoming Events</h2>
        <div className="event-buttons-container">
          {/* Note: In a real app, these would be <Link> or <button> elements */}
          <div className="event-card">Football Championship</div>
          <div className="event-card">Basketball League</div>
          <div className="event-card">Cricket Tournament</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
