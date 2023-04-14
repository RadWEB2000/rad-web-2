import "@default/src/styles/Global.scss";
import "@default/src/styles/Editor.scss";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};
export default App;
