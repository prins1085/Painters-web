import React from "react";
import { useParams } from "react-router-dom";
import "./WorksItem.css";
import { artworksData } from "../../Data/artworksData";

const WorksItem = () => {
  const { id } = useParams();
  const artwork = artworksData.find((artwork) => artwork.id === parseInt(id));

  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  return (
    <div className="works-item-container">
      <div className="works-item-image">
        <img src={artwork.imageUrl} alt={`Artwork ${artwork.title}`} />
      </div>
      <div className="works-item-details">
        <h2>{artwork.title}</h2>
        <p>{artwork.artist}</p>
        <p>{artwork.year}</p>
      </div>
    </div>
  );
}

export default WorksItem;
