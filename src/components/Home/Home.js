import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { artworksData } from "../../Data/artworksData.js";

const Home = () => {
  const popularArtworks = artworksData.filter(
    (artwork) => artwork.popularity > 5
  );

  return (
    <div>
      <section className="welcome-section">
        <h2>Welcome to A Painter's Web!</h2>
      </section>

      <section className="popular-works-section">
        <h2 className="popular-works-header">Currently Popular Works</h2>
        <div className="work-images">
          {popularArtworks.map((artwork) => (
            <Link
              to={`/works/${artwork.id}`}
              key={artwork.id}
              className="work-item"
            >
              <img src={artwork.imageUrl} alt={`Artwork ${artwork.id}`} />
            </Link>
          ))}
        </div>
        <Link to="/works" className="view-all-works">
          View all works
        </Link>
      </section>
      <section className="about-section">
        <div className="about-card">
          <h2>About Us</h2>
          <p>
            We are passionate about art and aim to bring the beauty of paintings
            to your homes. Our collection features exquisite works from talented
            artists around the world.
          </p>
          <Link to="/about" className="about-link">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
