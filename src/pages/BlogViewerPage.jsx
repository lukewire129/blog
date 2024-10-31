import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../utils/socket";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "../css/common.css";

function BlogViewerPage() {
  const location = useLocation();
  const path = location.state.data;
  const [source, setSource] = useState("");
  useEffect(() => {
    socket.get(path).then((response) => {
      const { code, data } = response;
      var re = data.replace(/^---[\s\S]*?---\s*/, "");
      var result = re.replace(
        /!\[alt text\]\(([^https:\/\/].*?)\)/g,
        `\n![alt text](https://lukewire129.github.io/data/${path
          .replace(/\/README.*\.md$/, "")
          .replace(" ", "%20")}/$1)\n`
      );
      setSource(result);
    });
  }, []);
  return (
    <MarkdownPreview
      source={source}
      style={{
        padding: "50px 30px",
        border: "1px solid #cccccc",
      }}
    />
  );
}

export default BlogViewerPage;
