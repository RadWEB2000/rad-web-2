import Image from "next/image";
import Link from "next/link";
import { workCategories } from "../../../../data/workCategories";
import { IntProjectCard } from "./interface";
import { Wrapper } from "./style";
export const ProjectCard = ({
  category,
  content,
  image,
  isBig,
  path,
  title,
}: IntProjectCard) => {
  const getValue = workCategories.filter((item) =>
    item.value.includes(`${category.value.toLowerCase()}`)
  );
  const { background, color } = {
    background: getValue.map((item, index) => {
      return item.color.background;
    }),
    color: getValue.map((item, index) => {
      return item.color.font;
    }),
  };
  return (
    <Wrapper
      background={background[0].toString()}
      className={`${isBig ? "big" : "small"}`}
      color={color[0].toString()}
    >
      <div className="image">
        <figure>
          <Image
            alt={title}
            layout="fill"
            loading="lazy"
            objectFit="cover"
            objectPosition="center"
            src={image}
            quality={76}
          />
        </figure>
      </div>
      <div className="details">
        <div className="category">
          <p>{category.name}</p>
        </div>
        <section>
          {isBig ? (
            <h2 className="title">
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </h2>
          ) : (
            <h3 className="title">
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </h3>
          )}
          <p
            className="content"
            dangerouslySetInnerHTML={{
              __html: content.substring(0, 200) + "...",
            }}
          />
        </section>
      </div>
    </Wrapper>
  );
};
