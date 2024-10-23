import { useLocation } from "react-router-dom";
import BlogList from "../components/BlogList";
import "../css/common.css";
import { useEffect, useState } from "react";
function SerachBlogPage() {
  const location = useLocation();
  const state = location.state;
  useEffect(() => {
    if (state.type === 0) {
      console.log(state.data.blogs);
    }
  }, [state]);
  return (
    <div>
      <div>
        검색 결과 :{" "}
        {state.type === 0 ? state.data.categoryname : state.data.tagname}
      </div>
      <BlogList post={state.data.blogs} />;
    </div>
  );
}

export default SerachBlogPage;
