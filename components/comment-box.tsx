import React from "react";
import CommentList, { Comments } from "./comment-list";
import CommentForm from "./comment-form";
import useSWR from "swr";

type BlogID = {
  blogid: string;
};

type Comment = {
  contents: {
    id: string;
    comment: string;
  }[];
};

const CommentBox: React.FC<BlogID> = ({ blogid }) => {
  const cmsurl = `https://myblog-nextjs.microcms.io/api/v1/comment?filters=blogid[equals]${blogid}`;

  // API呼び出しの準備
  const fetcher = () =>
    fetch(cmsurl, {
      method: "GET",
      headers: {
        "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
      },
    }).then((res) => res.json());

  // SWRを使用してのAPI呼び出し
  const { data, error } = useSWR<Comment, {}>(cmsurl, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  //  const comments = data.contents;
  const commentli = data.contents;

  return (
    <section>
      <h2>コメント一覧</h2>
      <CommentList commentLi={commentli} />
      <CommentForm blogid={blogid} />
    </section>
  );
};

export default CommentBox;
