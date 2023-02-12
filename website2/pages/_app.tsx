import type { AppProps } from "next/app";
import { LayoutProvider } from "../context/LayoutProvider";
import "../styles/Global.scss";
import "../styles/Parts.scss";
const App = ({ Component, pageProps }: AppProps) => {
	return (
		<LayoutProvider>
			<Component {...pageProps} />
		</LayoutProvider>
	);
};

export default App;
