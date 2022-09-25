import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { IntAuthor } from "./interface";
import { AuthorWrapper } from "./style";

export const Author = ({ image, isRecommended, path, title }: IntAuthor):ReactElement => {
  return (
    <AuthorWrapper isRecommended={isRecommended}>
      {!isRecommended && image && (
        <div>
          <figure>
            <Image
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={image}
              quality={45}
            />
          </figure>
        </div>
      )}
      <section>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </section>
    </AuthorWrapper>
  );
};
