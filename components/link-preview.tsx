import React from "react";
import DateFormater from "./date-formater";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  date: string;
};

const LinkPreview: React.FC<Props> = ({ id, title, date }) => {
  return (
    <div>
      <h3>
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:underline">{title}</a>
        </Link>
        {date !== "" && (
          <div>
            <DateFormater dateString={date} />
          </div>
        )}
      </h3>
    </div>
  );
};

export default LinkPreview;
