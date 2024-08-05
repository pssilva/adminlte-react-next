import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*<!-- Google Font: Source Sans Pro >*/}
        <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
        {/*<!-- Ionicons >*/}
        <Link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        
      </Head>

      <body className={`hold-transition skin-blue sidebar-mini`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
