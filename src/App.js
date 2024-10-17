import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AvaloniaPage = React.lazy(() => import("./pages/AvaloniaPage"));
const Main = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
  background: #fafafa;
`;

const Center = styled.div`
  background: #fafafa;
`;

const TopMenu = styled.div`
  background-color: #172d3c;
  height: 70px;
`;

function App() {
  return (
    <BrowserRouter basename="{process.env.PUBLIC_URL}">
      <Main>
        <TopMenu />
        <Center>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route index element={<HomePage />}></Route>
              <Route path="avalonia" element={<AvaloniaPage />}></Route>
            </Routes>
          </Suspense>
        </Center>
      </Main>
    </BrowserRouter>
  );
}

export default App;
