import Head from 'next/head'
import { IntSeo } from './interface'
export const Seo = ({canonical,description,image,robots,title,typePage}:IntSeo) => {
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && 
                <>
                    <link rel="canonical" href={canonical}/>
                    <meta property="og:url" content={canonical} />
                </>
            }
            {robots && <meta name="robots" content={robots}/> }
            <meta property="og:type" content={typePage} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            
        </Head>
    )
}