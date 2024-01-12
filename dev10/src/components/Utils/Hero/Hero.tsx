import getDate from "functions/getDate";
import Image from "next/image";
import Link from "next/link";
import { tImage } from "ts/types";
import { LinkButton } from "utils/Buttons";
import css from "utils/Hero/Hero.module.scss";

type tHero = {
} & (
    {
        theme:"home"
    } & tHome |
    {
        theme:"person"
    } & tPerson | 
    {
        theme:"blog"
    } & tArticle | 
    {
        theme:"other"
    } 
)

type tArticle = {
    breadcrumbs:{
        label:string;
        uri:string;
    }[];
    title:string;
    release:string;
    image:tImage;
    matter:"seo"|"technology"|"ads"|"socials";
    category:{
        label:string;
        uri:string;
    }
}


type tHome = {
    buttons?:{
        label:string;
        uri:string;
    }[];
    movie:string;
    slogan:string;
    title:string;
}

type tPerson = {
    content:string;
    image:tImage;
    socials:{
        icon:React.ReactNode;
        label:string;
        name:string;
        uri:string;
    }[];
    title:string;
    work:string;
}

function Article(props:tArticle){
    const {day,month,year} = getDate(props.release, "short");
    return(
        <header className={css.article__wrapper} data-category={props.matter}>
            <ul className={css.article__breadcrumbs} >
                {props.breadcrumbs.map((item,index) => {
                    if(index != props.breadcrumbs.length -1){
                        return(
                            <Link
                                className={css.article__breadcrumbs__item} 
                                href={item.uri}
                            >
                                {item.label}
                            </Link>
                        )
                    }else{
                        return(
                            <>
                                <Link
                                    className={css.article__breadcrumbs__item} 
                                    href={item.uri}
                                >
                                    {item.label}
                                </Link>
                                <span className={css.article__breadcrumbs__divider} >/</span>
                            </>
                        )
                    }
                })}
            </ul>
            <section className={css.article__content} >
                <p className={css.article__release} >{`${day} ${month} ${year}`}</p>
                <h1 className={css.article__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                <Link href={props.category.uri} >{props.category.label}</Link>
            </section>
            <div className={css.article__image__wrapper} >
                <figure className={css.article__image} >
                    <Image
                        alt={props.image.altText}
                        fill
                        loading="eager"
                        src={props.image.sourceUrl}
                        style={{
                            objectFit:"cover",
                            objectPosition:"center"
                        }}
                        title={props.image.title}
                    />
                </figure>
            </div>
        </header>
    )
}


function Home(props:tHome){
    return(
        <div className={css.home__wrapper}>
                <video
                    autoPlay
                    className={css.home__video}
                    loop
                    muted
                >
                    <source src={props.movie} type="video/webm" />
                </video>
            <header className={css.home__content}>
                <h1 className={css.home__title} dangerouslySetInnerHTML={{__html:props.title}} />
                <h2 className={css.home__slogan} dangerouslySetInnerHTML={{__html:props.slogan}} />
                {
                    props.buttons &&
                    <ul className={css.home__buttons}>
                        {props.buttons.map((item,index) => {
                            return(
                                <LinkButton
                                    {...item}
                                    key={index}
                                    theme="tertiary"
                                />
                            )
                        })}
                    </ul>
                }
            </header>
        </div>
    )
}


function Person(props:tPerson){
    return(
        <div className={css.person__wrapper}>
            <header className={css.person__title__wrapper}>
                <h1 className={css.person__title}>{props.title}</h1>
            </header>
            <section className={css.person__box}>
                <h2 className={css.person__box__work} dangerouslySetInnerHTML={{__html:props.work}} />
                <p className={css.person__box__content} dangerouslySetInnerHTML={{__html:props.content}} />
            </section>
            <figure className={css.person__image}>
                <Image
                    alt={props.image.altText}
                    fill
                    loading="eager"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.image.title}
                />
            </figure>
        </div>
    )
}




export default function Hero(props:tHero){
    if(props.theme === "home") {
        return <Home {...props} />;
    }else if(props.theme === "person"){
        return <Person {...props} />;
    }else if(props.theme === "blog"){
        return <Article {...props} />
    }
}