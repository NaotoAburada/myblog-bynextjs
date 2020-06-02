import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

type BlogID = {
  blogid: string;
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

const CommentList: React.FC<BlogID> = ({ blogid }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentList;
