import { IntAuthor } from "../Author/interface";
import { IntRecommendedArticle } from "../RecommendedArticle/interface";
export interface IntDetails {
	article: IntRecommendedArticle;
	author: IntAuthor;
}
