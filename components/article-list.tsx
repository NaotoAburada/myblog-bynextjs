import React from "react";
import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const ArticleList: React.FC<Props> = ({ posts }) => {
  return (
    <section>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
