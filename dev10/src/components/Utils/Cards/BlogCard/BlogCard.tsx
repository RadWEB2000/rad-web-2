import { tImage } from 'ts/types';
import Link from 'next/link';
import Image from 'next/image';
import getDate from 'app/lib/functions/getDate';
import css from 'utils/Cards/BlogCard/BlogCard.module.scss';

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
      }
    | {
          theme: 'tertiary';
      }
);

type tPrimary = {
    image: tImage;
    release: string;
    category: {
        label: string;
        uri: string;
    };
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

export default function BlogCard(props: tBlogCard) {
    if (props.theme === 'primary') {
        return <Primary {...props} />;
    }
}
