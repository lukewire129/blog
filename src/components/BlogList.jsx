import BlogPost from "./BlogPost";
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
function BlogList(props) {
  const { post } = props;
  return (
    <div style={{ width: "58.33333%", padding: ".75rem" }}>
      {post &&
        post.map((item) => {
          if (isEmpty(item.metadata)) return null;
          return <BlogPost data={item} />;
        })}
    </div>
  );
}

export default BlogList;
