import React, { useState, useEffect } from "react";
import { socket } from "../utils/socket";
import BlogList from "../components/BlogList";
import "../css/common.css";
function BlogPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    socket.get("/recentblogs.json").then((response) => {
      const { code, data } = response;
      console.log(data);
      setPost(
        data.files.sort(
          (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
        )
      );
    });
  }, []);
  return (
    <div className="main">
      <BlogList post={post} />
    </div>
  );
}

export default BlogPage;
