import React from "react";
import CommentList from "./comment-list";
import CommentForm from "./comment-form";

type BlogID = {
  blogid: string;
};

const CommentBox: React.FC<BlogID> = ({ blogid }) => {
  return (
    <section>
      <h2>コメント一覧</h2>
      <CommentList blogid={blogid} />
      <CommentForm blogid={blogid} />
    </section>
  );
};

export default CommentBox;
