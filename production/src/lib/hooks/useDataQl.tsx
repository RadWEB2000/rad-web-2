import { request } from "graphql-request";
import { useEffect, useState } from "react";

type tUseDateQl = {
	query: string;
	variables?: { [key: string]: any };
};

export default function useDataQl({ query, variables }: tUseDateQl) {
	const [data, setData] = useState<null | any>(null);
	useEffect(() => {
		async function fetchData() {
			const endpoint = "https://rad-web-cms.pl/graphql";
			const result = await request(endpoint, query, variables);
			setData(result);
		}
		fetchData();
	}, []);
	return data;
}
