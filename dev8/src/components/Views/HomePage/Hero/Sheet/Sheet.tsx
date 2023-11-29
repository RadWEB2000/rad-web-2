import Image from 'next/image';
import { tImage } from 'ts/types';

type tSheet = {
  className: any;
  image: tImage;
};

export default function Sheet(props: tSheet) {
  return (
    <div className={props.className}>
      <figure>
        <Image
          alt={props.image.altText}
          fill
          loading="eager"
          src={props.image.sourceUrl}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          title={props.image.title}
          quality={75}
        />
      </figure>
    </div>
  );
}
