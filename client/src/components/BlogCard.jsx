import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      style={{ "hover:shadow": "#5044e510" }}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer bg-white border border-[#5044e5]/30"
    >
      <img src={image} alt="" className="aspect-video" />
      <div className="border border-[#5044e5]/10"></div>
      <span
        style={{ "background-color": "#5044e513", color: "#5044e5" }}
        className="ml-5 mt-4 px-3 py-1 inline-block rounded-full"
      >
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium tracking-widest text-gray-900">
          {title}
        </h5>
        <p
          className="mb-3 text-xs text-gray-600 tracking-wide"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 80) + "...",
          }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
