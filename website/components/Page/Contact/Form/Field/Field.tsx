import { ReactElement, useRef } from 'react';
import { IntField } from './interface';
import { Button, Input, Textarea } from './style';
export const Field = ({button,disabled=false,field,handle=()=>{},id='',maxLength,minLength,name='',pattern,placeholder='',required=false,title,variant='text'}:IntField):ReactElement|null => {
    if(field === 'input'){
        return(
            <Input>
                <label htmlFor={name}>
                    {title}
                </label>
                <div>
                    {
                        pattern ?
                        <input 
                            id={id}
                            maxLength={maxLength}
                            minLength={minLength}
                            name={name}
                            onInput={handle}
                            pattern={pattern}
                            placeholder={placeholder}
                            required={required}
                            type={variant} 
                        /> :
                        <input 
                            id={id}
                            maxLength={maxLength}
                            minLength={minLength}
                            name={name}
                            onInput={handle}
                            placeholder={placeholder}
                            type={variant}
                        />
                    }
                    <span/>
                </div>
            </Input>
        )
    }else if(field === 'textarea'){
        return(
            <Textarea>
                <label htmlFor={name}>
                    {title}
                </label>
                <div>
                    <textarea 
                        id={id} 
                        name={name} 
                        onInput={handle}
                        placeholder={placeholder}
                        required={required}
                    />
                </div>
            </Textarea>
        )
    }else if(field === 'button'){
        return(
            <Button>
                <button disabled={disabled} type={button}>
                    {title}
                </button>
            </Button>
        )
    }else{
        return null;
    }
}