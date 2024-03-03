import React from "react";
import { Link } from "react-router-dom";
import "./Works.css";
import { artworksData } from "../../Data/artworksData";

const Works = () => {
  return (
    <div className="works-page">
      <h2>Works</h2>
      <div className="work-grid">
        {artworksData.map((artwork) => (
          <Link
            to={`/works/${artwork.id}`}
            key={artwork.id}
            className="work-item-link"
          >
            <div className="work-item">
              <img src={artwork.imageUrl} alt={`Artwork ${artwork.id}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Works;
