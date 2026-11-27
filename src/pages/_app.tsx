import { type AppType } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{}> = ({ Component, pageProps }) => {
  return (
    <>
      <main className={inter.className}>
        <Head>
          <meta name="description" content="portfolio" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </main>
    </>
  );
};

export default MyApp;
