import { Hero } from 'utils/Hero';

export default function Page() {
    return (
        <Hero
            breadcrumbs={[
                {
                    label: 'Start',
                    uri: '#',
                },
                {
                    label: 'Blog',
                    uri: '#',
                },
                {
                    label: 'Programowanie',
                    uri: '#',
                },
            ]}
            category={{
                label: 'Strony internetowe',
                uri: '#',
            }}
            excerpt={`Molestiae beatae alias repellendus blanditiis doloremque cumque cupiditate inventore voluptatem. Amet beatae sit. Velit sequi eveniet et nihil tenetur temporibus exercitationem. At expedita et id. Id repudiandae dicta totam. Quia recusandae et est excepturi accusamus dignissimos quia dolor tenetur.`}
            matter="technology"
            release="Wed May 29 2024 23:40:38 GMT+0200 (Central European Summer Time)"
            title="Jak wybrać odpowiednią bazę danych do projektu?"
            theme="article"
        />
    );
}
