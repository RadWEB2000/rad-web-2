import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Wrapper = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 50rem calc(100% - 50rem);
	min-height: 60rem;
	margin: 0 auto;
	max-width: 95%;
	width: 120rem;
	& > figure {
		border-radius: 1.7rem;
		overflow: hidden;
		position: relative;
	}
	& > section {
		align-items: start;
		display: flex;
		flex-flow: column;
		justify-content: center;
		padding: 0.45rem;
		row-gap: 2rem;
		& > h2 {
			font-size: 4.5rem;
		}
		& > p {
			font-size: 1.8rem;
			line-height: 1.7;
		}
	}
	@media only screen {
		@media (max-width: 1040px) {
			grid-template-columns: 40rem calc(100% - 40rem);
			min-height: 50rem;
			& > section {
				align-items: start;
				display: flex;
				flex-flow: column;
				justify-content: center;
				padding: 0.45rem;
				row-gap: 2rem;
				& > h2 {
					font-size: 3.75rem;
				}
				& > p {
					font-size: 1.6rem;
					line-height: 1.7;
				}
			}
		}
		@media (max-width: 850px) {
			grid-template-columns: 30rem calc(100% - 30rem);
			min-height: 50rem;
			width: 65rem;
			& > section {
				align-items: start;
				display: flex;
				flex-flow: column;
				justify-content: center;
				padding: 0.45rem;
				row-gap: 1rem;
				& > h2 {
					font-size: 3rem;
				}
				& > p {
					font-size: 1.45rem;
					line-height: 1.6;
				}
			}
		}
		@media (max-width: 740px) {
			display: flex;
			flex-flow: column;
			min-height: 50rem;
			width: 35rem;
			& > figure {
				aspect-ratio: 4/3;
			}
			& > section {
				align-items: start;
				display: flex;
				flex-flow: column;
				justify-content: center;
				padding: 0.45rem;
				row-gap: 1rem;
				& > h2 {
					font-size: 3rem;
				}
				& > p {
					font-size: 1.45rem;
					line-height: 1.6;
				}
			}
		}
	}
`;
