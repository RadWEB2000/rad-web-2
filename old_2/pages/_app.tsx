import "../src/styles/Global.scss";
import "../src/styles/Variables.scss";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
