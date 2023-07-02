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

:focus-within {
	border:none;
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

header{
	background: green;
}

body {
	color:white;
	background: red;
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



li,
ol,
ul {
	list-style: none;
}
`;
