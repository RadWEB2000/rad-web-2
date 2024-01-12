import { Hero } from "utils/Hero";

export default function Page(){
    return(
        <Hero
            content={`Minima sequi corrupti quibusdam provident sint cum minus necessitatibus. Ab commodi corrupti quaerat veniam. Impedit autem accusantium. Iste id et. Iure alias magnam sint aperiam. Voluptas omnis dolorem. Similique non quod magni facere esse. Dolore dolorem sed commodi qui ad id neque.`}
            socials={[]}
            title="Radosław Adamczyk"
            work="SEO/SEM Specialist, Web Developer"
            image={{
                altText:"",
                sourceUrl:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title:""
            }}
            theme="person"
        />
    )  
}