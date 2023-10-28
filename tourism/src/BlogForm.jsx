import React, { useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    description: "",
    author: "",
    featuredImage: null,
  });

  const API_URL = "http://localhost:3000/blogs"; // Replace with your API URL

  const postFormData = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}`, formData);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("featuredImage", formData.featuredImage);

    try {
      const response = await postFormData(formDataToSend);
      console.log("Data successfully posted:", response);

      setFormData({
        title: "",
        city: "",
        description: "",
        author: "",
        featuredImage: null,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const updatedFormData = { ...formData };

    if (name === "featuredImage") {
      updatedFormData[name] = files[0];
    } else {
      updatedFormData[name] = value;
    }

    setFormData(updatedFormData);
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
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
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
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium"
        >
          Create Blog
        </button>
      </form>
      <div className="w-1/3 p-4">
        {/* Display a preview of the selected image */}
        {formData.featuredImage && (
          <img
            src={URL.createObjectURL(formData.featuredImage)}
            alt="Featured Image Preview"
            className="w-full h-auto max-h-96 rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default BlogForm;
