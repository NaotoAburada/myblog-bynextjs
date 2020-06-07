import React from "react";
import Container from "../components/container";
import ArticleList from "../components/article-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../types/post";
import Footer from "../components/footer";
import styles from "./index.module.css";

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
          <h2
            className={`${styles.subtitle} pt-3 pb-3 pr-4 pl-10 mb-10 text-4xl text-white bg-blue-300 md:text-4xl font-bold tracking-tighter leading-tight`}
          >
            記事一覧
          </h2>
          {allPosts.length > 0 && <ArticleList posts={allPosts} />}
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

//<h2 className="px-20 mb-10 text-4xl max-w-xs text-white bg-blue-300 md:text-4xl font-bold tracking-tighter leading-tight">
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
