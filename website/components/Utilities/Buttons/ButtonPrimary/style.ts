import { motion } from "framer-motion";
import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Wrapper = styled(motion.button)`
	& > a {
		${flex({ align: "center", justify: "flex-start" })};
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 1.85rem;
		color: ${({ theme }) => theme.colors.background};
		flex-flow: row nowrap;
		min-height: 4.15rem;
		padding: 0 0.85rem;
		min-width: 9rem;
		transition: 0.15s linear background-color, 0.15s linear color;
		user-select: none;
		&:hover {
			background-color: ${({ theme }) => theme.colors.secondary};
		}
		& > p {
			font-weight: 400;
			font-size: 1.87rem;
			font-weight: 500;
			letter-spacing: 0.15rem;
			padding: 0 1.5rem;
			user-select: none;
			width: 100%;
		}
		& > span {
			${flex({ align: "center", justify: "center" })};
			aspect-ratio: 1/1;
			font-size: 2rem;
			height: 100%;
			user-select: none;
		}
	}
	& > p {
		${flex({ align: "center", justify: "flex-start" })};
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 1rem;
		color: ${({ theme }) => theme.colors.background};
		flex-flow: row nowrap;
		min-height: 3.7rem;
		font-weight: 300;
		font-size: 1.67rem;
		padding: 0 1.5rem;
		width: 100%;
		padding: 0 1.45rem;
		transition: 0.15s linear background-color, 0.15s linear color;
		&:hover {
			background-color: ${({ theme }) => theme.colors.secondary};
		}
	}
`;
