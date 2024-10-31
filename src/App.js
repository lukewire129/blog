import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { socket } from "./utils/socket";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import "./css/common.css";
import "./App.css";
const MainPage = React.lazy(() => import("./pages/MainPage"));
const SerachBlogPage = React.lazy(() => import("./pages/SerachBlogPage"));
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
  const [category, setCategory] = useState([]);
  const tagList = Array.isArray(tags) ? tags : [];
  useEffect(() => {
    socket.get("/tagBlogs.json").then((response) => {
      const { code, data } = response;
      setTags(data);
    });
    socket.get("/categorizedblogs.json").then((response) => {
      const { code, data } = response;
      setCategory(data);
    });
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={{ backgroundColor: "#fafafa" }}>
        <div className="header">
          <div class="logo" style={{ marginBottom: "10px" }}>
            <strong style={{ color: "white", fontSize: "24px" }}>
              lukewire` Blog
            </strong>
          </div>
          <div className="nav">
            <ul style={{ listStyle: "none" }}>
              <li>
                <Nava to="/">Home</Nava>
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
        <div id="mainpanel">
          <div id="main">
            <Suspense fallback={<div>Loading....</div>}>
              <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/search" element={<SerachBlogPage />}></Route>
                <Route path="/postdetail" element={<BlogViewerPage />}></Route>
              </Routes>
            </Suspense>
          </div>
          <div id="sidebarArea">
            <Sidebar tags={tags} category={category} />
          </div>
        </div>
        <footer>
          <p>© 2024 내 개인 블로그. 모든 권리 보유.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
