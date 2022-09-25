import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Wrapper } from "./style";
export const SocialsShare = () => {
    const getPath = () => {
        if(window !== undefined){
            const location = window.location.pathname;
            return location;
        }
    }
  return (
    <Wrapper>
      <li>
        <FacebookShareButton url={`${getPath()}`}>
          <FaFacebookF />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={`${getPath()}`}>
          <FaTwitter />
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton url={`${getPath()}`}>
          <FaLinkedinIn />
        </LinkedinShareButton>
      </li>
      <li>
        <RedditShareButton url={`${getPath()}`}>
          <FaRedditAlien />
        </RedditShareButton>
      </li>
      <li>
        <TelegramShareButton url={`${getPath()}`}>
          <FaTelegramPlane />
        </TelegramShareButton>
      </li>
      <li>
        <WhatsappShareButton url={`${getPath()}`}>
          <FaWhatsapp />
        </WhatsappShareButton>
      </li>
    </Wrapper>
  );
};
