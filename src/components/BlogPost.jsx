import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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

const BlogCard = styled.div`
  background-color: #ffffff;
  /* 카드 배경색 */
  border: 1px solid #d1d1d1;
  /* 카드 경계선 추가 */
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 카드 그림자 효과 */
  padding: 40px;
`;
const LinkItem = styled(Link)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;
function BlogPost(props) {
  const { data } = props;

  return (
    <BlogCard>
      <LinkItem to="/postdetail" state={{ data: data.path }}>
        {data.metadata.title}
      </LinkItem>
      <p style={{ fontSize: "18px" }}>{timeAgo(data.metadata.date)}</p>
      <p style={{ fontSize: "18px" }}>{data.metadata.subtitle}</p>
    </BlogCard>
  );
}

export default BlogPost;
