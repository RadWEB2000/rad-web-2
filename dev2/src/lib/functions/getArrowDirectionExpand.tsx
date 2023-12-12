import {
  BiDownArrowAlt,
  BiUpArrowAlt,
} from 'react-icons/bi';

export default function getArrowDirectionExpand(direction:boolean){
    if(direction){
        return <BiUpArrowAlt />;
    }else{
        return <BiDownArrowAlt />;
    }
}