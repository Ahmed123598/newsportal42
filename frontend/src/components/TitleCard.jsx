import React from "react";
import { Link } from "react-router-dom";

const TitleCard = ({ title, route, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white text-center">
      {/* Render the image if available */}
      {image && (
        <img
          src={image.startsWith("http") ? image : `http://localhost:3000/uploads/${image}`}
          alt={title}
          className="mb-2 w-full h-40 object-cover rounded-md"
        />
      )}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <Link to={route} className="text-blue-600 font-semibold">
        View More
      </Link>
    </div>
  );
};

export default TitleCard;
