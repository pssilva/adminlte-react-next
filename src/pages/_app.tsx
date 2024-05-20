import "@/styles/globals.css";

/* Bootstrap 3.3.6 */
import "../../public/bootstrap/css/bootstrap.min.css";

/* Theme style */ 
import "../../public/dist/css/AdminLTE.min.css";

{ /*"<!--  iCheck -->" */}
import "../../public/plugins/iCheck/flat/blue.css";

{ /*"<!--  Morris chart -->" */}
import "../../public/plugins/morris/morris.css";

{ /*"<!--  jvectormap -->" */}
import "../../public/plugins/jvectormap/jquery-jvectormap-1.2.2.css";

{ /*"<!--  Date Picker -->" */}
import "../../public/plugins/datepicker/datepicker3.css";

{ /*"<!--  Daterange picker -->" */}
import "../../public/plugins/daterangepicker/daterangepicker.css";

{ /*"<!--  bootstrap wysihtml5 - text editor -->" */}
import "../../public/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
