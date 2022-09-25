
import { stackArray } from "../../../../data/stackArray";
import { IntStackTechnology } from "./interface";
import { Wrapper } from "./style";

export const StackTechnology = ({ stack }: IntStackTechnology) => {
    console.log(stack)
  return (
    <Wrapper>
        
        {stack.map(i => <>{stackArray.filter((j) => j.value.includes(i)).map(({icon,name,value}) => 
                <li key={value}>
                    <span>
                      {icon}
                    </span>
                    <p>
                      {name}
                    </p>
                </li>)}</>
                )}
    </Wrapper>
  );
};
