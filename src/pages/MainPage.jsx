import "./MainPage.css";
import { socket } from "../utils/socket";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/common.css";
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
const LinkItem = styled(Link)`
  color: gray;
  text-decoration: none;
  cursor: pointer;
`;
function MainPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    socket.get("/recentblogs.json").then((response) => {
      const { code, data } = response;
      setPost(
        data.files
          .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
          .slice(0, 3)
      );
    });
  }, []);
  return (
    <div className="main">
      <div className="dashboard">
        <div className="card">
          <h2>최근 포스트</h2>
          <ul>
            {post &&
              post.map((item) => {
                if (isEmpty(item.metadata)) return null;
                return (
                  <li>
                    <LinkItem to="/postdetail" state={{ data: item.path }}>
                      {item.metadata.title}
                    </LinkItem>
                  </li>
                );
              })}
          </ul>
        </div>
        <div class="card">
          <h2>카테고리</h2>
          <ul>
            <li>
              <a href="#">기술</a>
            </li>
            <li>
              <a href="#">일상</a>
            </li>
            <li>
              <a href="#">리뷰</a>
            </li>
          </ul>
        </div>
        <div class="card">
          <h2>기타 리소스</h2>
          <ul>
            <li>
              <LinkItem to="/avalonia">아발로니아 샘플</LinkItem>
              <p>
                아발로니아에서 구현한 다양한 컨트롤과 테마를 확인할 수 있습니다.
              </p>
            </li>
            {/* <li>
            <a href="https://example.com/unoblazor-samples">
              우노 블레이저 샘플
            </a>
            <p>우노 블레이저를 활용한 여러 프로젝트와 예제를 볼 수 있습니다.</p>
          </li>
          <li>
            <a href="https://example.com/blazor-samples">블레이저 샘플</a>
            <p>블레이저 프레임워크로 만든 애플리케이션 샘플입니다.</p>
          </li> */}
          </ul>
        </div>
        {/* <div class="card">
        <h2>유용한 튜토리얼</h2>
        <ul>
          <li>
            <a href="https://example.com/tutorials/avalonia">
              아발로니아 튜토리얼
            </a>
          </li>
          <li>
            <a href="https://example.com/tutorials/unoblazor">
              우노 블레이저 튜토리얼
            </a>
          </li>
          <li>
            <a href="https://example.com/tutorials/blazor">블레이저 튜토리얼</a>
          </li>
        </ul>
      </div> */}
      </div>
    </div>
  );
}

export default MainPage;
