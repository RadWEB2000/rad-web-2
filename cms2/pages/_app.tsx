import { LayoutProvider } from "@default/src/context/LayoutProvider/LayoutProvider";
// import "@default/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<LayoutProvider>
			<Component {...pageProps} />
		</LayoutProvider>
	);
};

export default App;
