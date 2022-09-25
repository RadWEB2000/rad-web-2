import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { getMonthName } from "../../../../lib/functions/getMonthName";
import { getTime } from "../../../../lib/functions/getTime";
import { Author } from "./Author";
import { IntBlogCard } from "./interface";
import { BlogCardWrapper } from "./style";
export const BlogCard = ({
  content,
  image,
  isBig=false,
  path,
  time,
  title,
}: IntBlogCard): ReactElement => {
  const {day,month,year} = getTime(time);
  return (
    <BlogCardWrapper className={`${isBig ? 'big' : 'small'}`}>
      <div className="image">
        <figure>
          <Image
            alt={`${title} - zdjęcie`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            src={image}
            quality={isBig ? 65 : 45}
          />
        </figure>
      </div>
      <div className="content">
        <section>
          <p className='date'>
            {month} {day}, {year}
          </p>
          {
            isBig ?
            <h2>
              <Link href={path}>
                <a rel="index follow">
                  {title}
                </a>
              </Link>
            </h2> :
            <h3>
              <Link href={path}>
                <a rel="index follow">
                  {title}
                </a>
              </Link>
            </h3>
          }
          <p
            className='content'
            dangerouslySetInnerHTML={
              isBig
                ? { __html: content.substring(0, 200) + "..." }
                : { __html: content.substring(0, 150) + "..." }
            }
          />
        </section>
      </div>
    </BlogCardWrapper>
  );
};
