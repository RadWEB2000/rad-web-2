import styled from "styled-components";
export const BlogCardHomeStyles = styled.li`
	& > .content {
		align-items: start;
		display: flex;
		flex-flow: column;
		justify-content: center;
		& > .title {
			cursor: pointer;
			& > a {
				color: ${({ theme }) => theme.colors.color};
				transition: 0.15s linear color;
				&:focus,
				&:hover {
					color: ${({ theme }) => theme.colors.primary};
				}
			}
		}
	}
	& > .image {
		overflow: hidden;
		&,
		& > figure {
			position: relative;
		}
		& > figure {
			height: 100%;
			position: relative;
			transition: 0.17s linear scale;
			width: 100%;
		}
	}
	&:focus,
	&:hover {
		& > .image {
			& > figure {
				scale: 1.1;
			}
		}
	}
	&[data-main="true"] {
		display: grid;
		grid-template-columns: 80rem calc(100% - 80rem);
		height: 60rem;
		& > .content {
			padding: 0.4rem;
			row-gap: 2rem;
			& > .title {
				font-size: 3.4rem;
			}
		}
		& > .image {
			background: pink;
		}
		@media only screen {
			@media (max-width: 1400px) {
				height: 50rem;
				grid-template-columns: 67rem calc(100% - 67rem);
			}
			@media (max-width: 1200px) {
				height: 45rem;
				grid-template-columns: 55rem calc(100% - 55rem);
			}
			@media (max-width: 1000px) {
				height: 45rem;
				grid-template-columns: 46rem calc(100% - 46rem);
			}
			@media (max-width: 950px) {
				grid-template-columns: 44rem calc(100% - 44rem);
				& > .content {
					row-gap: 1rem;
					& > .title {
						font-size: 3rem;
					}
				}
			}
			@media (max-width: 840px) {
				grid-template-columns: 37rem calc(100% - 37rem);
				& > .content {
					row-gap: 1rem;
					& > .title {
						font-size: 2.6rem;
					}
				}
			}
			@media (max-width: 740px) {
				grid-template-columns: 34.5rem calc(100% - 34.5rem);
				& > .content {
					row-gap: 1rem;
					& > .title {
						font-size: 2.6rem;
					}
				}
			}
			@media (max-width: 670px) {
				align-items: flex-start;
				display: flex;
				flex-flow: column;
				& > .content {
					justify-content: flex-start;
					min-height: 15rem;
					row-gap: 0.2rem;
					& > .date {
						font-size: 1.5rem;
					}
					& > .title {
						font-size: 2rem;
					}
					& > .excerpt {
						font-size: 1.4rem;
						line-height: 1.2;
					}
				}
				& > .image {
					aspect-ratio: 4/3.3;
					background-color: orange;
					width: 100%;
				}
			}
		}
	}
	&[data-main="false"] {
		align-items: flex-start;
		display: flex;
		flex-flow: column;
		flex-shrink: 0;
		width: 100%;
		& > .content {
			justify-content: flex-start;
			padding: 0.25rem 0.25rem 2rem 0.25rem;
			row-gap: 0.2rem;
			& > .date {
				font-size: 1.5rem;
			}
			& > .title {
				font-size: 2rem;
			}
			& > .excerpt {
				font-size: 1.4rem;
				line-height: 1.2;
			}
		}
		& > .image {
			aspect-ratio: 4/3.3;
			background-color: orange;
			width: 100%;
		}
		@media only screen {
			@media (max-width: 950px) {
				& > .image {
					aspect-ratio: 3/1.5;
				}
			}
			@media (max-width: 740px) {
				& > .image {
					aspect-ratio: 3/2.5;
				}
			}
		}
	}
	@media only screen {
		@media (max-width: 670px) {
			align-items: flex-start;
			display: flex;
			flex-flow: column;
			& > .content {
				justify-content: flex-start;
				min-height: 15rem;
				row-gap: 0.2rem;
				& > .date {
					font-size: 1.5rem;
				}
				& > .title {
					font-size: 2rem;
				}
				& > .excerpt {
					font-size: 1.4rem;
					line-height: 1.2;
				}
			}
			& > .image {
				aspect-ratio: 5/3;
				background-color: orange;
				width: 100%;
			}
		}
	}
`;
