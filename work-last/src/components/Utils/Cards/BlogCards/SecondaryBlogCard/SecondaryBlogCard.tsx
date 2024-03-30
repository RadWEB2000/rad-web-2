import Link from "next/link";
import css from "cards/BlogCards/SecondaryBlogCard/SecondaryBlogCard.module.scss";

export default function SecondaryBlogCard(){
    return (
        <Link aria-label="Jak nauczyć się React JS – podstawowe pojęcia" className={css.wrapper} href="#" title="Jak nauczyć się React JS – podstawowe pojęcia">
            <ul className={css.categories} >
                <Link className={css.category}  href="#">
                    Programowanie    
                </Link>
                <Link className={css.category}  href="#">
                    SEO
                </Link>
            </ul>
            <h3 className={css.title} >Jak nauczyć się React JS – podstawowe pojęcia</h3>
            <p className={css.release} >12 Mar 2024</p>
            <p className={css.excerpt}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem molestias cumque tempore sequi numquam consequuntur labore, velit perferendis?</p>
        </Link>
    )
}