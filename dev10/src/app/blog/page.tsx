import { Cards, Categories, Container } from "views/BlogView"
import { Hero } from "utils/Hero"

export default function BlogPage(){
    return(
        <>
            <Hero
                content="Explicabo quia alias. Ipsum reiciendis et. Possimus quibusdam sequi eum. Sunt ipsa sequi. In est quis nihil. Accusamus exercitationem quia dolores praesentium aspernatur."
                title="Blog"
                theme="blog"
                search={{
                    label:"Szukaj",
                    placeholder:"Wyszukaj"
                }}
            />
            <Container>
                <Categories
                    categories={[
                        {
                            label:"Programowanie",
                            uri:"#",
                        },
                        {
                            label:"Pozycjonowanie",
                            uri:"#",
                        },
                        {
                            label:"Systemy operacyjne",
                            uri:"#",
                        },
                        {
                            label:"Google Ads",
                            uri:"#",
                        },
                    ]}
                />
                <Cards
                />
            </Container>
        </>
    )
}