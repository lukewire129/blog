import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { socket } from "../utils/socket";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "../css/common.css";

function BlogViewerPage() {
  const [searchParams] = useSearchParams();

  const [source, setSource] = useState("");
  useEffect(() => {
    const category = searchParams.get("category");
    const title = searchParams.get("title");
    const name = searchParams.get("name");
    const path = `_posts/${category}/${title}`;
    console.log(`${path}/${name}`);
    socket.get(`${path}/${name}`).then((response) => {
      const { code, data } = response;
      var re = data.replace(/^---[\s\S]*?---\s*/, "");
      var result = re.replace(
        /!\[alt text\]\(([^https:\/\/].*?)\)/g,
        `\n![alt text](https://lukewire129.github.io/data/${path.replace(
          " ",
          "%20"
        )}/$1)\n`
      );
      setSource(result);
    });
  }, [searchParams]);
  return <MarkdownPreview source={source} style={{ padding: 16 }} />;
}

export default BlogViewerPage;
