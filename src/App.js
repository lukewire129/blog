import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
const MainPage = React.lazy(() => import("./pages/MainPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const AvaloniaPage = React.lazy(() => import("./pages/AvaloniaPage"));
const BlogViewerPage = React.lazy(() => import("./pages/BlogViewerPage"));

const Header = styled.div`
  background-color: #f0f4f8;
  color: white;
  padding: 10px;
  text-align: center;
  width: "100vw";
`;

const NaVul = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const Navulli = styled.li`
  display: inline;
  margin: 0 10px;
`;
const Nava = styled(Link)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={{ backgroundColor: "#fafafa" }}>
        <Header>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <strong style={{ color: "black", fontSize: "24px" }}>
              lukewire` Blog
            </strong>
            <nav>
              <ul>
                <li>
                  <Nava to="/">홈</Nava>
                </li>
                <li>
                  <Nava to="/post">최근 포스트</Nava>
                </li>
                <li>
                  <Nava to="/">카테고리</Nava>
                </li>
                <li>
                  <Nava to="/">소개</Nava>
                </li>
              </ul>
            </nav>
          </div>
        </Header>
        <div>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route exact path="/" element={<MainPage />}></Route>
              <Route path="/avalonia" element={<AvaloniaPage />}></Route>
              <Route path="/post" element={<BlogPage />}></Route>
              <Route path="/postdetail" element={<BlogViewerPage />}></Route>
            </Routes>
          </Suspense>
        </div>
        <footer>
          <p>© 2024 내 개인 블로그. 모든 권리 보유.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
