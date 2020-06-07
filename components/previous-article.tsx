import React from "react";
import LinkPreview from "./link-preview";
import PostType from "../types/post";
import { Link, Typography } from "@material-ui/core";

type Props = {
  post: PostType;
  linknumber?: number;
};

const PreviousArticle: React.FC<Props> = ({ post, linknumber = 0 }) => {
  const title =
    post.title.length > 15 ? `${post.title.substr(0, 15)}...` : `${post.title}`;
  return (
    <section>
      <Typography variant="h6">次の記事へ</Typography>
      {linknumber === -1 ? (
        <div>リンク先なし</div>
      ) : (
        <Link>
          <LinkPreview key={post.slug} id={post.id} title={title} date="" />
        </Link>
      )}
    </section>
  );
};

export default PreviousArticle;
