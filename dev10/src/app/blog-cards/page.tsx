import { BlogCard } from 'utils/Cards';
import { Hero } from 'utils/Hero';

export default function Page() {
    return (
        <>
            {/* <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '.2rem',
                    margin: '10rem 0',
                }}
            >
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="primary"
                    title="Czym jest sezonowość słów kluczowych?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="primary"
                    title="Jak powstał Bing? – alternatywa dla Google"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="primary"
                    title="Czym jest środowisko graficzne Linux?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="primary"
                    title="Jak tworzyć zmienne w CSS?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1470645792662-dd18394f8c97?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="primary"
                    title="Co nowego znajdziesz w Zorin OS 17?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="primary"
                    title="Czym się kierować w wyborze kamery?"
                    uri="#"
                />
            </div> */}
              {/* <div
             style={{
                width:"100%",
                display:"flex",
                alignItems:"start",
                justifyContent:"center",
                gap:"1rem",
                flexFlow:"row wrap"
             }}
            >
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    excerpt='Itaque rem eum est quidem alias et aut cum. Ipsa animi numquam quia ipsam aliquid aliquam temporibus. Ut repellat et inventore dolorem aut deleniti non cumque. Aut quisquam omnis itaque consequuntur ipsa voluptates ipsa.'
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="tertiary"
                    title="Czym jest sezonowość słów kluczowych?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    excerpt='Itaque rem eum est quidem alias et aut cum. Ipsa animi numquam quia ipsam aliquid aliquam temporibus. Ut repellat et inventore dolorem aut deleniti non cumque. Aut quisquam omnis itaque consequuntur ipsa voluptates ipsa.'
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                 theme="tertiary"
                    title="Jak powstał Bing? – alternatywa dla Google"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    excerpt='Itaque rem eum est quidem alias et aut cum. Ipsa animi numquam quia ipsam aliquid aliquam temporibus. Ut repellat et inventore dolorem aut deleniti non cumque. Aut quisquam omnis itaque consequuntur ipsa voluptates ipsa.'
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                  theme="tertiary"
                    title="Czym jest środowisko graficzne Linux?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    excerpt='Itaque rem eum est quidem alias et aut cum. Ipsa animi numquam quia ipsam aliquid aliquam temporibus. Ut repellat et inventore dolorem aut deleniti non cumque. Aut quisquam omnis itaque consequuntur ipsa voluptates ipsa.'
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                  theme="tertiary"
                    title="Jak tworzyć zmienne w CSS?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    excerpt='Itaque rem eum est quidem alias et aut cum. Ipsa animi numquam quia ipsam aliquid aliquam temporibus. Ut repellat et inventore dolorem aut deleniti non cumque. Aut quisquam omnis itaque consequuntur ipsa voluptates ipsa.'
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1470645792662-dd18394f8c97?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                    theme="tertiary"
                    title="Co nowego znajdziesz w Zorin OS 17?"
                    uri="#"
                />{' '}
                <BlogCard
                    category={{
                        label: 'Programowanie',
                        uri: '#',
                    }}
                    excerpt='Itaque rem eum est quidem alias et aut cum. Ipsa animi numquam quia ipsam aliquid aliquam temporibus. Ut repellat et inventore dolorem aut deleniti non cumque. Aut quisquam omnis itaque consequuntur ipsa voluptates ipsa.'
                    image={{
                        altText: '',
                        sourceUrl:
                            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        title: '',
                    }}
                    release="Sat Nov 18 2023 00:42:06 GMT+0100 (czas środkowoeuropejski standardowy)"
                   theme="tertiary"
                    title="Czym się kierować w wyborze kamery?"
                    uri="#"
                />
            </div> */}
            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(2,1fr)",
                width:"clamp(25rem,130rem,95%)",
                margin:"20rem auto",
                gap:".5rem"
            }}>
                <BlogCard
                    direction='left'
                    title='Co to jest i jak działa nagłówek etag protokołu http?'
                    uri='#'
                    theme='secondary'
                />
                <BlogCard
                    direction='right'
                    title='Jakie są różnice tworzenia zmiennych za pomocą var vs const i let w JavaScript?'
                    uri='#'
                    theme='secondary'
                />
            </div>
        </>
    );
}
