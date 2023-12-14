'use client';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Item from 'l_nav/Menu/Item';
import styles from "l_nav/Menu/BigMenu/Panel/Submenu/Submenu.module.scss"
import { AiOutlineRollback } from "react-icons/ai";

type tSubmenu = {
  back: {
    label: string;
    handle: () => void;
  };
  menu: {
    label: string;
    submenu?: {
      label: string;
      uri: string;
      submenu?: {
        label: string;
        uri: string;
      }[];
    }[];
  };
};

export default function Submenu(props: tSubmenu) {
  const [isOpenDropdown, setIsOpenDropdown] = useState<{ [key: string]: boolean }>({});
  return (
    <div className={styles.wrapper}>
      <button className={styles.return}
        onClick={props.back.handle}
      >
        <span>
          {props.back.label}
        </span>
        <i><AiOutlineRollback /></i>
      </button>
      <h3 className={styles.title}>{props.menu.label}</h3>
      <ul  className={styles.menu}>
      {props.menu.submenu &&
        props.menu.submenu.map((item, index) => {
          if (item.submenu) {
            return (
              <li key={index}>
                <Item
                  handleExpand={() => setIsOpenDropdown((prev) => ({...prev,[item.label] : !prev[item.label]}))}
                  theme="expand"
                  isExpand={isOpenDropdown[item.label]}
                  label={item.label}
                  uri={item.uri}
                />
                {isOpenDropdown[item.label] && (
                  <AnimatePresence>
                    <ul>
                      {item.submenu.map((item, index) => {
                        return (
                          <Item
                            label={item.label}
                            key={index}
                            uri={item.uri}
                            theme="submenu"
                          />
                        );
                      })}
                    </ul>
                  </AnimatePresence>
                )}
              </li>
            );
          } else {
            return (
              <Item
                label={item.label}
                key={index}
                uri={item.uri}
                theme="regural"
              />
            );
          }
        })}
        </ul>
    </div>
  );
}
