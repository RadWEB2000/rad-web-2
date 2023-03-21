import { LayoutProvider } from "@default/src/context/LayoutProvider/LayoutProvider";
import type { AppProps } from "next/app";
import "@default/src/styles/Global.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<LayoutProvider>
			<Component {...pageProps} />
		</LayoutProvider>
	);
};

export default App;
