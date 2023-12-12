import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitterX } from 'react-icons/bs';
import { ImYoutube } from 'react-icons/im';
import { RxInstagramLogo } from 'react-icons/rx';

export default function getSocialMediaIcon(url:string) {
    if(url.includes("facebook")){
        return <BiLogoFacebook />;
    }else if(url.includes("instagram")){
        return <RxInstagramLogo />;
    }else if(url.includes("twitter")){
        return <BsTwitterX />;
    }else if(url.includes("youtube")){
        return <ImYoutube />;
    } else return null;
}