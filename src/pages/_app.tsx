
/*  */
import "@/styles/globals.css";

/* Bootstrap 3.3.6 */
import "@/styles/bootstrap/css/bootstrap.min.css";

/* Theme style */ 
import "@/styles/adminlte/adminlte.min.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
