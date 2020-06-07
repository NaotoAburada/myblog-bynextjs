import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import DateFormater from "./date-formater";
import CMSBlogComment from "../types/cms-blogcomment";

type BlogID = {
  blogid: string;
};

export type Comments = {
  commentLi: CMSBlogComment[];
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CommentList: React.FC<Comments> = ({ commentLi }) => {
  const classes = useStyles();
  return (
    <div>
      {commentLi.map((come) => (
        <div className="text-lg mb-6">
          {come.comment}
          <br />
          コメント投稿日時：
          <DateFormater dateString={come.createdAt} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CommentList;

// <Card variant="outlined">
// <CardContent>
//   <Typography
//     className={classes.title}
//     color="textSecondary"
//     gutterBottom
//   >
//     {come.comment}
//     <div className="text-lg ml-6">
//       <DateFormater dateString={date} />
//     </div>
//   </Typography>
// </CardContent>
// </Card>
