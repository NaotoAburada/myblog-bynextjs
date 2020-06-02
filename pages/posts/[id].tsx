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
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import useSWR from "swr";
import CMS from "../../types/cms";
import CommentBox from "../../components/comment-box";

type Props = {
  post: PostType;
  morePosts?: PostType[];
  preview?: boolean;
};

const Post: React.FC<Props> = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  let linkpostpre = -1;
  let linkpostback = morePosts.length;
  for (let i = 0; i < morePosts.length; i++) {
    if (post?.id === morePosts[i].id) {
      if (i !== 0) {
        linkpostpre = i - 1;
      }
      linkpostback = i + 1;
    }
  }
  /*
  {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
        )}
*/
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <>
          <article>
            <Head>
              <title>{post.title}</title>
            </Head>
            <PostHeader title={post.title} date={post.date} />
            <PostBody content={post.content} />
          </article>
          <div className="max-w-2xl mx-auto flex">
            {linkpostpre === -1 ? (
              <PreviousArticle
                post={morePosts[linkpostpre]}
                linknumber={linkpostpre}
              />
            ) : (
              <PreviousArticle post={morePosts[linkpostpre]} />
            )}
            {linkpostback === morePosts.length ? (
              <BackArticle post={morePosts[linkpostpre]} linknumber={0} />
            ) : (
              <BackArticle post={morePosts[linkpostback]} />
            )}
          </div>
          <div className="max-w-2xl mx-auto">
            <CommentBox blogid={post.id} />
          </div>
        </>
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
  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog";

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

  const cmsurl = `https://myblog-nextjs.microcms.io/api/v1/blog/`;

  let res = await fetch(`${cmsurl}${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  let posts = await res.json();
  const article = posts;
  const content = await markdownToHtml(posts.blogtext || "");

  res = await fetch(cmsurl, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  posts = await res.json();
  const articleList = posts.contents;

  return {
    props: {
      post: {
        ...article,
        content,
      },
      morePosts: articleList,
    },
  };
}
