import styled from "styled-components";
export const BlogCardPageStyles = styled.li`
	background: white;
	cursor: pointer;
	width: 39rem;
	position: relative;
	&:focus,
	&:hover {
		& > .image {
			& > figure {
				scale: 1.2;
			}
		}
	}
}
.image {
	aspect-ratio: 4/3;
	position: relative;
	overflow: hidden;
	width: 100%;
	& > figure {
		height: 100%;
		position: relative;
		transition: 0.2s ease-in-out scale;
		width: 100%;
	}
}
.content {
	padding: 1rem 0.5rem;
	min-height: 20rem;
	&,
	& > section {
		align-items: flex-start;
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
	}
	& > section {
        row-gap:.85rem;
		& > * {
			width: 100%;
		}
		& > .date {
			font-size: 1.9rem;
			font-weight: 600;
		}
		& > h3 {
			& > a {
                color:${({ theme }) => theme.colors.color};
				font-size: 2.5rem;
				font-weight: 600;
				text-align: left;
                transition:.15s linear color;
                &:focus,
                &:hover {
                    color:${({ theme }) => theme.colors.primary};
                }
			}
		}
		& > .excerpt {
            font-size:1.5rem;
            line-height:1.5;
            text-align:start;
		}
	}
`;
