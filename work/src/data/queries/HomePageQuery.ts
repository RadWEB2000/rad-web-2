import { tCustomButton } from "ts/commons";

export type tHomePageRequestQuery = {
  data: {
    page: {
      pageHomePage: {
        hero: {
          buttons: {
            button: tCustomButton;
          }[];
          slogan: string;
          title: string;
        };
      };
    };
  };
};

export type tHomePageResponseQuery = {
  hero: {
    title: string;
    slogan: string;
    buttons: tCustomButton[];
  };
};

const HomePageQuery = `
    query HomePage {
        page(id: "/", idType: URI) {
            pageHomePage {
                hero {
                    buttons {
                        button {
                            target
                            title
                            url
                        }
                    }
                    slogan
                    title
                }
            }
        }
    }
`;

export default HomePageQuery;
