import { IntDetails } from "./interface"
import { Wrapper } from "./style"
export const Details = ({email,fullname,jobs,krs,nip,phone}:IntDetails) => {
    return(
        <Wrapper>
            <div className="details">
                <h2>{fullname}</h2>       
                {jobs.map((item,index) => <p key={index}>{item}</p>)}
                {krs && <p><b>KRS</b>: {krs}</p>}
                {nip && <p><b>NIP</b>: {nip}</p>}
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9804.27375852743!2d16.881892!3d52.096686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfaadbf09f94aecf!2sRadWEB!5e0!3m2!1spl!2spl!4v1663048033575!5m2!1spl!2spl" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </Wrapper>
    )
}