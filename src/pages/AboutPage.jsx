import React, { useState, useEffect } from "react";
import { socket } from "../utils/socket";
import MarkdownPreview from "@uiw/react-markdown-preview";
function About() {
  const [source, setSource] = useState("");
  useEffect(() => {
    socket
      .get(`https://lukewire129.github.io/lukewire129/README_KR.md`)
      .then((response) => {
        const { code, data } = response;
        var re = data.replace(/^---[\s\S]*?---\s*/, "");
        setSource(re);
      });
  }, []);
  return (
    <MarkdownPreview
      source={source}
      style={{
        padding: "50px 30px 50px 30px",
        border: "1px solid #cccccc",
        fontSize: "13px",
      }}
    />
  );
}

export default About;
