import { Culture } from "views/AboutView";
import { Hero } from "utils/Hero";

export default function AboutUsPage(){
    return(
        <>
            <Hero
                content="Qui et in eos. Rerum error officiis non deserunt omnis delectus. Fuga laboriosam voluptatum omnis natus qui non illum. Aperiam unde voluptatem ullam neque odit labore quaerat. Autem cum ut reiciendis dignissimos. Ut et velit et ea corporis labore. Quas quae sed exercitationem non sapiente et cum. Sint nulla minus veritatis voluptatem. Culpa quaerat tempora qui quia nesciunt tenetur voluptas consequatur facere."
                image={{
                    altText:"",
                    sourceUrl:"https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title:""
                }}
                title="Kim jesteśmy?"
                theme="about_us"
            />
            <main>
                <Culture
                    content="In animi eaque dignissimos nobis incidunt blanditiis. Repellat possimus sit non. Velit neque sequi animi accusantium qui voluptas accusantium velit illum. Et at sint labore. Accusantium occaecati consequuntur tempore. Quod et ut officia officiis. <br/><br/>Id aut qui quis repellendus voluptatem suscipit. Beatae omnis enim ut dolore fuga. Accusamus et natus quis sunt debitis ut et aspernatur distinctio."               
                    image={{
                        altText:"",
                        sourceUrl:"https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        title:""
                    }}
                    title="Nasza kultura"
                />
            </main>
        </>
    )
}