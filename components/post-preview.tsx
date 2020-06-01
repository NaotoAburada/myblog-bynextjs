import React from "react";
import Avatar from "./avatar";
import DateFormater from "./date-formater";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

const PostPreview: React.FC<Props> = ({ id, title, date, excerpt }) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
