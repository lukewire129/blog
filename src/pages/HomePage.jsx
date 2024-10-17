import React, { useState, useEffect } from "react";

import { socket } from "../utils/socket";
function timeAgo(date) {
  const now = new Date();
  const diff = now - new Date(date); // 현재 날짜와 특정 날짜 간의 시간 차이 (밀리초)

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // 대략적인 월 계산 (30일 기준)

  if (months > 0) {
    return `${months} month(s) ago`;
  } else if (weeks > 0) {
    return `${weeks} week(s) ago`;
  } else if (days > 0) {
    return `${days} day(s) ago`;
  } else if (hours > 0) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  } else {
    return `${seconds} second(s) ago`;
  }
}
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
function HomePage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    socket.get("/recentblogs.json").then((response) => {
      const { code, data } = response;
      console.log(data);
      setPost(data.files);
    });
  }, []);
  return (
    <div>
      {" "}
      {post &&
        post.map((item) => {
          if (isEmpty(item.metadata)) return null;
          return (
            <div>
              <strong style={{ fontSize: "32px" }}>
                {item.metadata.title}
              </strong>
              <small style={{ fontSize: "24px" }}>
                {timeAgo(item.metadata.date)}
              </small>
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
