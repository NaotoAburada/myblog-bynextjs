import React from "react";
import LinkPreview from "./link-preview";
import PostType from "../types/post";
import { Link } from "@material-ui/core";

type Props = {
  post: PostType;
  linknumber?: number;
};

const BackArticle: React.FC<Props> = ({ post, linknumber = -1 }) => {
  return (
    <section>
      <h4>BackArticle</h4>
      {linknumber === 0 ? (
        <div>リンク先なし</div>
      ) : (
        <Link>
          <div>
            <LinkPreview
              key={post.slug}
              id={post.id}
              title={post.title}
              date={post.date}
            />
          </div>
        </Link>
      )}
    </section>
  );
};

export default BackArticle;
