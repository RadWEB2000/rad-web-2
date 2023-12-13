import { tImage } from 'ts/types';

type tArticle = {
  image: tImage;
  title: string;
  category: {
    label: string;
    uri: string;
  };
  release: string;
  uri: string;
};

export const articles: tArticle[] = [
  {
    category: {
      label: 'Systemy operacyjne',
      uri: '#',
    },
    image: {
      altText: '',
      sourceUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*tnuNbnRERWq6OcQv.jpg',
      title: '',
    },
    release: 'Sat Dec 09 2023 11:27:29 GMT+0100 (Central European Standard Time)',
    title: 'It’s 2023, Please Stop Using “&&” for Conditional Rendering in React',
    uri: '#',
  },
  {
    category: {
      label: 'Systemy operacyjne',
      uri: '#',
    },
    image: {
      altText: '',
      sourceUrl:
        'https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg?w=1380&t=st=1702474997~exp=1702475597~hmac=b7e1ee1b793563a4bc9cff3cd078d4e80c9e10a906a16baf7162032183946472',
      title: '',
    },
    release: 'Sat Dec 09 2023 11:27:29 GMT+0100 (Central European Standard Time)',
    title: 'It’s 2023, Please Stop Using “&&” for Conditional Rendering in React',
    uri: '#',
  },
  {
    category: {
      label: 'Systemy operacyjne',
      uri: '#',
    },
    image: {
      altText: '',
      sourceUrl:
        'https://img.freepik.com/free-photo/young-woman-watching-video-tablet_23-2147859229.jpg?w=1060&t=st=1702475001~exp=1702475601~hmac=1e2bdf5e2cf8b7918da173e5a3e0de39e1ce8793ace883805d8a8881a6a9ce35',
      title: '',
    },
    release: 'Sat Dec 09 2023 11:27:29 GMT+0100 (Central European Standard Time)',
    title: 'It’s 2023, Please Stop Using “&&” for Conditional Rendering in React',
    uri: '#',
  },
];
