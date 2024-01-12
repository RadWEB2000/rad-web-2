import { Hero } from "utils/Hero";

export default function Page(){
    return(
        <Hero
            breadcrumbs={[
                {
                    label:"Start",
                    uri:"#"
                },
                {
                    label:"Blog",
                    uri:"#"
                },
                {
                    label:"Programowanie",
                    uri:"#"
                },
            ]}
            category={{
                label:"Strony internetowe",
                uri:"#"
            }}
            image={{
                altText:"",
                sourceUrl:"https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title:""
            }}
            matter="ads"
            release="Wed May 29 2024 23:40:38 GMT+0200 (Central European Summer Time)"
            title="Jak wybrać odpowiednią bazę danych do projektu?"
            theme="blog"
        />
    )  
}