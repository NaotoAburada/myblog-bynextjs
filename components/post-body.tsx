import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import marked from "marked";

type Props = {
  content: string;
};

const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  );
};

export default PostBody;
