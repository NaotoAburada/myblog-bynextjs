import React from "react";
import Container from "../components/container";
import ArticleList from "../components/article-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

const Profile: React.FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Naoto Aburada Profile</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
};

export default Profile;
