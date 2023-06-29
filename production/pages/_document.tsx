import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pl">
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-MPGDKSZ');`,
					}}
				/>
				<meta
					name="google-site-verification"
					content="1R0cNdnVvIwcVStMUJAi1N2vG73gP-13D0eY4ONp2bw"
				/>
				<meta name="author" content="Radosław Adamczyk - RadWEB" />
			</Head>
			<body>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-MPGDKSZ"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
