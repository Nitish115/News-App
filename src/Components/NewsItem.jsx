import React from "react";
import image from "../assets/news.jpg";

const NewsItem = ({ title, description, srcPic, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 py-2 px-2"
      style={{
        maxWidth: "365px",
        height: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img
        src={srcPic ? srcPic : image}
        
        style={{ height: "200px", width: "347px", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body" style={{ flex: 1 }}>
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Breaking News"}
        </h5>
        <p
          className="card-text"
          style={{ minHeight: "60px", maxHeight: "70px" }}
        >
          {description
            ? description.slice(0, 75)
            : "Updates: What is going on today, Check out here."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
