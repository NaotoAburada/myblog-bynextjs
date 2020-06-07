import React from "react";
import Container from "../components/container";
import ArticleList from "../components/article-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../types/post";
import Footer from "../components/footer";

type Props = {
  allPosts: Post[];
};

const Index: React.FC<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Naoto Aburada Blog</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="mb-10 text-4xl bg-blue-300 md:text-4xl font-bold tracking-tighter leading-tight">
            記事一覧
          </h2>
          {allPosts.length > 0 && <ArticleList posts={allPosts} />}
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const cmsurl = "https://myblog-nextjs.microcms.io/api/v1/blog?limit=100";

  const res = await fetch(cmsurl, {
    method: "GET",
    headers: {
      "X-API-KEY": "c2bf30d3-1da2-45a3-8327-b992b9006af3",
    },
  });
  const posts = await res.json();

  const articleList = posts.contents;

  return {
    props: { allPosts: articleList },
  };
}
