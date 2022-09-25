import { TeamCard } from "../../../Utilities/Cards/TeamCard/TeamCard";
import { ExcerptSectionContent } from "../../../Utilities/Contents/Page/ExcerptSectionContent";
import { Wrapper } from "./style";
export const Team = () => {
  return (
    <Wrapper className="section">
      <ExcerptSectionContent
        button="wszyscy"
        content="Sed vero reiciendis consequatur harum odio aspernatur. Iusto et fuga rerum suscipit sit qui veniam. Corrupti dolorem et. Eos in sit corrupti quia aut exercitationem. Quia enim laboriosam quia dolorem voluptas ducimus."
        endContent={500}
        path="#"
        title="Zespół"
      />
      <ul>
        <div>
          <TeamCard
            button="więcej"
            image={"/assets/images/room.jpg"}
            job="front-end/web developer, specjalista seo/sem"
            path="#"
            title="Radosław Adamczyk"
          />
          <TeamCard
            button="więcej"
            image={"/assets/images/room.jpg"}
            job="front-end/web developer, specjalista seo/sem"
            path="#"
            title="Radosław Adamczyk"
          />
          <TeamCard
            button="więcej"
            image={"/assets/images/room.jpg"}
            job="front-end/web developer, specjalista seo/sem"
            path="#"
            title="Radosław Adamczyk"
          />
        </div>
      </ul>
    </Wrapper>
  );
};
