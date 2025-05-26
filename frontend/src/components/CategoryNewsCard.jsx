import React from "react";
import { Link } from "react-router-dom";

const CategoryNewsCard = ({ categoryId, categoryName, title, description, img }) => {
  return (
    <div className="p-6 md:w-1/3">
      <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
        <img src={img} alt={`${title} - ${categoryName}`} className="w-full h-48 object-cover mb-4" />

        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">{categoryName || "Category"}</h2>
          <h1 className="text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-700 leading-relaxed mb-3">{description}</p>

          <div className="flex items-center justify-between">
            <Link to={`/admin/news/category/${categoryId}`} className="text-indigo-600 font-semibold hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
