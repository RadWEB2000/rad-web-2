import { IntSearch } from "./interface";
import { Wrapper } from "./style";
import { ReactElement } from "react";
export const Search = ({ handle, placeholder }: IntSearch): ReactElement => {
  return (
    <Wrapper>
      <form action="" onSubmit={(e) => e.preventDefault()} method="POST">
        <input
          onInput={handle}
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
        />
        <span />
      </form>
    </Wrapper>
  );
};
