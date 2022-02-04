import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import SEOHead from "../components/SEOHead";
import "../css/global.css";
import ReactQueryProvider from "../provider/ReactQueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOHead />

      <ThemeProvider attribute="class">
        <ReactQueryProvider>
          <Component {...pageProps} />
        </ReactQueryProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
