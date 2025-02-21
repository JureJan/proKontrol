import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> {/* ✅ Default language */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
