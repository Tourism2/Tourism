import React, { useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    description: "",
    author: "",
    image: "",
  });

  const API_URL = "http://localhost:5000/blogpost";

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post(`${API_URL}`, formData);
      console.log("Data successfully posted:", response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 p-4 rounded shadow-md m-20"
      >
        <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="featuredImage"
            className="block text-sm font-medium text-gray-700"
          >
            Featured Image
          </label>
          <input
            type="file"
            id="featuredImage"
            name="featuredImage"
            accept="image/*"
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium"
        >
          Create Blog
        </button>
      </form>
      <div className="w-1/3 p-4"></div>
    </div>
  );
};

export default BlogForm;