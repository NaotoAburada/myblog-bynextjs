import React from "react";
import Container from "../components/container";
import ArticleList from "../components/article-list";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import useSWR from "swr";
import CMS from "../types/cms";

type Props = {
  allPosts: Post[];
};

//const Index: React.FC = ({}) => {
const Index: React.FC<Props> = ({ allPosts }) => {
  /*
  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog";

  // API呼び出しの準備
  const fetcher = () =>
    fetch(cmsurl, {
      method: "GET",
      headers: {
        "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
      },
    }).then((res) => res.json());

  // SWRを使用してのAPI呼び出し
  const { data, error } = useSWR<CMS, {}>(cmsurl, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  const articleList = data.contents.reverse();
*/

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Article List
          </h2>
          {allPosts.length > 0 && <ArticleList posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog";

  const res = await fetch(cmsurl, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  const posts = await res.json();

  const articleList = posts.contents;
  /*
  const paths = articleList.map(
    (article: PostType) => `/posts/${article.id.toString}`
  );
*/
  return {
    props: { allPosts: articleList },
  };
}

/*
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
*/
