import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Söğüt Garden - Professional Garden Design & Landscaping Services
        </title>
        <meta
          name="description"
          content="Transform your outdoor space with Söğüt Garden's professional garden design, landscaping, and maintenance services. Create your dream garden today."
        />
        <meta
          name="keywords"
          content="garden design, landscaping, garden maintenance, sustainable gardening, outdoor space"
        />
        <link rel="canonical" href="https://sogutgarden.com" />
      </Head>
      <Header />
      <main style={{ margin: 0, padding: 0 }}>
        <HomeSlider />
      </main>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        main {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
