import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { socket } from "./utils/socket";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import "./App.css";
const MainPage = React.lazy(() => import("./pages/MainPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const BlogViewerPage = React.lazy(() => import("./pages/BlogViewerPage"));
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
const Nava = styled(Link)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;

function App() {
  const [recentPost, setRecentPost] = useState([]);
  const [tags, setTags] = useState([]);
  const tagList = Array.isArray(tags) ? tags : [];
  useEffect(() => {
    socket.get("/recentblogs.json").then((response) => {
      const { code, data } = response;
      setRecentPost(
        data.files
          .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
          .slice(0, 3)
      );
    });
    socket.get("/tagBlogs.json").then((response) => {
      const { code, data } = response;
      console.log(data);
      setTags(data);
    });
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={{ backgroundColor: "#fafafa" }}>
        <div className="header">
          <div class="logo" style={{ marginBottom: "10px" }}>
            <strong style={{ color: "black", fontSize: "24px" }}>
              lukewire` Blog
            </strong>
          </div>
          <div className="nav">
            <ul style={{ listStyle: "none" }}>
              <li>
                <Nava to="/">Home</Nava>
              </li>
              <li>
                <Nava to="/post">Post</Nava>
              </li>
              <li>
                <Nava to="/">Catecory</Nava>
              </li>
              <li>
                <Nava to="/">About</Nava>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 20%" }}>
          <div>
            <Suspense fallback={<div>Loading....</div>}>
              <Routes>
                <Route exact path="/" element={<MainPage />}></Route>
                <Route path="/post" element={<BlogPage />}></Route>
                <Route path="/postdetail" element={<BlogViewerPage />}></Route>
              </Routes>
            </Suspense>
          </div>
          <Sidebar tags={tags} />
        </div>
        <footer>
          <p>© 2024 내 개인 블로그. 모든 권리 보유.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
