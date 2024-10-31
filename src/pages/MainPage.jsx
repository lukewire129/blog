import React, { useState, useEffect } from "react";
import { socket } from "../utils/socket";
import BlogList from "../components/BlogList";
import "../css/common.css";
function MainPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    socket.get("/recentblogs.json").then((response) => {
      const { code, data } = response;
      setPost(
        data.files.sort(
          (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
        )
      );
    });
  }, []);
  return <BlogList post={post} />;
}

export default MainPage;
