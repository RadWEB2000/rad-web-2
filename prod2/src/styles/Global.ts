import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

::after,
::before {
	content: "";
	position: absolute;
}

:focus,
:focus-within {
	outline: none;
}

a {
	background: transparent;
	color: inherit;
	cursor: pointer;
	text-decoration: none;
}

button {
	cursor: pointer;
}

body {
	background-color: $black;
	color: $white;
	font-family: $ibm;
	font-size: 1.6rem;
}

html {
	font-size: 52.5%;
}

button,
input,
textarea {
	background: transparent;
	border: none;
	font-family: inherit;
	outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: $righteous;
}

li,
ol,
ul {
	list-style: none;
}
`;
