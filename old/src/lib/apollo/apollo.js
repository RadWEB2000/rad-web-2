import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://rad-web-cms.pl/api",
	cache: new InMemoryCache(),
});

export default client;
