"use client";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";
import {motion} from "framer-motion";

export default function PrimaryButton({mode,rel,target,title,url}:tPrimaryButton){
    return(
        <Link 
            href={url} 
            legacyBehavior
            rel={rel} 
            target={target}
        >
            <motion.a
                className={css.wrapper}
                data-mode={mode} 
                whileTap={{
                    scale:.92
                }}
            >
                <span className={css.border__left} />
                <span className={css.border__right} />
                <span className={css.label} >{title}</span>
                <i className={css.icon} ><BsArrowRight /></i>
            </motion.a>
        </Link>
    )
}