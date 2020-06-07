import React from "react";
import LinkPreview from "./link-preview";
import PostType from "../types/post";
import { Link, Typography } from "@material-ui/core";

type Props = {
  post: PostType;
  linknumber?: number;
};

const BackArticle: React.FC<Props> = ({ post, linknumber = -1 }) => {
  const title =
    post.title.length > 15 ? `${post.title.substr(0, 15)}...` : `${post.title}`;
  return (
    <section>
      <Typography variant="h6">前の記事へ</Typography>
      {linknumber === 0 ? (
        <div>リンク先なし</div>
      ) : (
        <Link>
          <div>
            <LinkPreview key={post.slug} id={post.id} title={title} date="" />
          </div>
        </Link>
      )}
    </section>
  );
};

export default BackArticle;
