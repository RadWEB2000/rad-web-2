"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';
import styles from 'utils/Buttons/HeroButton/HeroButton.module.scss';

export type tHeroButton = {
  label: string;
  uri: string;
};

export default function HeroButton(props: tHeroButton) {
  return (
      <Link legacyBehavior href={props.uri}>
        <motion.a 
          className={styles.wrapper} 
          whileHover={{
            scale:1.05,
            backgroundColor:"hsla(0,100%,100%,.85)"
          }}
          whileFocus={{
            outline:"2px solid white",
            scale:1.05,
            backgroundColor:"hsla(0,100%,100%,.85)"
          }}
          whileTap={{
            scale:.95
          }}
        >
        <span className={styles.label}>{props.label}</span>
        <i className={styles.icon}>
          <GrFormNextLink />
        </i>
        </motion.a>
      </Link>
  );
}
