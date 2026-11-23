import { SUBJECT_DATA } from "@/config/constants/common";
import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const SITE_NAME = SUBJECT_DATA.fullName;
const SITE_URL = "https://devtrehan.in";
const DEFAULT_IMAGE = "/images/dev-1.webp";

export default function SEO({
  title,
  description = "Senior Frontend Developer with 5+ years of experience building mordern web applications using React, Next.js, and TypeScript.",
  path = "/",
  image = DEFAULT_IMAGE,
  noIndex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Senior Frontend Developer`;

  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Senior Frontend Developer, React Developer, Next.js Developer, TypeScript, JavaScript, Frontend Architecture"
      />
      <meta name="author" content={SITE_NAME} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${pageTitle}`} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
