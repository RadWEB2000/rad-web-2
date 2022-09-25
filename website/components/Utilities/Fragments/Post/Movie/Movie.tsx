import { IntMovie } from "./interface";
import { Wrapper } from "./style";
export const Movie = ({ movie }: IntMovie) => {
  return (
    <Wrapper>
      <iframe
        src={`https://www.youtube.com/embed/${movie}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Wrapper>
  );
};
