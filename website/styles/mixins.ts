import { css } from "styled-components";
export const customSize = ({height,width}:{height:number,width:number}) => css `
  height: ${height};
  width: ${width};
`;
export const flex = ({align,justify}:{align:string,justify:string}) => css `
  align-items: ${align};
  display: flex;
  justify-content: ${justify};
`;
export const fullSize = () => css `
  height: 100%;
  width: 100%;
`;
