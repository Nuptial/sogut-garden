import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

const Events = () => {
  return (
    <div>
      <Head>
        <title>Söğüt Garden - Events | Garden Workshops and Activities</title>
        <meta
          name="description"
          content="Discover our upcoming garden workshops, children's nature education programs, and sustainable gardening seminars at Söğüt Garden."
        />
        <meta
          name="keywords"
          content="garden workshops, nature education, sustainable gardening, garden maintenance, children's gardening, Söğüt Garden"
        />
        <link rel="canonical" href="https://sogutgarden.com/events" />
        <link rel="icon" href="/sogut-logo.png" />
      </Head>

      <Header />
      <main className="events-main">
        <div className="coming-soon-section">
          <h2>ÇOK YAKINDA HIZMETINIZDE</h2>
        </div>

        <style jsx>{`
          .events-main {
            min-height: 100vh;
            background-color: #0e1526;
            color: white;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .coming-soon-section {
            text-align: center;
            margin: 0 auto;
            max-width: 670px;
            padding: 0 20px;
          }

          .coming-soon-section h2 {
            font-size: 64px;
            font-weight: bold;
            color: white;
            line-height: 1.2;
          }

          @media (max-width: 992px) {
            .coming-soon-section h2 {
              font-size: 48px;
            }
          }

          @media (max-width: 768px) {
            .coming-soon-section h2 {
              font-size: 36px;
            }
          }

          @media (max-width: 480px) {
            .coming-soon-section h2 {
              font-size: 28px;
            }
          }
        `}</style>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Events;
