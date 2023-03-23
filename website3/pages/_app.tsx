import type { AppProps } from "next/app";
import { LayoutProvider } from "../src/context/LayoutProvider";
import "../src/styles/Global.scss";
import "../src/styles/Parts.scss";

interface iApp extends AppProps {
	time: string;
}

const App = ({ Component, pageProps, time }: iApp) => {
	return (
		<LayoutProvider time={time}>
			<Component {...pageProps} />
		</LayoutProvider>
	);
};

App.getInitialProps = async ({ req }: { req: any }) => {
	const time = req ? new Date().getHours() : new Date().getHours();
	return { time };
};

export default App;
