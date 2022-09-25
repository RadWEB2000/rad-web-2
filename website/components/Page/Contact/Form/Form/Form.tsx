import { Field } from "../Field/Field";
import { Rodo } from "../Rodo/Rodo";
import { useState, useRef } from 'react';
import { Wrapper } from "./style";
import emailjs from '@emailjs/browser';
export const Form = () => {
  const [isChecked, setChecked] = useState(false);
  const formRef = useRef(null);
  const [formValues,setFormValues] = useState({
    firstname:'',
    lastname:'',
    email:'',
    subject:'',
    message:'',
  })
  const {service,template,user} = {
    service:'service_qd6w83l',
    template:'template_b469d46',
    user:'jiBzcCuVYQCjwhBEu'
  }
  console.log(formValues);
  const completeForm = (e:any) => {
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value,
    })
  }
  const sendEmail = (e:any) => {
    e.preventDefault();
    if(formRef.current){
      emailjs.sendForm(service,template,formRef.current,user);
      setFormValues({
        firstname:'',
        lastname:'',
        email:'',
        subject:'',
        message:'',
      })
    }
  }
  return (
    <Wrapper ref={formRef} action="" onSubmit={(e) => sendEmail(e)}>
      <div className="fields">
        <div className="double">
          <Field
            field="input"
            handle={completeForm}
            id="firstname"
            name="firstname"
            placeholder="Wpisz tutaj"
            minLength={3}
            title="Imię"
            required
          />
          <Field
            field="input"
            handle={completeForm}
            id="lastname"
            minLength={3}
            name="lastname"
            placeholder="Wpisz tutaj"
            title="Nazwisko"
            required
          />
        </div>
        <div className="double">
          <Field
            field="input"
            handle={completeForm}
            id="email"
            minLength={5}
            name="email"
            placeholder="Wpisz tutaj"
            title="Adres e-mail"
            variant="email"
            required
          />
          <Field
            field="input"
            handle={completeForm}
            id="phone"
            name="phone"
            minLength={9}
            placeholder="Wpisz tutaj"
            title="Numer telefonu"
            variant="tel"
            required
          />
        </div>
        <div className="single">
          <Field
            field="input"
            handle={completeForm}
            id="subject"
            minLength={10}
            name="subject"
            placeholder="Wpisz tutaj"
            title="Temat"
            required
          />
        </div>
        <div className="single">
          <Field
            field="textarea"
            handle={completeForm}
            id="message"
            minLength={15}
            name="message"
            placeholder="Wpisz tutaj"
            title="Wiadomość"
            required
          />
        </div>
        <Field
          button="submit"
          disabled={!isChecked}
          handle={(e) => sendEmail(e)}
          field="button"
          title="Wyślij"
          required
        />
      </div>
      <Rodo
        content="Zgadzam się z <a href='/polityka-prywatnosci'>polityką prywatnością</a>, która obowiązuje w serwisie RadWEB"
        handle={() => setChecked(!isChecked)}
        value={isChecked}
      />
    </Wrapper>
  );
};
