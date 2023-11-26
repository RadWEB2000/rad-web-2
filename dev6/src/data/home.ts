import layerImage from "assets/home/hero_layer.png";
import backgroundImage from "assets/home/hero_background.png";

export const home = {
  hero: {
    container: {
      title: "RadWEB",
      slogan: "Odkryj z nami<br/>internet na nowo",
      buttons: [
        {
          label: "Blog",
          uri: "#",
        },
        {
          label: "Kontakt",
          uri: "#",
        },
      ],
    },
    layers: [
      {
        image: {
          altText: "",
          sourceUrl: backgroundImage,
          title: "",
        },
        order: 1,
      },
      {
        image: {
          altText: "",
          sourceUrl: layerImage,
          title: "",
        },
        order: 2,
      },
    ],
  },
};
