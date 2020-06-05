import React, { useCallback, useEffect } from "react";
import CommentList, { Comments } from "./comment-list";
import CommentForm from "./comment-form";
import useSWR from "swr";
import CMSBlogComment from "../types/cms-blogcomment";

type BlogID = {
  blogid: string;
};

type Comment = {
  contents: CMSBlogComment[];
};

// export const UseCommentList = React.createContext([
//   [{ id: "", comment: "" }],
//   () => {},
// ]);
// export const UseCommentList: React.Context<
//   {
//     id: string;
//     comment: string;
//   }[]
// > = React.createContext<
//   {
//     id: string;
//     comment: string;
//   }[]
// >([{ id: "", comment: "" }]);

const CommentBox: React.FC<BlogID> = ({ blogid }) => {
  const [commentli, setCommentLi] = React.useState([{ id: "", comment: "" }]);

  // const [commentli, setCommentLi]: [
  //   { id: string; comment: string }[],
  //   React.Dispatch<
  //     {
  //       id: string;
  //       comment: string;
  //     }[]
  //   >
  // ] = React.useState([{ id: "", comment: "" }]);

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
  const { data, error, mutate, revalidate } = useSWR<Comment, {}>(
    cmsurl,
    fetcher,
    { refreshInterval: 1000 }
  );
  // setCommentLi(hoge.contents);
  //revalidate();
  //revalidateOnFocus
  const addComment = async (comment: { id: string; comment: string }) => {
    const updatedContens = [...(data?.contents as []), comment];
    console.log(updatedContens);
    await mutate({ contents: updatedContens }, true);
    console.log(data?.contents);
  };

  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section>
      <h2>コメント一覧</h2>
      <CommentList commentLi={data.contents} />
      <CommentForm
        blogid={blogid}
        addComment={addComment}
        updateComment={revalidate}
      />
    </section>
  );
};

/* <UseCommentList.Provider value={[commentli, mutate]}>
<CommentList commentLi={commentli} />
<CommentForm blogid={blogid} commentLi={commentli} />
</UseCommentList.Provider> */

export default CommentBox;
