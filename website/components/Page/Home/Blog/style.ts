import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	row-gap: 5rem;
	& > .cards {
		max-width: 99%;
		position: relative;
		width: 140rem;
		& > .secondary {
			align-items: start;
			column-gap: 0.25rem;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-items: center;
			padding: 0.25rem;
			position: relative;
			/* overflow: hidden; */
			width: 100%;
			@media only screen {
				@media (max-width: 950px) {
					grid-template-columns: repeat(2, 1fr);
				}
				@media (max-width: 530px) {
					grid-template-columns: repeat(1, 1fr);
				}
			}
		}
	}
`;
