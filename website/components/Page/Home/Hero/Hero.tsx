import Image from "next/image";
import { LogoNoBg } from "../../../../assets/brand/logo-no-background";
import { ButtonPrimary } from "../../../Utilities/Buttons/ButtonPrimary/ButtonPrimary";
import { Wrapper } from "./style";
export const Hero = () => {
  return (
    <Wrapper>
      <div className="content">
        <section>
          <h1>RadWEB</h1>
          <p>
            Projektowanie, tworzenie, pozycjonowanie i optymalizacja stron
            internetowych
          </p>
        </section>
        <ButtonPrimary path="#" title="kontakt" />
      </div>
      <div className="movie">
        <LogoNoBg/>
      </div>
    </Wrapper>
  );
};
