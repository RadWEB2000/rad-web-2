import Image from "next/image";
import { ButtonCard } from "../../Buttons/ButtonCard/ButtonCard";
import { IntTeamCard } from "./interface";
import { Wrapper } from "./style";
export const TeamCard = ({ button, image, job, path, title }: IntTeamCard) => {
  return (
    <Wrapper>
      <Image
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={image}
        priority
        quality={75}
      />
      <section>
        <h3>{title}</h3>
        <p className="job">{job}</p>
        <ButtonCard title={button} isPrimary path={path} />
      </section>
    </Wrapper>
  );
};
