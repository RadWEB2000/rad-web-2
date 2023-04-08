import {
	createContext,
	MouseEventHandler,
	ReactElement,
	useEffect,
	useState,
} from "react";
import CookiesBox from "../components/Layout/Cookies/CookiesBox/CookiesBox";
import { theme, TypeThemeValue } from "../data/theme";
// import { theme, TypeThemeValue } from "../../data/utils/theme";

interface iLayoutContext {
	menu: {
		close: MouseEventHandler;
		handle: MouseEventHandler;
		isOpen: boolean;
	};
	cookies: {
		open: MouseEventHandler;
	};
	theme: {
		handle: MouseEventHandler;
		isLight: boolean;
	};
	scroll: boolean;
}

interface iLayoutProvider {
	children: ReactElement;
	time: string;
}

export const LayoutContext = createContext<iLayoutContext>({
	menu: {
		close: () => {},
		handle: () => {},
		isOpen: false,
	},
	cookies: {
		open: () => {},
	},
	theme: {
		handle: () => {},
		isLight: true,
	},
	scroll: false,
});

export const LayoutProvider = ({
	children,
	time,
}: iLayoutProvider): ReactElement => {
	const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [isScrolled, updateIsScrolled] = useState<boolean>(false);
	const { dark, light } = theme;
	const getThemeVariant: TypeThemeValue = isLightTheme ? light : dark;
	useEffect(() => {
		if (window !== undefined) {
			window.addEventListener("scroll", () => {
				if (window.scrollY >= 150) {
					updateIsScrolled(true);
				} else {
					updateIsScrolled(false);
				}
			});
		}
	}, []);

	useEffect(() => {
		if (parseInt(time) >= 20 && parseInt(time) < 6) {
			return setIsLightTheme(false);
		} else {
			return setIsLightTheme(true);
		}
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		Object.keys(getThemeVariant).forEach((key) => {
			const val = getThemeVariant[key];
			root.style.setProperty(`--${key}`, val);
		});
	}, [isLightTheme]);
	const [isOpenCookiesBox, setIsOpenCookiesBox] = useState(true);
	const [isOpenCookiesPrefferences, setIsOpenCookiesPrefferences] =
		useState(false);
	return (
		<LayoutContext.Provider
			value={{
				menu: {
					close: () => setIsOpenMenu(false),
					handle: () => setIsOpenMenu(!isOpenMenu),
					isOpen: isOpenMenu,
				},
				cookies: {
					open: () => setIsOpenCookiesBox(true),
				},
				theme: {
					handle: () => setIsLightTheme(!isLightTheme),
					isLight: isLightTheme,
				},
				scroll: isScrolled,
			}}
		>
			<>{children}</>
			{/* <>
				{isOpenCookiesBox && (
					<CookiesBox
						info={{
							title: `Informacja o prywatności plików cookies`,
							content: `Ta strona korzysta z plików cookie, aby poprawić wrażenia podczas przeglądania witryny. Część plików cookies, które są sklasyfikowane jako niezbędne, są przechowywane w przeglądarce, ponieważ są konieczne do działania podstawowych funkcji witryny.
						Używamy również plików cookies stron trzecich, które pomagają nam analizować i zrozumieć, w jaki sposób korzystasz z tej witryny. Te pliki cookies będą przechowywane w przeglądarce tylko za Twoją zgodą. Możesz również z nich zrezygnować, ale rezygnacja z niektórych z tych plików może mieć wpływ na wygodę przeglądania.
						<br/>
						<br/>
						Klikając „Przejdź do serwisu” udzielasz zgody na przetwarzanie Twoich danych osobowych dotyczących Twojej aktywności na naszej stronie. Dane są zbierane w celach zgodnych z naszą polityką prywatności oraz polityką cookies. Zgoda jest dobrowolna.
						W każdej chwili możesz sprawdzić naszą <a href="/polityka-cookies">politykę cookies</a>`,
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
									title: "Przejdź do serwisu",
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
				)}
			</> */}
		</LayoutContext.Provider>
	);
};
