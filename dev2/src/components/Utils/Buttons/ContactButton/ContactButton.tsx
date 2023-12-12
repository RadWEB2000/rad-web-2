"use client"
import Link from 'next/link';
import styles from "utils/Buttons/ContactButton/ContactButton.module.scss"
import {motion} from "framer-motion";
type tContactButton = {
    label:string;
    uri:string;
}

export default function ContactButton(props:tContactButton){
    return(
        <Link href={props.uri} legacyBehavior>
            <motion.a 
                className={styles.wrapper}
                whileHover={{
                    filter:"brightness(115%)"
                }}
                whileTap={{
                    scale:.95
                }}
            >
            {props.label}
            </motion.a>
        </Link>
    )
}