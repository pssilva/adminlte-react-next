import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`hold-transition skin-blue sidebar-mini`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
