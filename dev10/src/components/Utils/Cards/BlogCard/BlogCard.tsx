import { tImage } from 'ts/types';
import Link from 'next/link';
import Image from 'next/image';
import getDate from 'app/lib/functions/getDate';
import css from 'utils/Cards/BlogCard/BlogCard.module.scss';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { LinkButton } from '../../Buttons';

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
    | {
        theme:"quatenary"
    } & tQuatenary
    
);

type tPrimary = {
     title:string;
    uri:string;
    image: {
        altText:string;
        sourceUrl:string;
        title:string;
    }
    date:string;
    categories: {
        name:string;
        uri:string;
    }
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
    const { day, month, year } = getDate(props.date, 'number');
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
                    <Link className={css.primary__category} href={props.categories.uri}>
                        {props.categories.name}
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
                <Link className={css.secondary__box} data-direction={props.direction}  href={props.uri}>
                    <i className={css.secondary__icon} ><FaChevronLeft /></i>
                    <span className={css.secondary__label}  dangerouslySetInnerHTML={{__html:props.title}} />
                </Link>
            </li>
        )
    }else if(props.direction === "right"){
        return(
            <li className={css.secondary__wrapper} >
                <Link className={css.secondary__box} data-direction={props.direction}  href={props.uri}>
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
                    <h3 className={css.tertiary__title}  dangerouslySetInnerHTML={{__html:props.title}} />
                    <p className={css.tertiary__excerpt}  dangerouslySetInnerHTML={{__html:props.excerpt.substring(0,85) + '...'}} />
                    <div className={css.tertiary__details} >
                        <Link className={css.tertiary__category}  href={props.category.uri}>
                            {props.category.label}
                        </Link>
                        <p className={css.tertiary__release} >{`${day}-${month()}-${year}`}</p>
                    </div>
                </section>
            </Link>
        </li>
    )
}

type tQuatenary = {
    button: {
        label:string;
        uri:string;
    };
    categories: {
        label:string;
        uri:string;
    }[];
    image:tImage;
    title:string;
    excerpt:string;
    date:string;
}

function Quatenary(props:tQuatenary){
    const {day,month,year} = getDate(props.date, "short");
    return(
        <li className={css.quatenary__wrapper} >
            <figure className={css.quatenary__image} >
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
            <section className={css.quatenary__details} >
                <ul className={css.quatenary__categories} >
                    {props.categories.map((item,index) => {
                        return (
                            <Link
                                className={css.quatenary__category} 
                                dangerouslySetInnerHTML={{__html:item.label}}
                                href={item.uri}
                                key={index}
                            />
                        )
                    })}
                </ul>
                <p className={css.quatenary__release}>{`${day} ${month()} ${year}`}</p>
                <h3 
                    className={css.quatenary__title} 
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.quatenary__excerpt} 
                    dangerouslySetInnerHTML={{__html:props.excerpt.substring(0,132) + "..."}}
                />
                <LinkButton
                    filled
                    iconify
                    label={props.button.label}
                    mode='light'
                    rounded
                    theme='secondary'
                    uri={props.button.uri}
                />
            </section>
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
    } else if(props.theme === "quatenary"){
        return <Quatenary {...props} />
    }
}
