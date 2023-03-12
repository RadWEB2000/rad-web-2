import type { AppProps } from "next/app";
import { LayoutProvider } from "../src/context/LayoutProvider";
import "../src/styles/Global.scss";
import "../src/styles/Parts.scss";
const App = ({ Component, pageProps }: AppProps) => {
	let theme = true;
	return (
		<LayoutProvider>
			<div data-theme={theme}>
				<Component {...pageProps} />
			</div>
		</LayoutProvider>
	);
};

export default App;
