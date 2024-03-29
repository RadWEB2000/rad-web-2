import Image from "next/image";
import Link from "next/link";
import css from "cards/BlogCards/PrimaryBlogCard/PrimaryBlogCard.module.scss";

export default function PrimaryBlogCard(){
    return (
        <Link className={css.wrapper} href="#">
            <picture className={css.image} >
                <Image 
                    alt="alt" 
                    fill
                    src="https://images.unsplash.com/photo-1610483155766-e50e9774ad7f?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title=""
                    quality={44}
                />
            </picture>
            <div className={css.container} >
                <ul className={css.categories} >
                    <Link className={css.category}  href="#">
                        Programowanie    
                    </Link>
                    <Link className={css.category}  href="#">
                        SEO
                    </Link>
                </ul>
                <header className={css.details} >
                    <h3 className={css.title} >Jak nauczyć się React JS – podstawowe pojęcia</h3>
                    <p className={css.release} >12 Mar 2024</p>
                </header>
                <Link className={css.author}  href="#">
                    <picture className={css.author__image} >
                        <Image 
                            alt="alt" 
                            fill
                            src="http://multi.rad-web-cms.pl/wp-content/uploads/2024/03/radoslaw-adamczyk-programista-stron-internetowych-i-aplikacji-webowych-pozycjonowanie-seo-radweb-scaled.webp?t=1711703656&t=1711703656" 
                            style={{
                                objectFit:"cover",
                                objectPosition:"top"
                            }}
                            title=""
                            quality={44}
                        />
                    </picture>
                    <p className={css.author__name} >Radosław Adamczyk</p>
                </Link>
            </div>
        </Link>
    )
}