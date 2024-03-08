import { FaGithub, FaInstagram, FaFacebookF, FaThreads , FaXTwitter, FaYoutube } from "react-icons/fa6";

type tGetSocialIcon = {
    url:string;
}

export default function getSocialIcon(props:tGetSocialIcon){
    if(props.url.includes("facebook")){
        return <FaFacebookF />
    }else if(props.url.includes("instagram")){
        return <FaInstagram />
    }else if(props.url.includes("twitter")){
        return <FaXTwitter />
    }else if(props.url.includes("youtube")){
        return <FaYoutube />
    }else if(props.url.includes("github")){
        return <FaGithub />
    }else if(props.url.includes("threads")){
        return <FaThreads />
    }
}