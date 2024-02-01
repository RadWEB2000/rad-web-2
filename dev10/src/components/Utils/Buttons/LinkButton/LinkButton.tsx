import { FaChevronLeft, FaChevronRight, FaHandPointRight } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';
import { RiArrowRightUpLine } from 'react-icons/ri';
import css from 'utils/Buttons/LinkButton/LinkButton.module.scss';
import Link from 'next/link';
import { tButton } from 'ts/types';

type tLinkButtonBase = {
    mode?:"dark"|"light";
} & tButton;

type tLinkButton = {} & (
    | ({
          theme: 'secondary';
      } & tSecondary)
    | {
          theme: 'primary';
      }
    | {
          theme: 'tertiary';
      } | 
      {
        theme:"quatenary"
      } & tQuatenary
) &
    tLinkButtonBase;

type tPrimary = tLinkButtonBase;

type tSecondary = {
    filled?: boolean;
    iconify?: boolean;
    rounded?: boolean;
} & tLinkButtonBase;

type tTertiary = tLinkButtonBase;

function Primary(props: tPrimary) {
    return (
        <div className={css.primary__wrapper}>
            <Link className={css.primary__box} href={"#"}>
                <i className={css.primary__icon}>
                    <FaChevronLeft />
                </i>
                <span className={css.primary__label}>{props.label}</span>
                <i className={css.primary__icon}>
                    <FaChevronRight />
                </i>
            </Link>
        </div>
    );
}

function Secondary(props: tSecondary) {
    console.log("secondary button", props)
    return (
        <div className={css.secondary__wrapper}>
            <Link
                className={css.secondary__box}
                data-filled={props.filled}
                data-rounded={props.rounded}
                data-mode={props.mode}
                href={"#"}
            >
                <span className={css.secondary__label}>{props.label}</span>
                {props.iconify && (
                    <i className={css.secondary__icon}>
                        <MdArrowRightAlt />
                    </i>
                )}
            </Link>
        </div>
    );
}
function Tertiary(props: tTertiary) {
    return (
        <Link className={css.tertiary__box} href={props.link}>
            <span className={css.tertiary__label}>{props.label}</span>
            <i className={css.tertiary__icon}>
                <RiArrowRightUpLine />
            </i>
        </Link>
    );
}

type tQuatenary = {
    label:string;
    link:string;
}

function Quatenary(props:tQuatenary){
    return (
        <Link
            className={css.quatenary__wrapper}
            href={props.link}
        >
            <span className={css.quatenary__label}>{props.label}</span>
            <i className={css.quatenary__icon}><FaHandPointRight/></i>
        </Link>
    )
}

export default function LinkButton(props: tLinkButton) {
    if (props.theme === 'primary') {
        return <Primary {...props} />;
    } else if (props.theme === 'secondary') {
        return <Secondary {...props} />;
    } else if (props.theme === 'tertiary') {
        return <Tertiary {...props} />;
    } else if (props.theme === "quatenary"){
        return <Quatenary {...props} />
    }
}
