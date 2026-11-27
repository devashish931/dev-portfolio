import { type AppType } from "next/app";
import "@/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const MyApp: AppType<{}> = ({ Component, pageProps }) => {
  return (
    <>
      <main className={spaceGrotesk.className}>
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
