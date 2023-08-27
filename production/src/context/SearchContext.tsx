"use client";
import { createContext, useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

type tSearchContext = {
	search: string;
	handle: Dispatch<SetStateAction<string>>;
};

type tSearchProvider = {
	children: JSX.Element | JSX.Element[];
};

export const SearchContext = createContext<tSearchContext>({
	search: "",
	handle: () => {},
});

export default function SearchProvider({ children }: tSearchProvider) {
	const [currentSearchValue, updateSearchValue] = useState("");
	return (
		<SearchContext.Provider
			value={{
				handle: updateSearchValue,
				search: currentSearchValue,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
}
