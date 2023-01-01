import styled from "styled-components";
import { flex, fullSize } from "../../../../styles/mixins";
export const Wrapper = styled.div`
	${flex({ align: "flex-start", justify: "center" })};
	flex-flow: column;
	margin: 3rem auto;
	row-gap: 1rem;
	& > h2 {
		color: ${({ theme }) => theme.colors.color};
		font-size: 6rem;
		line-height: 2;
	}
	& > * {
		width: 100%;
	}
	@media only screen {
		@media (max-width: 1150px) {
			& > h2 {
				font-size: 5.5rem;
			}
		}
		@media (max-width: 900px) {
			& > h2 {
				font-size: 4.85rem;
			}
		}
		@media (max-width: 620px) {
			row-gap: 3rem;
			& > h2 {
				font-size: 3.55rem;
				line-height: 1.2;
			}
		}
	}
`;
