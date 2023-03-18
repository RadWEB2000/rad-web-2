import { UserProvider } from "@default/src/context/UserContext";
import type { AppProps } from "next/app";
import "../src/styles/Global.scss";
import Head from "next/head";
import EditorJS from "@editorjs/editorjs";

import "@editorjs/editorjs/dist/editor.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<UserProvider>
			<Head>
				<link rel="stylesheet" href="@editorjs/editorjs/dist/editor.css" />
			</Head>
			<Component {...pageProps} />
		</UserProvider>
	);
};

export default App;
