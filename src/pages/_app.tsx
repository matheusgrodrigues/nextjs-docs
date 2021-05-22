import { AppProps } from "next/app";

import "src/styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
