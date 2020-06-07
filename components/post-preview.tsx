import React from "react";
import DateFormater from "./date-formater";
import Link from "next/link";
import { Divider } from "@material-ui/core";

type Props = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

const PostPreview: React.FC<Props> = ({ id, title, date, excerpt }) => {
  return (
    <div>
      <h3 className="text-3xl mb-4 leading-snug">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg ml-6">
        <DateFormater dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-5 ml-6">{excerpt}</p>
      <Divider />
      <br />
    </div>
  );
};

export default PostPreview;
