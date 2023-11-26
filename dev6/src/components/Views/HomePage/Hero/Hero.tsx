import { tImage } from "ts/types";
import Image from "next/image";
import HeroButton from "buttons/HeroButton/HeroButton";
import styles from "views/HomePage/Hero/Hero.module.scss";

type tContainer = {
  title: string;
  slogan: string;
  buttons: {
    label: string;
    uri: string;
  }[];
};

type tLayer = {
  image: tImage;
  order: number;
};

type tHero = {
  container: tContainer;
  layers: tLayer[];
};

function Container(props: tContainer) {
  return (
    <div className={styles.container__wrapper}>
      <section className={styles.container}>
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
          <h2 dangerouslySetInnerHTML={{ __html: props.slogan }} />
        </header>
        <ul>
          {props.buttons.map((item, index) => {
            return <HeroButton key={index} label={item.label} uri={item.uri} />;
          })}
        </ul>
      </section>
    </div>
  );
}

function Layer(props: tLayer) {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <div className={styles.layer__wrapper} data-order={props.order}>
      {props.order === 1 ? (
        <motion.figure
          className={styles.layer}
          style={{ scale: scrollYProgress >= 0 ? scrollYProgress * 2 : 1 }}
        >
          <Image
            alt={props.image.altText}
            fill
            src={props.image.sourceUrl}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            title={props.image.title}
          />
        </motion.figure>
      ) : (
        <figure className={styles.layer}>
          <Image
            alt={props.image.altText}
            fill
            src={props.image.sourceUrl}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            title={props.image.title}
          />
        </figure>
      )}
    </div>
  );
}

export default function Hero(props: tHero) {
  return (
    <div className={styles.wrapper}>
      {props.layers.map((item, index) => {
        return <Layer image={item.image} key={index} order={item.order} />;
      })}
      <Container
        buttons={props.container.buttons}
        slogan={props.container.slogan}
        title={props.container.title}
      />
    </div>
  );
}
