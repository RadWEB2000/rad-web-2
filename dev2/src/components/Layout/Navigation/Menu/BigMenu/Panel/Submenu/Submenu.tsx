'use client';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Item from 'l_nav/Menu/Item';

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
  console.log(props.menu);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <div>
      <button
        style={{ color: 'pink' }}
        onClick={props.back.handle}
      >
        {props.back.label}
      </button>
      <h3>{props.menu.label}</h3>
      {props.menu.submenu &&
        props.menu.submenu.map((item, index) => {
          if (item.submenu) {
            return (
              <li key={index}>
                <Item
                  handleExpand={() => setIsOpenDropdown(!isOpenDropdown)}
                  theme="expand"
                  isExpand={isOpenDropdown}
                  label={item.label}
                  uri={item.uri}
                />
                {isOpenDropdown && (
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
    </div>
  );
}
