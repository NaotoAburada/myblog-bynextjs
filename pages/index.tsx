import React from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import useSWR from "swr";

type Props = {
  allPosts: Post[];
};

const Index: React.FC<Props> = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog";

  // CMSからのレスポンス結果の型定義
  type Result = {
    contents: {
      id: string;
      createdAt: string;
      updatedAt: string;
      title: string;
      excerpt: string;
      date: string;
      slug: string;
      blogtext: string;
    }[];
    totalCount: string;
    offset: string;
    limit: string;
  };

  // API呼び出しの準備
  const fetcher = () =>
    fetch(cmsurl, {
      method: "GET",
      headers: {
        "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
      },
    }).then((res) => res.json());

  // SWRを使用してのAPI呼び出し
  const { data, error } = useSWR<Result, {}>(cmsurl, fetcher);

  /*
  const fetcher = (
    url : string
  ) => fetch("https://api.github.com/users/facebook/repos").then(res => res.json());
  const {data, error} = useSWR("https://api.github.com/users/facebook/repos", fetcher)
*/
  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        {data.contents[0].slug}
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
