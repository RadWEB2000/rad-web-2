import { IntHero } from "./interface";
import { getTime } from "../../../../../lib/functions/getTime";
import Image from "next/image";
import { Wrapper } from "./style";
import { StackTechnology } from "../../StackTechnology/StackTechnology";
export const Hero = ({
  children,
  image,
  release='',
  stack,
  title,
}: IntHero) => {
  const { day, month, year } = getTime(release);
  return (
    <Wrapper>
      {stack && <StackTechnology stack={stack}/>}
      <h1>{title}</h1>
      {release && <p className="release">{day} {month} {year}</p>}
      <figure>
        <Image
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          src={image}
          quality={80}
        />
      </figure>
      <p className="excerpt">{children}</p>
    </Wrapper>
  );
};
