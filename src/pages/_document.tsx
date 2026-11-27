import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  THEMES,
} from "@/config/constants/themes";
import Document, { Html, Head, Main, NextScript } from "next/document";

const themeScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem(
      ${JSON.stringify(THEME_STORAGE_KEY)}
    );

    var validThemes = ${JSON.stringify(THEMES.map((theme) => theme.id))};

    var defaultTheme = ${JSON.stringify(DEFAULT_THEME)};

    var theme = validThemes.includes(savedTheme)
      ? savedTheme
      : defaultTheme;

    document.documentElement.setAttribute("data-theme", theme);
  } catch (error) {
    document.documentElement.setAttribute(
      "data-theme",
      ${JSON.stringify(DEFAULT_THEME)}
    );
  }
})();
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
