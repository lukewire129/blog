import "./MainPage.css";
import { socket } from "../utils/socket";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      console.log(
        data.files
          .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
          .slice(0, 3)
      );

      setPost(
        data.files
          .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
          .slice(0, 3)
      );
    });
  }, []);
  return (
    <div>
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
      <div class="card">
        <h2>태그 클라우드</h2>
        <span class="tag">JavaScript</span>
        <span class="tag">CSS</span>
        <span class="tag">HTML</span>
        <span class="tag">React</span>
      </div>
      <div class="card">
        <h2>연락처</h2>
        <ul class="social-links">
          <li>
            <a
              href="mailto:lukewire129@gmail.com"
              aria-label="이메일"
              class="email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 13.6l-6.2-4.8V18h12V8.8L12 13.6zm0-11L3 8.2V18h18V8.2L12 2.6z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/lukewire129"
              aria-label="트위터"
              class="twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M23.953 4.569c-.885.392-1.83.654-2.825.771 1.014-.609 1.794-1.577 2.165-2.723-.95.559-2.005.956-3.127 1.168-.896-.956-2.17-1.548-3.594-1.548-2.719 0-4.918 2.202-4.918 4.918 0 .386.045.762.127 1.124-4.086-.205-7.7-2.164-10.141-5.144-.425.729-.666 1.577-.666 2.477 0 1.708.866 3.213 2.18 4.094-.804-.025-1.563-.247-2.227-.616v.062c0 2.383 1.688 4.368 3.926 4.823-.411.111-.845.171-1.287.171-.314 0-.623-.031-.925-.087.623 1.953 2.433 3.379 4.572 3.417-1.678 1.314-3.788 2.096-6.079 2.096-.394 0-.783-.023-1.17-.067 2.173 1.393 4.762 2.207 7.547 2.207 9.048 0 14.005-7.486 14.005-13.96 0-.213-.004-.426-.014-.637.961-.695 1.794-1.56 2.452-2.548l-.047-.020z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/lukewire129"
              aria-label="링크드인"
              class="linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/lukewire129"
              aria-label="페이스북"
              class="facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/lukewire129"
              aria-label="인스타그램"
              class="instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourprofile"
              aria-label="깃허브"
              class="github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.287-.011-1.242-.017-2.247-3.338.727-4.042-1.616-4.042-1.616-.546-1.387-1.334-1.759-1.334-1.759-1.086-.743.083-.727.083-.727 1.203.085 1.835 1.233 1.835 1.233 1.067 1.827 2.8 1.298 3.487.992.108-.773.418-1.298.763-1.597-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.467-2.387 1.236-3.228-.124-.303-.535-1.528.117-3.182 0 0 1.008-.322 3.302 1.229.957-.266 1.983-.397 3.003-.402 1.021.005 2.047.136 3.007.402 2.294-1.551 3.302-1.229 3.302-1.229.652 1.654.242 2.879.118 3.182.77.841 1.236 1.915 1.236 3.228 0 4.615-2.809 5.628-5.475 5.922.43.37.815 1.096.815 2.209 0 1.592-.014 2.874-.017 3.26.002.319.189.694.797.577C20.563 21.799 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
