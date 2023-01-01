import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Page = styled.header`
	& > section {
		${flex({ align: "flex-start", justify: "center" })}
		flex-flow:column;
		margin: 2rem auto 6rem;
		max-width: 95%;
		min-height: 60rem;
		row-gap: 2rem;
		text-align: start;
		width: 120rem;
		& > * {
			word-wrap: break-word;
		}
		& > h1 {
			font-size: 10rem;
		}
		& > p {
			font-size: 2rem;
			line-height: 2.1;
		}
	}
	@media only screen {
		@media (max-width: 1450px) {
			& > section {
				& > h1 {
					font-size: 8rem;
				}
			}
		}
		@media (max-width: 1000px) {
			& > section {
				min-height: 40rem;
				& > h1 {
					font-size: 5rem;
				}
				& > p {
					font-size: 1.8rem;
					line-height: 1.9;
				}
			}
		}
		@media (max-width: 500px) {
			& > section {
				& > h1 {
					font-size: 4.15rem;
				}
				& > p {
					font-size: 1.65rem;
					line-height: 1.7;
				}
			}
		}
	}
`;
