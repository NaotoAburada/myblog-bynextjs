import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

type BlogID = {
  blogid: string;
};

export type Comments = {
  commentLi: {
    id: string;
    comment: string;
  }[];
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
        <Card variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {come.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentList;
