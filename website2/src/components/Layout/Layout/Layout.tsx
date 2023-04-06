import Head from "next/head";
import Footer from "../Footer/Footer/Footer";
import Navigation from "../Navigation/Navigation/Navigation";
import styles from "./Layout.module.scss";
import { ReactElement, useState } from "react";
import { menu } from "../../../data/menu";
import CookiesBox from "../Cookies/CookiesBox/CookiesBox";

interface iLayout {
	canonical?: string;
	image: string;
	meta: {
		description: string;
		title: string;
	};
	og: {
		description: string;
		title: string;
		type: "article" | "website" | "blog";
	};
	robots?:
		| "index follow"
		| "noindex nofollow"
		| "index nofollow"
		| "noindex follow"
		| "index"
		| "follow";
	children: ReactElement | ReactElement[];
	hero: ReactElement;
	schema: any;
}

const Layout = ({
	canonical,
	children,
	hero,
	image,
	meta,
	og,
	robots,
	schema,
}: iLayout): ReactElement => {
	const theme = true;
	const [isOpenCookiesBox, setIsOpenCookiesBox] = useState(true);
	const [isOpenCookiesPrefferences, setIsOpenCookiesPrefferences] =
		useState(false);
	const { nav, footer, settings, socials } = menu.pl;
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				{canonical && (
					<>
						<link rel="canonical" href={canonical} />
						<meta property="og:url" content={canonical} />
					</>
				)}
				<meta name="robots" content={robots ? "index follow" : robots} />
				<meta property="og:type" content={og.type} />
				<meta property="og:title" content={og.title} />
				<meta property="og:description" content={og.description} />
				<meta property="og:image" content={image} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<script
					key="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			</Head>
			<>
				<header className={styles.header}>
					<Navigation menu={nav} />
					<>{hero}</>
				</header>
				<>{children}</>
				<Footer
					author={`RadWEB &copy; ${new Date().getFullYear()}`}
					brand="RadWEB"
					content={`RadWEB oferuje projektowanie i tworzenie funkcjonalnych stron internetowych oraz aplikacji. Nasza oferta obejmuje także usługi z zakresu pozycjonowania stron i copywritingu. Skontaktuj się z nami, a pomożemy Ci wyróżnić się w internecie!`}
					email="radoslaw.adamczyk2000@gmail.com"
					location="Donatowo 53, 64-020 Czempiń"
					menu={footer}
					phone="+48 794-100-413"
					socials={socials}
					settings={settings}
				/>
			</>
			<>
				<CookiesBox
					info={{
						title: `Informacja o prywatności plików cookies`,
						content: `Ta strona korzysta z plików cookie, aby poprawić wrażenia podczas przeglądania witryny. Część plików cookies, które są sklasyfikowane jako niezbędne, są przechowywane w przeglądarce, ponieważ są konieczne do działania podstawowych funkcji witryny.
						Używamy również plików cookies stron trzecich, które pomagają nam analizować i zrozumieć, w jaki sposób korzystasz z tej witryny. Te pliki cookies będą przechowywane w przeglądarce tylko za Twoją zgodą. Możesz również z nich zrezygnować, ale rezygnacja z niektórych z tych plików może mieć wpływ na wygodę przeglądania.
						<br/>
						<br/>
						Klikając „Przejdź do serwisu” udzielasz zgody na przetwarzanie Twoich danych osobowych dotyczących Twojej aktywności na naszej stronie. Dane są zbierane w celach zgodnych z naszą polityką prywatności oraz polityką cookies. Zgoda jest dobrowolna. Możesz jej odmówić lub ograniczyć jej zakres klikając w "Preferencje cookies".
						W każdej chwili możesz modyfikować udzielone zgody w zakładce: informacje i regulaminy — zresetuj ustawienia cookies.`,
						buttons: [
							{
								handle: () => setIsOpenCookiesPrefferences(true),
								title: "Preferencje cookies",
							},
							{
								handle: () => setIsOpenCookiesBox(false),
								title: "Przejdź do serwisu",
							},
						],
					}}
					isOpenCookiesBox={isOpenCookiesBox}
					isOpenCookiesPrefferences={isOpenCookiesPrefferences}
					preferrences={{
						title: "Rodzaje plików cookies używanych w serwisie",
						content: `Dane są zbierane w celach zgodnych z naszą polityką prywatności. Zgoda jest dobrowolna. Możesz jej odmówić lub ograniczyć jej zakres.

						W każdej chwili możesz modyfikować udzielone zgody w zakładce: informacje i regulaminy — zresetuj ustawienia cookies.`,
						buttons: [
							{
								handle: () => {},
								title: "Nie wyrażam zgody",
							},
							{
								handle: () => setIsOpenCookiesBox(false),
								title: "Włącz wszystkie i przejdź do serwisu",
							},
						],
						permissions: [
							{
								content: `Przyczyniają się do użyteczności strony poprzez umożliwianie podstawowych funkcji takich jak nawigacja na stronie i dostęp do bezpiecznych obszarów strony internetowej. Strona internetowa nie może funkcjonować poprawnie bez tych ciasteczek.`,
								name: "necessary",
								title: "Niezbędne",
								isChecked: true,
							},
							{
								content: `Umożliwiają Serwisowi zapamiętanie informacji, które zmieniają wygląd lub funkcjonowanie Serwisu, np. preferowany język lub region w którym znajduje się Użytkownik.`,
								name: "preferential",
								title: "Preferencyjne",
							},
							{
								content: `Pomagają zrozumieć, w jaki sposób różni Użytkownicy Serwisu zachowują się na stronie, gromadząc i zgłaszając anonimowe informacje.`,
								name: "statistical",
								title: "Statystyczne",
							},
						],
					}}
				/>
			</>
		</>
	);
};
export default Layout;
