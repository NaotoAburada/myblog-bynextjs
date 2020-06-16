import React from "react";
import PostType from "../types/post";
import Link from "next/link";
import { Button } from "@material-ui/core";

type Props = {
  post: PostType;
  linknumber?: number;
};

const PreviousArticle: React.FC<Props> = ({ post, linknumber = 0 }) => {
  const id = post.id;
  return (
    <section>
      {linknumber === -1 ? (
        <div></div>
      ) : (
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          <Link as={`/posts/${id}`} href="/posts/[id]">
            <div className="mx-2">次の記事へ</div>
          </Link>
        </Button>
      )}
    </section>
  );
};

export default PreviousArticle;
