import styled from "styled-components";
import { flex, fullSize } from "../../../../styles/mixins";
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	& > section {
		${flex({ align: "flex-start", justify: "center" })};
		flex-flow: column;
		padding: 0.35rem 0.7rem;
		row-gap: 3rem;
		& > h2 {
			color: ${({ theme }) => theme.colors.color};
			font-size: 6rem;
		}
		& > p {
			color: ${({ theme }) => theme.colors.color};
			font-size: 1.7rem;
			line-height: 1.9;
		}
	}
	& > div {
		${flex({ align: "center", justify: "center" })};
	}
	@media only screen {
		@media (max-width: 980px) {
			grid-template-columns: 1fr;
			row-gap: 2rem;
		}
		@media (max-width: 500px) {
			& > section {
				& > h2 {
					font-size: 5rem;
				}
				& > p {
					font-size: 1.7rem;
					line-height: 1.5;
				}
			}
		}
	}
`;
