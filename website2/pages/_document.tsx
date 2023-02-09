import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
	return (
		<Html>
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

				<meta name="author" content="Radosław Adamczyk - RadWEB" />
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
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
};
export default Document;
