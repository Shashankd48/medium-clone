import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "../layouts";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
   Router.events.on("routeChangeStart", () => NProgress.start());
   Router.events.on("routeChangeComplete", () => NProgress.done());
   Router.events.on("routeChangeError", () => NProgress.done());

   return (
      <Layouts>
         <Component {...pageProps} />
      </Layouts>
   );
}

export default MyApp;
