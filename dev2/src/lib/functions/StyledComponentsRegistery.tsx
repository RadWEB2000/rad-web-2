"use client";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
	ServerStyleSheet,
	StyleSheetManager,
	ThemeProvider,
} from "styled-components";
import { theme } from "css/theme";
import { Global } from "app/styles/Global";

type tStyledComponentsRegistry = {
	children: React.ReactNode;
};

export default function StyledComponentsRegistry({
	children,
}: tStyledComponentsRegistry) {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	});
	if (typeof window !== "undefined") return <>{children}</>;
	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<ThemeProvider theme={theme}>
				<Global />
				{children}
			</ThemeProvider>
		</StyleSheetManager>
	);
}
