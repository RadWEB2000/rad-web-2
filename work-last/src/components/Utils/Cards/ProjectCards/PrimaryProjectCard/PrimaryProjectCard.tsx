import Image from "next/image";
import mechanicImg from "img/car-mechanic.webp";
import css from "cards/ProjectCards/PrimaryProjectCard/PrimaryProjectCard.module.scss";

export default function PrimaryProjectCard({side}:{side:"left"|"right"}){
    return (
        <li className={css.wrapper} data-side={side}>
            <figure className={css.image__box} >
                <picture className={css.image} >
                    <Image
                         alt="alt" 
                         fill
                         src={mechanicImg.src}
                         style={{
                             objectFit:"contain",
                             objectPosition:"center",
                             scale:1.09
                         }}
                         title=""
                         quality={44}
                    />
                </picture>
            </figure>
            <div className={css.details} >
                <i className={css.index} >03</i>
                <h3 className={css.title} >Mechanik Ludomy</h3>
            </div>
            <section className={css.box} >
                <p className={css.overview} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur cum eum sequi, molestiae a ex sed error mollitia illum corrupti dolores delectus! Animi ut consectetur tenetur, dolor quibusdam commodi!<br/><br/>
                Corporis adipisci tempora harum. Nam tempora animi magni illo vitae numquam nemo distinctio adipisci quaerat nulla deserunt, similique ad obcaecati quibusdam sint eveniet non nobis natus ipsa nesciunt neque magnam.</p>
            </section>
        </li>
    )
}