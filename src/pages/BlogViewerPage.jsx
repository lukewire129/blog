import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../utils/socket";
import MarkdownPreview from "@uiw/react-markdown-preview";

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
        `![alt text](https://lukewire129.github.io/data/${path
          .replace("README.md", "")
          .replace(" ", "%20")}/$1)`
      );
      setSource(result);
    });
  }, []);
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div style={{ width: "58.33333%", padding: ".75rem" }}>
        <MarkdownPreview source={source} style={{ padding: 16 }} />;
      </div>
    </div>
  );
}

export default BlogViewerPage;
