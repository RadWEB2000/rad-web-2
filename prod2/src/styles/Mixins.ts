import { css } from "styled-components";

interface iFlex {
	align?: "baseline" | "start" | "flex-start" | "center" | "end" | "flex-end";
	flow?: "column" | "row wrap" | "row nowrap";
	gap?: {
		column: string | number;
		row: string | number;
	};
	justify?: "baseline" | "start" | "flex-start" | "center" | "end" | "flex-end";
}

interface iGrid {
	align?: {
		items: string | number;
		content: string | number;
	};
	area?: string;
	columns?: {
		auto?: string | number;
		gap?: string | number;
		template?: string | number;
	};
	justify?: {
		items: string | number;
		content: string | number;
	};
	rows?: {
		auto?: string | number;
		gap?: string | number;
		template?: string | number;
	};
}

const flex = ({ align, flow, gap, justify }: iFlex) => css`
	display: flex;
	${align && `align-items:${align};`}
	${flow && `flex-flow:${flow};`}
	${justify && `justify-content:${justify};`}
    ${gap && `gap: ${gap.row} ${gap.column};`}
`;

const grid = ({ align, area, columns, justify, rows }: iGrid) => css`
	display: grid;
	${align?.content && `align-content:${align?.content}`}
	${align?.items && `align-content:${align?.items}`}
	${area && `grid-template-area:${area}`}
	${columns?.auto && `grid-auto-columns:${columns?.auto}`}    
	${columns?.gap && `grid-column-gap:${columns?.gap}`}    
	${columns?.template && `grid-template-columns:${columns.template}`}    
    ${justify?.content && `align-content:${justify?.content}`}
    ${justify?.items && `align-content:${justify?.items}`}
	${rows?.auto && `grid-auto-columns:${rows?.auto}`}    
	${rows?.gap && `grid-column-gap:${rows?.gap}`}    
	${rows?.template && `grid-template-columns:${rows?.template}`}
`;

export { flex, grid };
