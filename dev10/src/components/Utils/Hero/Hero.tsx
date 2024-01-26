import getDate from 'functions/getDate';
import Image from 'next/image';
import Link from 'next/link';
import { tImage } from 'ts/types';
import { LinkButton } from 'utils/Buttons';
import css from 'utils/Hero/Hero.module.scss';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';
import Search from '../Search/Search';

type tHero = {} & (
    | ({
          theme: 'home';
      } & tHome)
    | ({
          theme: 'person';
      } & tPerson)
    | ({
          theme: 'article';
      } & tArticle)
    | ({
          theme: 'glossary';
      } & tGlossary)
    | ({
          theme: 'project';
      } & tProject)
    | (
        {
            theme:"about_us"
        } & tAboutUs
    ) | (
        {
            theme:"blog"
        } & tBlog
    )
);

type tArticle = {
    breadcrumbs: {
        label: string;
        uri: string;
    }[];
    title: string;
    release: string;
    excerpt: string;
    matter: 'seo' | 'technology' | 'ads' | 'socials' | 'www';
    category: {
        label: string;
        uri: string;
    };
};

type tAboutUs = {
    title:string;
    content:string;
    image:tImage;
}

type tBlog = {
    content:string;
    title:string;
    search: {
        label:string;
        placeholder:string;
    }
}

type tGlossary = {
    content: string;
    title: string;
};

type tHome = {
    buttons?: {
        label: string;
        uri: string;
    }[];
    movie: string;
    slogan: string;
    title: string;
};

type tPerson = {
    content: string;
    image: tImage;
    socials: {
        icon: React.ReactNode;
        label: string;
        name: string;
        uri: string;
    }[];
    title: string;
    work: string;
};

type tProject = {
    button: string;
    image: tImage;
    release: string;
    url: string;
    title: string;
};

function AboutUs(props:tAboutUs){
    return(
        <div className={css.about_us__wrapper}>
            <figure className={css.about_us__image}>
                 <Image
                    alt={props.image.altText}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={props.image.title}
                />
            </figure>
            <header className={css.about_us__box}>
                <h1 className={css.about_us__title} dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.about_us__content} dangerouslySetInnerHTML={{__html:props.content}} />
            </header>
        </div>
    )
}

function Article(props: tArticle) {
    const { day, month, year } = getDate(props.release, 'short');
    return (
        <header className={css.article__wrapper} data-category={props.matter}>
            <ul className={css.article__breadcrumbs}>
                {props.breadcrumbs.map((item, index) => {
                    if (index == props.breadcrumbs.length - 1) {
                        return (
                            <Link className={css.article__breadcrumbs__item} href={item.uri}>
                                {item.label}
                            </Link>
                        );
                    } else {
                        return (
                            <>
                                <Link className={css.article__breadcrumbs__item} href={item.uri}>
                                    {item.label}
                                </Link>
                                <span className={css.article__breadcrumbs__divider}>/</span>
                            </>
                        );
                    }
                })}
            </ul>
            <h1 className={css.article__title} dangerouslySetInnerHTML={{ __html: props.title }} />
            <Link className={css.article__category} href={props.category.uri}>
                {props.category.label}
            </Link>
            <p
                className={css.article__excerpt}
                dangerouslySetInnerHTML={{ __html: props.excerpt }}
            />
            <div className={css.article__details}>
                <p className={css.article__reading}>
                    <b>
                        <IoTimeOutline />
                    </b>
                    <span>17 min</span>
                </p>
                <p className={css.article__release}>
                    <b>
                        <MdOutlineDateRange />
                    </b>
                    <span> {`${day} ${month()} ${year}`}</span>
                </p>
            </div>
        </header>
    );
}



function Blog(props:tBlog){
    return(
        <header className={css.blog__wrapper}>
            <h1
                className={css.blog__title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            <p
                className={css.blog__content}
                dangerouslySetInnerHTML={{__html:props.content}}
            />
            <div className={css.blog__search}>
                <Search {...props.search} />
            </div>
        </header>
    )
}

function Glossary(props: tGlossary) {
    return (
        <header className={css.glossary__wrapper}>
            <h1 className={css.glossary__title} dangerouslySetInnerHTML={{ __html: props.title }} />
            <p
                className={css.glossary__content}
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </header>
    );
}

function Home(props: tHome) {
    return (
        <div className={css.home__wrapper}>
            <video autoPlay className={css.home__video} loop muted>
                <source src={props.movie} type="video/webm" />
            </video>
            <header className={css.home__content}>
                <h1 className={css.home__title} dangerouslySetInnerHTML={{ __html: props.title }} />
                <h2
                    className={css.home__slogan}
                    dangerouslySetInnerHTML={{ __html: props.slogan }}
                />
                {props.buttons && (
                    <ul className={css.home__buttons}>
                        {props.buttons.map((item, index) => {
                            return <LinkButton {...item} key={index} theme="tertiary" />;
                        })}
                    </ul>
                )}
            </header>
        </div>
    );
}

function Person(props: tPerson) {
    return (
        <div className={css.person__wrapper}>
            <header className={css.person__title__wrapper}>
                <h1 className={css.person__title}>{props.title}</h1>
            </header>
            <section className={css.person__box}>
                <h2
                    className={css.person__box__work}
                    dangerouslySetInnerHTML={{ __html: props.work }}
                />
                <p
                    className={css.person__box__content}
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </section>
            <figure className={css.person__image}>
                <Image
                    alt={props.image.altText}
                    fill
                    loading="eager"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={props.image.title}
                />
            </figure>
        </div>
    );
}

function Project(props: tProject) {
    const { month, year } = getDate(props.release, 'long');
    return (
        <header className={css.project__wrapper}>
            <figure className={css.project__image}>
                <Image
                    alt={props.image.altText}
                    fill
                    loading="eager"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={props.image.title}
                />
            </figure>
            <section className={css.project__content}>
                <p className={css.project__release}>{`${month()} ${year}`}</p>
                <h1
                    className={css.project__title}
                    dangerouslySetInnerHTML={{ __html: props.title }}
                />
                <LinkButton
                    iconify
                    rounded
                    filled
                    label={props.button}
                    uri={props.url}
                    theme="secondary"
                />
            </section>
        </header>
    );
}

export default function Hero(props: tHero) {
    if (props.theme === 'home') {
        return <Home {...props} />;
    } else if (props.theme === 'person') {
        return <Person {...props} />;
    } else if (props.theme === 'article') {
        return <Article {...props} />;
    } else if (props.theme === 'glossary') {
        return <Glossary {...props} />;
    } else if (props.theme === 'project') {
        return <Project {...props} />;
    }else if (props.theme === "about_us"){
        return <AboutUs {...props} />
    }else if(props.theme === "blog"){
        return <Blog {...props} />
    }
}
