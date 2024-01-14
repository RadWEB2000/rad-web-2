import { tImage } from 'ts/types';
import Link from 'next/link';
import Image from 'next/image';
import getDate from 'app/lib/functions/getDate';
import css from 'utils/Cards/BlogCard/BlogCard.module.scss';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type tBlogCardBase = {
    title: string;
    uri: string;
};

type tBlogCard = {} & (
    | ({
          theme: 'primary';
      } & tPrimary)
    | {
          theme: 'secondary';
      } & tSecondary
    | {
          theme: 'tertiary';
      } & tTertiary
);

type tPrimary = {
    image: tImage;
    release: string;
    category: {
        label: string;
        uri: string;
    };
} & tBlogCardBase;

type tSecondary = {
    direction:"left"|"right"
} & tBlogCardBase;

type tTertiary = {
    category:{
        label:string;
        uri:string;
    };
    excerpt:string;
    image:tImage;
    release:string;
} & tBlogCardBase;

function Primary(props: tPrimary) {
    const { day, month, year } = getDate(props.release, 'number');
    return (
        <li className={css.primary__wrapper}>
            <Link className={css.primary__box} href={props.uri}>
                <h4
                    className={css.primary__title}
                    dangerouslySetInnerHTML={{ __html: props.title }}
                />
                <figure className={css.primary__image}>
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
                <div className={css.primary__details}>
                    <Link className={css.primary__category} href={props.category.uri}>
                        {props.category.label}
                    </Link>
                    <p className={css.primary__release}>{`${day}-${month()}-${year}`}</p>
                </div>
            </Link>
        </li>
    );
}

function Secondary(props:tSecondary){

    if(props.direction === "left"){
        return(
            <li className={css.secondary__wrapper} >
                <Link className={css.secondary__box} href={props.uri}>
                    <i className={css.secondary__icon} ><FaChevronLeft /></i>
                    <span className={css.secondary__label}  dangerouslySetInnerHTML={{__html:props.title}} />
                </Link>
            </li>
        )
    }else if(props.direction === "right"){
        return(
            <li className={css.secondary__wrapper} >
                <Link className={css.secondary__box}  href={props.uri}>
                    <span className={css.secondary__label}  dangerouslySetInnerHTML={{__html:props.title}} />
                    <i className={css.secondary__icon} ><FaChevronRight /></i>
                </Link>
            </li>
        )
    }
}



function Tertiary(props:tTertiary){
    const {day,month,year} = getDate(props.release,"number");
    return(
        <li className={css.tertiary__wrapper} >
            <Link className={css.tertiary__box}  href={props.uri} >
                <figure className={css.tertiary__image} >
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
                <section className={css.tertiary__content} >
                    <div className={css.tertiary__details} >
                        <Link className={css.tertiary__category}  href={props.category.uri}>
                            {props.category.label}
                        </Link>
                        <p className={css.tertiary__release} >{`${day}-${month()}-${year}`}</p>
                    </div>
                    <h3 className={css.tertiary__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                    <p className={css.tertiary__excerpt}  dangerouslySetInnerHTML={{__html:props.excerpt.substring(0,150) + '...'}} />
                </section>
            </Link>
        </li>
    )
}


export default function BlogCard(props: tBlogCard) {
    if (props.theme === 'primary') {
        return <Primary {...props} />;
    }else if(props.theme === 'secondary'){
        return <Secondary {...props} />
    }else if(props.theme === "tertiary"){
        return <Tertiary {...props} />
    }
}
