import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import PreviousArticle from "../../components/previous-article";
import BackArticle from "../../components/back-article";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import PostType from "../../types/post";
import CMS from "../../types/cms";
import CommentBox from "../../components/comment-box";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import marked from "../../lib/marked";

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

type Props = {
  post: PostType;
  morePosts: PostType[];
  arrayLength: number;
  preview?: boolean;
};

const Post: React.FC<Props> = ({ post, morePosts, arrayLength, preview }) => {
  const classes = useStyles();
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  let linkpostpre = -1;
  let linkpostback = arrayLength;
  for (let i = 0; i < arrayLength; i++) {
    if (post?.id === morePosts[i].id) {
      if (i !== 0) {
        linkpostpre = i - 1;
      }
      linkpostback = i + 1;
    }
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="max-w-2xl mx-auto">
              <Header />
              <Head>
                <title>{post.title}</title>
              </Head>
              <PostHeader title={post.title} date={post.date} />
              <PostBody content={post.blogtext} />
              <br />
              <div>
                <Grid container spacing={2} justify="space-between">
                  <Grid item xs={3} className={classes.paper}>
                    {linkpostpre === -1 ? (
                      <PreviousArticle
                        post={morePosts[0]}
                        linknumber={linkpostpre}
                      />
                    ) : (
                      <PreviousArticle post={morePosts[linkpostpre]} />
                    )}
                  </Grid>
                  <Grid item xs={3} className={classes.paper}>
                    {linkpostback === arrayLength ? (
                      <BackArticle post={morePosts[0]} linknumber={0} />
                    ) : (
                      <BackArticle post={morePosts[linkpostback]} />
                    )}
                  </Grid>
                </Grid>
              </div>
              <br />
            </article>
            <div className="max-w-2xl mx-auto">
              <CommentBox blogid={post.id} />
            </div>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticPaths() {
  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog?limit=100";

  const res = await fetch(cmsurl, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  const posts: CMS = await res.json();

  const articleList = posts.contents.reverse();

  const paths = articleList.map((article) => `/posts/${article.id.toString()}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Params) {
  const id = params.id;

  let cmsurl = `https://myblog-nextjs.microcms.io/api/v1/blog/`;

  let res = await fetch(`${cmsurl}${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  let posts = await res.json();
  const article = posts;
  const content = marked(posts.blogtext);

  cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog/?limit=100";

  res = await fetch(cmsurl, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  posts = await res.json();
  const articleList = posts.contents;
  const arrayLength = articleList.length;

  return {
    props: {
      post: {
        ...article,
        content,
      },
      morePosts: articleList,
      arrayLength,
    },
  };
}
