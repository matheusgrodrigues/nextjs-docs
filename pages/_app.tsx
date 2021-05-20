import { AppProps } from "next/app";

import "../sass/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
