import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description, author, image, city }) => {
  return (
    // <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //   <img
    //     src={image}
    //     alt={title}
    //     className="w-full h-40 object-cover object-center"
    //   />
    //   <div className="p-6">
    //     <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    //     <p className="text-gray-600">{description}</p>
    //     <p className="mt-2 text-gray-500">Author: {author}</p>
    //   </div>
    // </div>

    <div class="w-full md:w-1/2 lg:w-[90%] pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img src={image} alt={title} class="h-64 ml-auto mr-auto rounded" />
        </figure>
        <div class="rounded-lg h-[130px] p-4 bg-gradient-to-br from-black to-transparent flex flex-col">
          <div>
            <h5 class="text-white text-xl font-bold leading-none">{title}</h5>
            <span class="text-sm text-gray-400 leading-none">{city}</span>
          </div>
          <div class="flex items-center">
            <div class="text-md text-white font-light">Author: {author}</div>
            <Link to={`/blog/${id}`}>
              <button class="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current m-auto"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000") // Replace with your JSON server URL
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
      // console.log(BlogList);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard
          id={blog.blog_id}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          image={blog.image}
          city={blog.city}
        />
      ))}
    </div>
  );
};

export default BlogList;
