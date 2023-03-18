import { UserProvider } from "@default/src/context/UserContext";
import type { AppProps } from "next/app";
import "../src/styles/Global.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	);
};

export default App;
