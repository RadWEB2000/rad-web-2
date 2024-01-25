import { Hero } from "utils/Hero";
import { RiFacebookCircleFill } from "react-icons/ri";

export default function AboutUsPersonPage(){
    return(
        <>
            <Hero
                content="Numquam voluptatem error dignissimos illo distinctio. Alias nulla saepe. Qui minus necessitatibus quae necessitatibus laborum quod fuga eum fugiat. Ullam mollitia dicta excepturi eos sit id molestiae asperiores amet."
                image={{
                    altText:"",
                    sourceUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title:""
                }}
                socials={[
                    {
                        icon:<RiFacebookCircleFill />,
                        label:"Facebook",
                        name:"RadoslawAdamczyk",
                        uri:"#",
                    },
                    {
                        icon:<RiFacebookCircleFill />,
                        label:"Facebook",
                        name:"RadoslawAdamczyk",
                        uri:"#",
                    },
                ]}
                title="Radosław Adamczyk"
                work="Specjalista SEO/SEM - Front end & Web developer"
                theme="person"
            />
        </>
    )
}