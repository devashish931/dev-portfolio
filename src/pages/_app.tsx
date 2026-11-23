import { type Session } from "next-auth";
import { type AppType } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/seo";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <SEO />
      <main className={inter.className}>
        <Head>
          <meta name="description" content="portfolio" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </main>
      <ToastContainer toastClassName="!bg-elevated !text-primary-text border border-brand/80" />
    </>
  );
};

export default MyApp;
