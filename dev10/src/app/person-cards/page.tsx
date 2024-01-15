import { PersonCard } from 'utils/Cards';

export default function Page() {
    return (
        <>
           <div>
                <PersonCard
                    button='poznaj'
                    content={`Soluta voluptatem ea aperiam accusamus cupiditate odit. Error aut corrupti maxime enim laboriosam necessitatibus ab ullam. Reprehenderit eius ex voluptas et non ut omnis. Tempore harum maiores quidem sint in quaerat nihil unde. Eum beata`}
                    image={{
                        altText:"",
                        sourceUrl:"https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        title:""
                    }}
                    title='Radosław Adamczyk'
                    uri='#'
                    work='Specjalista SEO/SEM, Web Developer, Front-End Developer'
                    theme='primary'
                />
           </div>
           <div
            style={{
                width:'clamp(2rem,150rem,95%)',
                margin:"13rem auto",
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)"
            }}
           >
                <PersonCard
                    image={{
                        altText:"",
                        sourceUrl:"https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        title:""
                    }}
                    title='Radosław Adamczyk'
                    uri='#'
                    work='Specjalista SEO/SEM, Web Developer, Front-End Developer'
                    theme='secondary'
                />
                <PersonCard
                    image={{
                        altText:"",
                        sourceUrl:"https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        title:""
                    }}
                    title='Radosław Adamczyk'
                    uri='#'
                    work='Specjalista SEO/SEM, Web Developer, Front-End Developer'
                    theme='secondary'
                />
                <PersonCard
                    image={{
                        altText:"",
                        sourceUrl:"https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        title:""
                    }}
                    title='Radosław Adamczyk'
                    uri='#'
                    work='Specjalista SEO/SEM, Web Developer, Front-End Developer'
                    theme='secondary'
                />
           </div>
        </>
    );
}
