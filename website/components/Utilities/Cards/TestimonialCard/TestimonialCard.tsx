import Image from "next/image";
import { IntTestimonialCard } from "./interface";
import { Wrapper } from "./style";
export const TestimonialCard = ({
  content,
  description,
  image,
  title,
}: IntTestimonialCard) => {
  const contentCite = `„${content}”`;
  return (
    <Wrapper>
      <section>
        <p dangerouslySetInnerHTML={{ __html: contentCite }} />
      </section>
      <div>
        {image && (
          <figure>
            <Image
              alt={`${title} - zdjęcie`}
              loading="lazy"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={image}
              quality={30}
            />
          </figure>
        )}
        <div>
          <h3>{title}</h3>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
