import getDate from "functions/getDate";
import Image from "next/image";
import Link from "next/link";
import { tPrimaryBlogCard } from "u_cards/BlogCard/PrimaryBlogCard/PrimaryBlogCard.models";
import css from "u_cards/BlogCard/PrimaryBlogCard/PrimaryBlogCard.module.scss";

export default function PrimaryBlogCard({categories,date,excerpt,image,title,uri}:tPrimaryBlogCard){
    const {day,month,year} = getDate(date,"short")
    return(
        <Link className={css.wrapper} href={uri}>
            <header className={css.box} >
                <h3 className={css.title} >{title}</h3>
                <p className={css.release} >{`${day} ${month()} ${year}`}</p>
            </header>
          
            <div className={css.details} >
                <p className={css.excerpt}  dangerouslySetInnerHTML={{__html:excerpt.length < 110 ? excerpt : excerpt.substring(0,107) + "..."}} />
                {
                    categories &&
                    <ul className={css.categories} >
                        {categories.map((item,index) => {
                            return (
                                <Link className={css.category}  href={item.uri} key={index} rel="index follow">
                                    {item.name}
                                </Link>
                            )
                        })}
                    </ul>
                }
            </div>
              <figure className={css.image} >
                <Image
                    alt={image.altText}
                    fill
                    loading="lazy"
                    src={image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={image.title}
                    quality={60}
                />
            </figure>
        </Link>
    )
}