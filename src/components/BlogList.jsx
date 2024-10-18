import BlogPost from "./BlogPost";
import styled from "styled-components";
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
const Pannel = styled.div`
  display: grid;
  gap: 20px;
`;
function BlogList(props) {
  const { post } = props;
  return (
    <Pannel>
      {post &&
        post.map((item) => {
          if (isEmpty(item.metadata)) return null;
          return <BlogPost data={item} />;
        })}
    </Pannel>
  );
}

export default BlogList;
