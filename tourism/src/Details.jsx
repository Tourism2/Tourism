import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const [blogg, setBlog] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/blogs/${id}`) // Remove the extra curly braces
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <img
        src={blogg.image}
        alt={blogg.title}
        className="w-full max-h-96 object-cover mb-4"
      />
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-3xl font-semibold mb-2 ml-40">{blogg.title}</h2>
        <p className="text-gray-700 font-semibold mb-6 ml-40">
          City: {blogg.city}
        </p>
        <p className="text-gray-800 mb-2 mx-40">{blogg.description}</p>
        <p className="text-black font-semibold ml-40">Author: {blogg.author}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
