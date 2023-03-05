import { IntSeo } from "../Seo/interface";
import { ReactElement } from "react";
export interface IntLayout extends IntSeo {
	children: ReactElement | ReactElement[];
	hero: ReactElement;
	schema: any;
}
