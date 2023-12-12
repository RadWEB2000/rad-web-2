import { tBigMenu, tBrand, tSmallMenu, tSocial } from 'ts/types';

interface iNavigation {
  brand: tBrand;
  menu: {
    small: tSmallMenu;
    big: tBigMenu[];
  };
  socials: tSocial[];
  settings: {
    menuButton: string;
    returnButton: string;
  };
}

export const navigation: iNavigation = {
  brand: {
    label: 'RadWEB',
    uri: '/',
  },
  menu: {
    big: [
      {
        label: 'Start',
        value: 'start',
        uri: '/',
      },
      {
        label: 'O nas',
        value: 'team',
        uri: '/o-nas',
        submenu: [
          {
            label: 'Radosław Adamczyk',
            uri: '/o-nas/radoslaw-adamczyk',
          },
          {
            label: 'Filip Bukowiecki',
            uri: '/o-nas/filip-bukowiecki',
          },
          {
            label: 'Kim jesteśmy?',
            uri: '/o-nas',
          },
        ],
      },
      {
        label: 'Blog',
        value: 'blog',
        uri: '/blog',
        submenu: [
          {
            label: 'Programowanie',
            uri: '/blog/programowanie',
            value: 'programming',
            submenu: [
              {
                label: 'Frontend',
                uri: '/blog/programowanie/frontend',
              },
              {
                label: 'Frontend',
                uri: '/blog/programowanie/backend',
              },
            ],
          },
          {
            label: 'Pozycjonowanie',
            value: 'positioning',
            uri: '/blog/pozycjonowanie',
            submenu: [
              {
                label: 'Optymalizacja',
                uri: '/blog/pozycjonowanie/optymalizacja',
              },
              {
                label: 'Słowa kluczowe',
                uri: '/blog/slowa-kluczowe',
              },
            ],
          },
          {
            label: 'Systemy operacyjne',
            value: 'system',
            uri: '/blog/systemy-operacyjne',
          },
          {
            label: 'Social media',
            value: 'socials',
            uri: '/blog/social-media',
          },
          {
            label: 'Wszystkie wpisy',
            uri: '/blog',
          },
        ],
      },
      {
        label: 'Słownik',
        value: 'glossary',
        uri: '/slownik',
      },
      {
        label: 'Projekty',
        value: 'projects',
        uri: '/projekty',
        submenu: [
          {
            label: 'Prace',
            uri: '/projekty/prace',
          },
          {
            label: 'Realizacje',
            uri: '/projekty/realizacje',
          },
        ],
      },
      {
        label: 'Usługi',
        value: 'services',
        uri: '/uslugi',
        submenu: [
          {
            label: 'Strony internetowe',
            uri: '/uslugi/strony-internetowe',
          },
          {
            label: 'SEO',
            uri: '/uslugi/seo',
          },
          {
            label: 'Videomaking',
            uri: '/uslugi/videomaking',
          },
        ],
      },
      {
        label: 'Kontakt',
        value: 'contact',
        uri: '/kontakt',
      },
    ],
    small: {
      buttons: [
        {
          label: 'Kontakt',
          uri: '/kontakt',
        },
      ],
      items: [
        {
          label: 'Start',
          uri: '/',
        },
        {
          label: 'Zespół',
          uri: '/o-nas',
        },
        {
          label: 'Blog',
          uri: '/blog',
        },
        {
          label: 'Słownik',
          uri: '/slownik',
        },
        {
          label: 'Projekty',
          uri: '/projekty',
        },
      ],
    },
  },
  socials: [
    {
      label: 'RadWEB',
      url: 'facebook.com',
    },
    {
      label: 'radoslaw.adamczyk.2000',
      url: 'instagram.com',
    },
    {
      label: 'RadWEB',
      url: 'twitter.com',
    },
    {
      label: 'RadWEB - Programowanie i SEO',
      url: 'youtube.com',
    },
  ],
  settings: {
    menuButton: 'Menu',
    returnButton: 'Wróć',
  },
};
