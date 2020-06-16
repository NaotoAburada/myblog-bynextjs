import React from "react";
import LinkPreview from "./link-preview";
import PostType from "../types/post";
import Link from "next/link";
import { Button } from "@material-ui/core";

type Props = {
  post: PostType;
  linknumber?: number;
};

const BackArticle: React.FC<Props> = ({ post, linknumber = -1 }) => {
  const id = post.id;
  return (
    <section>
      {linknumber === 0 ? (
        <div></div>
      ) : (
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          <Link as={`/posts/${id}`} href="/posts/[id]">
            <div className="mx-2">前の記事へ</div>
          </Link>
        </Button>
      )}
    </section>
  );
};

export default BackArticle;
