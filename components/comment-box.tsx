import React from "react";
import CommentList from "./comment-list";
import CommentForm from "./comment-form";
import useSWR from "swr";
import CMSBlogComment from "../types/cms-blogcomment";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

type BlogID = {
  blogid: string;
};

type Comment = {
  contents: CMSBlogComment[];
};

const CommentBox: React.FC<BlogID> = ({ blogid }) => {
  const classes = useStyles();
  const cmsurl = `https://myblog-nextjs.microcms.io/api/v1/comment?filters=blogid[equals]${blogid}&limit=100`;

  // API呼び出しの準備
  const fetcher = () =>
    fetch(cmsurl, {
      method: "GET",
      headers: {
        "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
      },
    }).then((res) => res.json());

  // SWRを使用してのAPI呼び出し
  const { data, error, mutate, revalidate } = useSWR<Comment, {}>(
    cmsurl,
    fetcher,
    { refreshInterval: 1000 }
  );

  // const addComment = async (comment: { id: string; comment: string }) => {
  //   const updatedContens = [...(data?.contents as []), comment];
  //   console.log(updatedContens);
  //   await mutate({ contents: updatedContens }, true);
  //   console.log(data?.contents);
  // };

  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section>
      <Divider />
      <br />
      <div className={classes.root}>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={3}>
            <Typography variant="h5">コメント一覧</Typography>
          </Grid>
          <Grid item xs={3}>
            <div className="ml-6">
              <CommentForm blogid={blogid} />
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
      <CommentList commentLi={data.contents} />
    </section>
  );
};

export default CommentBox;
