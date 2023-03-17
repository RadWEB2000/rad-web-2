import type { AppProps } from "next/app";
import "../src/styles/Global.scss";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
