import React from "react";
import Avatar from "./avatar";
import DateFormater from "./date-formater";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  date: string;
};

const PostHeader: React.FC<Props> = ({ title, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="b-6 text-lg">
          <DateFormater dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
