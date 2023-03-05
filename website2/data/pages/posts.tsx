interface intPosts {
	en: any;
	es: any;
	pl: {
		articles: {
			seo: {
				image: string;
				meta: {
					description: string;
					title: string;
				};
				og: {
					description: string;
					title: string;
				};
			};
			author: "adamczyk_radoslaw" | "bukowiecki_filip" | "paluch_klaudia";
			path: string;
			slug: string;
			url: string;
			title: string;
			breadcrumbs: {
				path: string;
				title: string;
			}[];
			hero: {
				date: string;
				excerpt: string;
				image: string;
				lang: string;
				readingTime: string | number;
				title: string;
			};
			content: string;
			summary?: {
				title: string;
				content?: string;
				list?: string[];
				visible: boolean;
			};
		}[];
	};
}
export const posts: intPosts = {
	en: {},
	es: {},
	pl: {
		articles: [
			{
				seo: {
					image:
						"https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
					meta: {
						description: ``,
						title: `Historia i rozwój HTML, Programowanie - RadWEB`,
					},
					og: {
						description: `Poznaj historię oraz rozwój najważniejszej technologii webowej jaką jest HTML.`,
						title: `Rozwój i historia języka HTML - RadWEB`,
					},
				},
				author: "adamczyk_radoslaw",
				url: "https://rad-web.vercel.app",
				path: "/blog/programowanie/czym-jest-html-historia-i-rozwoj",
				slug: "czym-jest-html-historia-i-rozwoj",
				title: "Czym jest HTML? - historia i rozwój",
				breadcrumbs: [
					{
						path: "/blog",
						title: "blog",
					},
					{
						path: "/blog/programowanie",
						title: "programowanie",
					},
				],
				hero: {
					date: "Thu Feb 23 2023 20:22:38 GMT+0100 (czas środkowoeuropejski standardowy)",
					excerpt:
						"Język HTML to najczęściej spotykany język w internecie. To nim bazują wszystkie strony oraz aplikacje internetowe. Jest on najbardziej niedocenianym, a jednocześnie sprawiającym najwięcej problemów  językiem spośród wszystkich języków webowych.",
					image:
						"https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
					lang: "pl",
					readingTime: "10",
					title: "Czym jest HTML? - historia i rozwój",
				},
				content: `	<b style="font-weight:700">Język HTML to najczęściej spotykany język w internecie. To nim bazują wszystkie strony oraz aplikacje internetowe. Jest on najbardziej niedocenianym, a jednocześnie sprawiającym najwięcej problemów językiem spośród wszystkich języków webowych.</b><h2>Czy HTML jest językiem programowania?</h2>
			
				<p>Zanim odpowiem na to, czy HTML jest językiem programowania, w pierwszej kolejności należy zdefiniować, czym jest język programowania. Język programowania jest sztucznie wytworzonym językiem, kt&oacute;ry jest stosowany do wytwarzania oprogramowania, takiego jak strony internetowe, aplikacje internetowe, zaplecze logistyczne bankowości oraz gry.&nbsp;Każdy język programowania, podobnie jak języki obce, mają określoną składnię (z ang. syntax) oraz działają na r&oacute;żnej powłoce.</p>
				
				<p>Aby dany język m&oacute;gł być nazwanym językiem programowania, musi zawierać własną składnię (może być podobna do składni innych język&oacute;w, dobrym przykładem jest tutaj Java oraz C#), semantykę, czyli zasady, w jaki spos&oacute;b tworzy się konstrukcje językowe. Ponadto taki język musi być interpretowany (podobnie jak JavaScript jest interpretowany przez przeglądarkę internetową) lub interpretowany. Na koniec zaś musi oferować wiele funkcjonalności jak na przykład operowanie na danych, kt&oacute;re umożliwiają tworzenie złożonych program&oacute;w.</p>
				<p>W związku z powyższą definicją tego, czym jest język programowania, jasno można stwierdzić, że&nbsp;HTML nie jest językiem programowania. HTML jest językiem opisowym, ponieważ nie posiada w sobie funkcjonalności dotyczących operowania danymi, a jedynie jest furtką m.in. dla PHP i JavaScript, kt&oacute;ra umożliwia manipulację danymi.</p>
				<h2>HyperText Markup Language (HTML) - założyciel oraz podstawowe cele</h2>
				<p>HyperText Markup Language, to w wolnym tłumaczeniu to hipertekstowy język znacznik&oacute;w, powszechniej znany pod swoim skr&oacute;tem, czyli HTML. HTML został opracowany już w latach 90. XX wieku przez pioniera usług internetowych i założyciela World Wide Web Consortium, Sir Timothy&rsquo;ego John Berners&rsquo;a Lee.&nbsp;Pierwsza wersja tego języka opisowego została opublikowana w 1995 roku pod nazwą HTML 2.0.</p>
				<p>HTML jest wykorzystywany do definiowania z użyciem znacznik&oacute;w struktury stron internetowych. Znaczniki te definiują jakie elementy mają być wyświetlane na stronie, może to być zar&oacute;wno akapit tekstu, grafiki, jak i formularze.&nbsp;</p>
				<p>Dzięki zaimportowaniu do pliku HTML zar&oacute;wno CSS, jak i JavaScript, można tworzyć zaawansowane animacje i pełną walidację formularzy, na przykład formularzy kontaktowych.</p>
				<h2>HTML 2.0 - pierwsza wersja hipertekstowego języka znacznik&oacute;w</h2>
				<p>HTML 2.0 według&nbsp;<a href="https://www.w3.org/MarkUp/html-spec/">swojej specyfikacji</a> jest prostym językiem znacznik&oacute;w do generowania dokument&oacute;w tekstowych, kt&oacute;re są niezależne od platformy, a więc śmiało powiedzieć, że był pomysłodawcą rozwiązań multiplatformowych, takich jak Electron.js lub Flutter.&nbsp;</p>
				<p>Dokumenty HTML są dokumentami SGML, czyli standardowo uog&oacute;lnionym językiem znacznik&oacute;w służącym do ujednolicania struktur i format&oacute;w r&oacute;żnego rodzaju danych odpowiednio przygotowane do reprezentowania ich z bardzo szerokiego wachlarzu domen. Wersja ta była już używana od czerwca 1994 roku w wersji eksperymentalnej o&nbsp;normie ISO 8879:1986.</p>
				<p>Oto przykłady znacznik&oacute;w, kt&oacute;re zostały wprowadzone wraz z HTML 2.0:</p>
				<ul>
					<li>
						<b>&lt;html&gt;&nbsp;</b>- dokument HTML,
					</li>
					<li>
						<b>&lt;head&gt;&nbsp;</b>- w środku tego tagu są określane m.in. zaimportowane arkusze styli CSS, jak i znaczniki bardzo istotne dla pozycjonowania,
					</li>
					<li>
						<b>&lt;title&gt;&nbsp;</b>- określa tytuł strony
					</li>
					<li>
						<b>&lt;body&gt;&nbsp;</b>- zawartość strony
					</li>
					<li>
						<b>&lt;h1&gt; - &lt;h6&gt;&nbsp;</b>- nagł&oacute;wki
					</li>
					<li>
						<b>&lt;p&gt;&nbsp;</b>- akapit&nbsp;(paragraph)
					</li>
					<li>
						<b>&lt;a&gt;&nbsp;</b>- link&nbsp;(anchor)
					</li>
					<li>
						<b>&lt;img&gt;&nbsp;</b>- obrazek, zdjęcie
					</li>
					<li>
						<b>&lt;ul&gt;&nbsp;</b>- lista nieuporządkowana (unordered list)
					</li>
					<li>
						<b>&lt;ol&gt;&nbsp;</b>- lista uporządkowana (ordered list)
					</li>
					<li>
						<b>&lt;li&gt;&nbsp;</b>- element listy,
					</li>
					<li>
						<b>&lt;table&gt;&nbsp;</b>- tabela,
					</li>
					<li>
						<b>&lt;tr&gt;&nbsp;</b>- wiersz tabeli,
					</li>
					<li>
						<b>&lt;td&gt;&nbsp;</b>- kom&oacute;rka tabeli,
					</li>
					<li>
						<b>&lt;br&gt;&nbsp;</b>- przerwa w linii oraz rozpoczęcie nowego akapitu,
					</li>
					<li>
						<b>&lt;hr&gt;&nbsp;</b>- linia pozioma,
					</li>
					<li>
						<b>&lt;form&gt;&nbsp;</b>- formularz,
					</li>
					<li>
						<b>&lt;input&gt;&nbsp;</b>- pole formularza do wprowadzania danych,
					</li>
					<li>
						<b>&lt;textarea&gt;&nbsp;</b>- pole tekstowe formularza,
					</li>
					<li>
						<b>&lt;select&gt;&nbsp;</b>- lista wyboru
					</li>
					<li>
						<b>&lt;option&gt;&nbsp;</b>- opcja do wybrania w liście wyboru,
					</li>
					<li>
						<b>&lt;button&gt;&nbsp;</b>- przycisk,
					</li>
					<li>
						<b>&lt;label&gt;&nbsp;</b>- etykieta formularza,
					</li>
					<li>
						<b>&lt;fieldset&gt;&nbsp;</b>- ramka formularza,
					</li>
					<li>
						<b>&lt;legend&gt;&nbsp;</b>- tytuł ramki formularza,
					</li>
					<li>
						<b>&lt;address&gt;&nbsp;</b>- dane teleadresowe,
					</li>
					<li>
						<b>&lt;pre&gt;&nbsp;</b>- niesformatowany tekst,
					</li>
				</ul>
				<p>Warto r&oacute;wnież wspomnieć, że w tej wersji, jak i w kilku następnych znaczniki definiowało się z użyciem dużych liter, np.&nbsp;&lt;BODY&gt;, gdzie dziś regułą są ww. tagi.</p>
				<h2>Warto postawić na rozw&oacute;j &mdash; HTML 3.2</h2>
				<p>Wersja HTML 3.2 ustandaryzowana pod nadzorem World Wide Web Consortium (W3C) i została opublikowana w styczniu 1997 roku. Była to pierwsza specyfikacja HTML opublikowana przez W3C po przejęciu odpowiedzialności za język przez&nbsp;HTML Working Group of the Internet Engineering Task Force (IEFT).</p>
				<p>Moim zdaniem najważniejszą innowacją tejże wersji było wprowadzenie dw&oacute;ch tag&oacute;w:</p>
				<ul>
					<li>
						<b>&lt;div&gt;&nbsp;</b>- znacznik HTML grupujący elementy wewnątrz niego wraz z&nbsp;atrybutem class&nbsp;przeznaczony do identyfikacji tzw. kontener&oacute;w, czyli sekcji strony, czy też załącznik&oacute;w.
					</li>
					<li>
						<b>&lt;applet&gt;&nbsp;</b>- element służący do uruchamiania niewielkich program&oacute;w w języku Java do uruchamiania w przeglądarce internetowej lub na wirtualnych maszynach. Niestety wraz z HTML 4.0 ten tag został zastąpiony tagiem&nbsp;&lt;object&gt;.
					</li>
				</ul>
				<p>HTML 3.2 był szeroko używany już pod koniec lat 90. XX wieku, a strony działające na tej wersji HTML-a nadal można znaleźć w internecie, aczkolwiek coraz trudniej o to.</p>
				<p>W HTML 3.2 coraz ważniejszą rolę odgrywały tabele, kt&oacute;re w stosunku do poprzedniej wersji były czytelniejsze oraz oferowały zaawansowane opcje. Rewolucją zaś była możliwość obsługi kolor&oacute;w oraz możliwość&nbsp;zarządzania elementami DOM (ang. Document Object Model)&nbsp;za pomocą nowych atrybut&oacute;w, co poszerzyło znacząco opcjonalny zakres użycia JavaScript, czego dobrym przykładem jest obsługa zdarzeń.</p>
				<h2>Bez wykluczeń w internecie &mdash; HTML 4.0</h2>
				<p>Ważnym kamieniem milowym internetu był&nbsp;opublikowany 19 grudnia 1996 roku HTML 4.0 jako rekomendacja W3C. Można powiedzieć, że to on zrewolucjonizował świat web i wraz z tą wersją HTML stał się dojrzałym językiem stron internetowych.</p>
				<p>World Wide Web Consortium wraz z wydaniem HTML 4.0 zaoferowało trzy wydania:</p>
				<ul>
					<li>
						<b>Strict</b>, w kt&oacute;rym stosowanie element&oacute;w uznanych za przestarzałe było zabronione,
					</li>
					<li>
						<b>Transitional</b>, wydanie gdzie stosowanie przestarzałych element&oacute;w było dopuszczalne, aczkolwiek nierekomendowane (podobnie jak deklarowanie zmiennych z użyciem var w JavaScript)
					</li>
					<li>
						<b>Frameset</b>, w kt&oacute;rym dopuszczone są gł&oacute;wnie elementy związane z ramkami.
					</li>
				</ul>
				<p>HTML 4.0 posiada wiele cech wsp&oacute;lnych z poprzednimi wersjami omawianego w tym artykule języka. Co ważniejsze wprowadził też wiele innowacji:</p>
				<ul>
					<li>
						rozbudowane opcje multimedialne,
					</li>
					<li>
						skrypty, gł&oacute;wnie języka JavaScript,
					</li>
					<li>
						obsługa kaskadowych arkuszy styli
					</li>
					<li>
						poprawiona możliwość drukowania stron internetowych
					</li>
					<li>
						dokumenty HTML stały się bardziej dostępne dla użytkownik&oacute;w z niepełnosprawnościami
					</li>
				</ul>
				<p>Niestety, nie wszystko, co zalecało W3C w grudniu 1996 roku było dopracowane. &Oacute;wcześni programiści, kt&oacute;rzy poddali ogromnej krytyce błędy tejże wersji, autorzy 24 grudnia 1999 roku opublikowali łatkę HTML 4.01.&nbsp;</p>
				<h3>Dostępne strony internetowe &mdash; Accesbility w HTML 4.0</h3>
				<p>Wraz ze wzrostem użytkownik&oacute;w stron internetowych wzrosło zapotrzebowanie na dostępne strony internetowe. Sam termin dostępność słusznie kojarzy się z przystosowaniem strony internetowych pod osoby niepełnosprawne, np. dla niewidomych. To jest dobre określenie, jednak nie pełne, ponieważ&nbsp;wzorowa dostępność stron internetowych to nie wykluczanie z żadnej grupy w swoim serwisie.</p>
				<p>Od 23 września 2020 roku strony internetowe podmiot&oacute;w publicznych na podstawie dyrektywy Omnibus Unii Europejskiej. A więc sama dostępność stron internetowych jest czymś, co powinno zainteresować wszystkich, zar&oacute;wno programist&oacute;w, kt&oacute;rzy tworzą nowe strony internetowe, jak i właścicieli już wieloletnich serwis&oacute;w www.</p>
				<b style="font-weight:700">Innowatorem wdrażania dostępnych stron internetowych było HTML 4.0, kt&oacute;re oferowało:</b>
				<ul>
					<li>
						rozr&oacute;żnienie między samym dokumentem a prezentacją treści zawartych w dokumencie, poprzez stosowanie arkuszy styli zamiast element&oacute;w i atrybut&oacute;w styli,
					</li>
					<li>
						semantyczne grupowanie element&oacute;w zawartych w polu formularza &lt;select&gt; oraz bardziej intuicyjne wybieranie interesującej użytkownika opcji z danego formularza,
					</li>
					<li>
						definiowanie opis&oacute;w, kt&oacute;re były zawarte w tagu &lt;object&gt;
					</li>
					<li>
						internacjonalizację stron i link&oacute;w z użyciem atrybuty lang
					</li>
					<li>
						tworzenie tekst&oacute;w alternatywnych (alt) dla zdjęć w tagu &lt;img&gt;, co miało podpowiedzieć osobom niedowidzącym oraz użytkownik&oacute;w, kt&oacute;rym zdjęcie się nie wczytało, co znajdowało się na grafice
					</li>
					<li>
						lepsze wsparcie dla akronim&oacute;w dzięki zaimplementowaniu tagu &lt;acronym&gt;
					</li>
					<li>
						dłuższe opisy tabeli, zdjęć oraz treści osadzonych w znaczniku &lt;iframe&gt;
					</li>
				</ul>
				<h3>Uproszczone stylowanie stron internetowych - arkusze styli w HTML 4.0</h3>
				<p>W poprzednich wersjach HTML deklarowanie styli odbywało się wewnątrz dokumentu, co znacząco zmniejszało czytelność kodu takiej strony internetowej. W odpowiedzi na zapotrzebowanie programist&oacute;w&nbsp;organizacja W3C, umożliwiła importowanie styli z dedykowanych plik&oacute;w CSS&nbsp;oraz poszerzyła możliwości definiowania wyglądu tag&oacute;w HTML.</p>
				<p>Sama organizacja stwierdziła, że nadawanie wyglądu z użyciem atrybut&oacute;w jest nierekomendowane i przestarzałe, co podlegało&nbsp;wydaniu Strict HTML 4.0.</p>
				<h2>Przyjazne strony internetowe - HTML5</h2>
				<p>Prace nad najnowszą i obecnie stosowaną wersją HyperText Markup Language jest opublikowany 28 października 2014 roku HTML5. Wydana specyfikacja wprowadziła wiele innowacji, takich jak obsługa film&oacute;w i dźwięku, manipulowanie elementami, poprzez przenoszenie oraz upuszczanie ich, obsługę oraz prostą walidację formularzy, a także tworzenie stron przystosowanych do urządzeń mobilnych.</p>
				<h3>Nowe tagi semantyczne w HTML 5</h3>
				<p>Strony napisane w HTML 4.0 i 4.1 były podatne na zjawisko nadmiernego stosowania znacznika &lt;div&gt;. Dla programist&oacute;w oraz&nbsp;<a href="https://rad-web.vercel.app/blog/programowanie/robots-txt-jak-przejac-kontrole-nad-robotami-wyszukiwarek">robot&oacute;w wyszukiwarek</a> było trudne do rozr&oacute;żnienia, w jakiej obecnie sekcji strony się znajdują. Na pomoc przyszły tzw. znaczniki semantyczne, kt&oacute;re klarowniej określały elementy strony.&nbsp;Oto kilka przykład&oacute;w:</p>
				<ul>
					<li>
						&lt;nav&gt;
					</li>
					<li>
						&lt;menu&gt;
					</li>
					<li>
						&lt;header&gt;&nbsp;
					</li>
					<li>
						&lt;footer&gt;
					</li>
					<li>
						&lt;aside&gt;
					</li>
					<li>
						&lt;article&gt;
					</li>
					<li>
						&lt;section&gt;
					</li>
					<li>
						&lt;blockquote&gt;
					</li>
				</ul>
				<p>Dziś poprawne stosowanie tag&oacute;w semantycznych jest jednym z ważnych element&oacute;w do osiągnięcia sukcesu w pozycjonowaniu stron internetowych. W celu dokładniejszego określenia użytkownikom, szczeg&oacute;lnie internautom z niepełnosprawnościami, gdzie się obecnie znajdują jest wykorzystanie atrybutu aria-label, kt&oacute;ry może być odczytany przez czytniki.</p>
				<h3>Sprawdź formularze &mdash; walidacja formularzy w HTML 5</h3>
				<p>Jedną z najważniejszych możliwości przekazywania informacji między użytkownikiem a właścicielem strony internetowej lub serwery są formularze.&nbsp;<b style="font-weight:700">Dotychczasowo strony www obsługiwały jedynie kilka rodzaj&oacute;w p&oacute;l formularza:</b></p>
				<ul>
					<li>
						<b>text&nbsp;</b>- pole do wprowadzania kr&oacute;tkich wartości tekstowych
					</li>
					<li>
						<b>checkbox&nbsp;</b>- pole wielokrotnego wyboru
					</li>
					<li>
						<b>radio&nbsp;</b>- pole jednokrotnego wyboru
					</li>
					<li>
						<b>textarea&nbsp;</b>- pole do wprowadzania dłuższych wartości tekstowych
					</li>
					<li>
						<b>select&nbsp;- &nbsp;</b>- pole z listą opcji wielokrotnego lub jednokrotnego wyboru
					</li>
					<li>
						<b>file&nbsp;</b>- pole do wybierania plik&oacute;w z dysku
					</li>
				</ul>
				<b style="font-weight:700">Wraz z rozwojem potrzeb i usług internetowych, zrodziła się potrzeba zwiększenia typ&oacute;w p&oacute;l formularza.&nbsp;Obecnie HTML 5 oferuje następujące typy p&oacute;l formularza:</b>
				<ul>
					<li>
						<b>email&nbsp;</b>- pole do wprowadzania adres&oacute;w email
					</li>
					<li>
						<b>url&nbsp;</b>- element formularza do wprowadzania adres&oacute;w URL
					</li>
					<li>
						<b>number&nbsp;</b>- pole formularza do wprowadzania wartości liczbowych
					</li>
					<li>
						<b>date&nbsp;</b>- pole do wprowadzania daty
					</li>
					<li>
						<b>time&nbsp;</b>- jak nazwa sugeruje, to pole służy do wprowadzania godziny
					</li>
					<li>
						<b>tel&nbsp;</b>- typ służący do wprowadzania numer&oacute;w telefon&oacute;w
					</li>
					<li>
						<b>search&nbsp;</b>- typ pola formularza stosowany do tworzenia wyszukiwarek wewnątrz stron www i aplikacji webowych
					</li>
					<li>
						<b>color&nbsp;</b>- proste pole formularza do wybierania kolor&oacute;w w formacie HEX, rgb oraz hsl
					</li>
					<li>
						<b>range&nbsp;</b>- pole do wybierania wartości z wcześniej zdefniowanego zakresu
					</li>
				</ul>
				<b style="font-weight:700">Poza rozbudowanymi typami p&oacute;l formularza, HTML 5 wdrożylo prostą walidację wprowadzanych danych z użyciem łatwych w ubsłudze atrybut&oacute;w:</b>
				<ul >
					<li>
						<b>pattern&nbsp;</b>- określenie wzorca, w jaki spos&oacute;b użytkownik powinien uzupełnić dane
					</li>
					<li>
						<b>require&nbsp;</b>- zdefniowanie, czy ten element formularza musi być obowiązkowo uzupełniony przez użytkownika strony
					</li>
					<li>
						<b>min&nbsp;</b>- określenie ile minimalnie znak&oacute;w powinno znajdować się w polu
					</li>
					<li>
						<b>max&nbsp;</b>- określenie ile maksymalnie znak&oacute;w powinno znajdować się w polu
					</li>
				</ul>
				<p>Wisienką na torcie w związku z nowościami wdrożonymi nt. formularzy była możliwość dostosowania ich, aby każdy bez mniejszych, czy też większych problem&oacute;w m&oacute;gł go uzupełnić. Dobrym przykładem takiego usprawnienia jest atrybut placeholder, gdzie możemy wskazać użytkownikowi jakich informacji od niego oczekujemy, lub też umożliwienie szybkiego uzupełnienia danych na podstawie zebranych danych przez przeglądarkę, dzięki atrybutowi autocomplete.</p>
				<h3>Rewolucja internetowa na urządzeniach mobilnych</h3>
				<p>Nie ma technologii idealnych, i HTML do nich też należy. Wszystkie wersji do 5.0 miały spore problemy do wygodnego dostosowania stron pod urządzenia mobilne bez potrzeby kreowania nowych subdomen.</p>
				<p>W październiku 2014 roku, czyli wtedy gdy HTML 5 był publikowany, na świecie święciły triumfy mobilne systemy operacyjne, takie jak Android oraz iOS, co przełożyło się na większą ilość internaut&oacute;w korzystających z telefon&oacute;w.</p>
				<p>Problemem, przed kt&oacute;rym stanęli programiści, było wygodne tworzenie responsywnyh stron internetowych, nie zależnie od wielkości ekran&oacute;w, na kt&oacute;rych były wyświetlane strony internetowe.</p>
				<p>Na pomoc nadszedł meta tag, kt&oacute;ry dzięki jednej linijce kodu umożliwa proste i przyjemne tworzenie stron internetowych w standardach RWD.</p>
				<pre>&lt;meta name=&rdquo;viewport&rdquo; content=&rdquo;width=device-width, initial scale=1.0&rdquo;&gt;</pre>
				<h2>Przyszłość stron internetowych - HTML 5 czy HTML 6?</h2>
				<p>Od momentu wdrożenia przez World Wide Web Consortioum HTML 5, W3C zacząło stosować zupełnie inny model wydawania specyfikacji HTML. Zamiast publikowania pojedynczych wersji, kt&oacute;re dokonywały kopernikańskich przewrot&oacute;w, zdecydowano się na systematyczne dodawanie nowych aktualizacji w ramach HTML Living Standard.</p>
				<p>Oznacza to, że oczekiwane uaktualnienia w HyperText Markup Language pojawiają się znacznie częściej (średnio raz na rok). Ostatnią wielką aktualizacją HTML-a było wdrożenie Web Components, kt&oacute;re umożliwiają prostsze tworzenie rozbudowanych interfejs&oacute;w z użyciem element&oacute;w, zgodnie z zasadami OOP, czyli zasadami programowania obiektowego.</p>
				<p>Obecnie największymi priorytetami W3C są rozwiązania związane z urządzeniami mobilnymi i technologiami adaptacyjnymi, zwiększanie accesbility stron internetowych oraz upraszczanie kodu dla obecnych i przyszłych programist&oacute;w.</p>
				<p>Czy będzie kiedyś opublikowany HTML 6? Nie można tego wykluczyć. Teoretycznie&nbsp;<a href="https://rad-web.vercel.app/blog/programowanie/fenomen-windowsa">ostatnim Windowsem</a> miał być Windows 10, jednakże wszyscy dobrze wiemy, że tak nie jest. Mam nadzieję, że ten język będzie się rozwijał nadal w takim samym tempie przez długie lata. Co przyniesie przyszłość? Tego nie wie nikt, ale mam nadzieję, że dożyjemy kolejnej internetowej rewolucji, kt&oacute;rą zaserwuje HTML.</p>
				<b style="font-weight:700">Jeśli chcesz być na bieżąco z nowościami z zakresu programowania lub pozycjonowania stron internetowych warto śledzić&nbsp;<a href="https://rad-web.vercel.app/">blog serwisu RadWEB</a>. Zapraszamy!</b>`,
				summary: {
					title: "",
					content: ``,
					list: [],
					visible: false,
				},
			},
			{
				seo: {
					image:
						"https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
					meta: {
						description: `Roboty wyszukiwarek internetowych pracują dzień i noc, jednak czy można je kontrolować? Zapraszam`,
						title: `Robots.txt i kontrola nad robotami wyszukiwarek - RadWEB`,
					},
					og: {
						description: `Roboty wyszukiwarek internetowych pracują dzień i noc, jednak czy można je kontrolować? Zapraszam`,
						title: `Robots.txt i kontrola nad robotami wyszukiwarek - RadWEB`,
					},
				},
				author: "adamczyk_radoslaw",
				url: "https://rad-web.vercel.app/blog/programowanie/robots-txt-jak-przejac-kontrole-nad-robotami-wyszukiwarek",
				path: "/blog/programowanie/robots-txt-jak-przejac-kontrole-nad-robotami-wyszukiwarek",
				slug: "robots-txt-jak-przejac-kontrole-nad-robotami-wyszukiwarek",
				title: "Robots.txt — Jak przejąć kontrolę nad robotami wyszukiwarek?",
				breadcrumbs: [
					{
						path: "/blog",
						title: "blog",
					},
					{
						path: "/blog/programowanie",
						title: "programowanie",
					},
				],
				hero: {
					date: "Sun Oct 02 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)",
					excerpt:
						"Od końca lat 60. XX wieku, czyli od momentu stworzenia internetu powstało prawie 2 miliardy stron internetowych. Sporo. W związku z tym, kiedy internet stał się globalnym dobrem, stworzono programy — roboty wyszukiwarek, które miały i mają nadal za zadanie skanować wszystkie strony internetowe w ramach wyszukiwarki internetowej oraz filtrować je. Po przefiltrowaniu stron boty wyszukiwarek sortują strony internetowe w swoim rankingu. Czym są roboty wyszukiwarek? Jak zarządzać nimi? Szczegóły poznasz poniżej.",
					image:
						"https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
					lang: "pl",
					readingTime: "6",
					title: "Robots.txt — Jak przejąć kontrolę nad robotami wyszukiwarek?",
				},
				content: `
				<b style="font-weight:700">Od końca lat 60. XX wieku, czyli od momentu stworzenia internetu powstało prawie 2 miliardy stron internetowych. Sporo. W związku z tym, kiedy internet stał się globalnym dobrem, stworzono programy — roboty wyszukiwarek, które miały i mają nadal za zadanie skanować wszystkie strony internetowe w ramach wyszukiwarki internetowej oraz filtrować je. Po przefiltrowaniu stron boty wyszukiwarek sortują strony internetowe w swoim rankingu. Czym są roboty wyszukiwarek? Jak zarządzać nimi? Szczegóły poznasz poniżej.</b>
				<section>
						<h2>Czym są roboty?</h2>
						<p>Każdy z nas słyszał o robotach. To dzieło techniki rozpropagowały filmy z gatunku &bdquo;Ja Robot&rdquo;. Na szerszą, światową skalę roboty pod sformułowaniem droid &mdash; słowo, do kt&oacute;rego Disney/LucasArts posiadają prawa autorskie &mdash; rozpropagowały filmy z sagi &bdquo;Gwiezdne Wojny&rdquo;.</p>
						<h3>Robot &mdash; naukowa definicja</h3>
						<p>Robot to nic innego jak maszyna, bądź też system komputerowy wyposażony w program sterujący peryferiami. To zadanie ma na celu wykonanie wcześniej predefiniowanego zadania, jak chociażby nastawienie prania.</p>
						<h3>Maszyny ze sztuczną inteligencją</h3>
						<p>Wraz z postępem technologicznym roboty są wyposażane, w coraz bardziej zaawansowaną sztuczną inteligencję.&nbsp;<strong>AI, czyli sztuczna inteligencja umożliwia robotom rozwiązywanie często abstrakcyjnych algorytm&oacute;w, trudnych do natychmiastowego wyliczenia dla człowieka.</strong> Dziś każdy, kt&oacute;ry posiada chęć oraz zapał może stworzyć własnego robota, kt&oacute;ry będzie rozwiązywał problemy życia codziennego.</p>
					</section>
					<section>
						<h2>Co to są boty i czym się zajmują?</h2>
						<p><strong>Boty &mdash; skr&oacute;cone, w tym kontekście zamienne słowo dla robota</strong> &mdash; istnieją co najmniej od czasu, kiedy wyprodukowaną pierwszą grę, w kt&oacute;rej musieliśmy zmierzyć się z wirtualnym przeciwnikiem. Dziś tacy wirtualni przeciwnicy wykonujący tysiące obliczeń przed wykonaniem akcji są bliscy wykonywania takich samych akcji, co gracze zasiadający za klawiaturą bohatera.</p>
						<p>W świecie technologii informatycznych&nbsp;<strong>wyraz bot definiuje oprogramowanie &mdash; jak wyżej wykazałem &mdash; kt&oacute;ry ma na celu odwzorować czynności żywego użytkownika</strong>. Jednymi z obecnie najpopularniejszych bot&oacute;w, są chatboty oraz voiceboty, Chatboty można znaleźć dla przykładu w komunikatorach internetowych, takich jak Discord lub Messenger.</p>
					</section>
					<section>
						<h2>Robot internetowy, czyli robot indeksujący</h2>
						<p>Robot internetowy nazywany r&oacute;wnież robotem indeksującym jest oprogramowaniem, kt&oacute;re nieustannie zbiera informacje o:</p>
						<ul>
							<li>strukturze stron internetowych</li>
							<li>treściach stron internetowych</li>
							<li>grafikach i innych rodzajach multimedi&oacute;w</li>
						</ul>
						<p>Należy pamiętać, że przeznaczenie robota determinuje jego zachowanie. Bot odpowiadający za tworzenie bazy kontakt&oacute;w bazujących na adresach e-mail - niezwykle popularny mechanizm przy newsletterach.</p>
					</section>
					<section>
						<h2>Crawlowanie &mdash; Mechanizm działania robot&oacute;w wyszukiwarek na stronach internetowych</h2>
						<p>Zrozumienie działania mechanizmu zachowań robot&oacute;w indeksujących na stronach internetowych jest kluczowy dla pozycjoner&oacute;w i działań SEO. Crawl to proces przeszukiwania internetu mający na celu znaleźć strony internetowe oraz unikalne treści znajdujące się w internecie. Przykładem takich treści mogą być informacje z kraju oraz ze świata, a także grafiki i inne multimedia. Po odnalezieniu plik&oacute;w źr&oacute;dłowych roboty indeksujące skanują pliki.</p>
						<h3>Jakie istnieją rodzaje zachowań robot&oacute;w wyszukiwarek:</h3>
						<ul>
							<li>
								<b>Fresh crawl</b>
								<p>Mechanizm robot&oacute;w wyszukiwarek, kt&oacute;re nawet do kilku razy dziennie weryfikuje zmiany na stronie internetowej.</p>
							</li>
							<li>
								<b>Deep crawl</b>
								<p>Wymusza na robotach indeksujących pobieranie i analizowanie całych witryn internetowych do kilku razy miesięcznie.</p>
							</li>
						</ul>
						<p>Po pozytywnym zakończeniu procesu analizowania strony internetowej przez boty wyszukiwarek możemy oczekiwać, że algorytm wyszukiwarek zaindeksuje adres www.</p>
					</section>
					<section>
						<h2>Canonical &mdash; linki kanoniczne</h2>
						<p>Jedynym z najważniejszych tag&oacute;w (tak są określane znaczniki w HTML) jest meta tag przedstawienia właściciela treści na stronie internetowej. Dlaczego jest to tak istotne? Wyszukiwarki internetowe karzą strony internetowe, kt&oacute;re skopiowały zawartość z innego serwisu lub przedstawiają bardzo podobną zawartość.</p>
						<p>Przykładem, gdzie najczęściej można się spotkać z problemem duplikowania treści, jest paginacja, czyli numerowanie stron z artykułami blogowymi lub produktami w sklepie internetowym, gdzie zmieniają się jedynie posty lub asortyment, ale pozostała zawartość jest bez zmian. Aby uniknąć kary od robot&oacute;w indeksujących, jest poniższy przykład kodu:</p>
						<pre><code>&lt;link rel=&quot;canonical&quot; href=&rdquo;https://www.example.com/adres.php&rdquo; /&gt;<br/>&lt;link rel=&quot;canonical&quot; href=&rdquo;/adres.php&rdquo; /&gt;</code></pre>
					</section>
					<section>
						<h2>Meta robots &mdash; wskazywanie robotom sposobu postępowania</h2>
						<p>Meta robots to kolejny meta tag w tym artykule, z tym że on już konkretnie podaje poniższe polecenia nazywane dyrektywami robotom wyszukiwarek:</p>
						<ul>
							<li><strong>index, follow</strong> &mdash; wszystko zostanie zaindeksowane,</li>
							<li><strong>index</strong> &mdash; strona zostanie zaindeksowana,</li>
							<li><strong>follow</strong> &mdash; zostaną zaindeksowane linki w celu p&oacute;źniejszego - odwiedzenia przez roboty,</li>
							<li><strong>index, nofollow</strong> &mdash; strona zostanie zaindeksowana z wyjątkiem znajdujących się na niej link&oacute;w,</li>
							<li><strong>noindex, follow</strong> &mdash; zostaną zaindeksowane jedynie linki,</li>
							<li><strong>noindex</strong> &mdash; strona nie zostanie zaindeksowana,</li>
							<li><strong>nofollow</strong> &mdash; linki znajdujące się na stronie nie zostaną zaindeksowane,</li>
							<li><strong>noindex, nofollow</strong> &mdash; roboty nic nie będą indeksować</li>
						</ul>
						<p>Warto wiedzieć, że domyślną wartością meta tagu robots jest index,follow.</p>
						<pre><code>&lt;meta name=&rdquo;robots&rdquo; content=&rdquo;index,follow&rdquo; /&gt;</code></pre>
					</section>
					<section>
						<h2>User-Agent, czyli ukryty agent wyszukiwarek internetowych</h2>
						<p>Przed przejściem do konfigurowania już wielokrotnie wspominanego robots.txt należy jeszcze uzupełnić swoją wiedzę o User-Agent, gdzie dalej będę naprzemiennie używał tego sformułowania ze skr&oacute;tem UA. User agent jest nagł&oacute;wkiem identyfikującym, wysyłanym przez protok&oacute;ł HTTP lub aplikację taką jak przeglądarka internetowa albo bot. Służy on do rozpoznawania typu programu klienckiego oraz do budowania statystyk odwiedzin stron internetowych.</p>
						<p>Przykłady najpopularniejszych nagł&oacute;wk&oacute;w UA:</p>
						<ul>
							<li>Googlebot/2.1</li>
							<li>Mozilla/5.0</li>
							<li>Mediapartners-Google/2.1</li>
							<li>JavaX.X.X</li>
						</ul>
					</section>
					<section>
						<h2>Dlaczego powstał i czym jest plik robots.txt ?</h2>
						<p>Robots.txt jest plikiem tekstowym, kt&oacute;ry zazwyczaj powinien się znajdować w gł&oacute;wnym katalogu domeny (/robots.txt). W tym pliku przechowywane są instrukcje i dyrektywy dla robot&oacute;w wyszukiwarek.</p>
						<p>Robots.txt powstał w celu odciążenia witryny z nadmiernej wysyłanych do niej zapytań i obecnie służy do kierowania botami internetowymi odwiedzającymi Twoją stronę internetową.</p>
						<h3>O czym warto pamiętać przy tworzeniu pliku robots.txt?</h3>
						<p>Przy kreowaniu i konfigurowaniu robots.txt warto pamiętać o:</p>
						<ul>
							<li>Algorytmy serwer&oacute;w HTTP są case-sensitive, czyli wrażliwe na wielkość liter. W związku z tym zaleca się, aby plik zawsze nazywał się robots.txt</li>
							<li>Najlepszym narzędziem do diagnostyki jest Google Search Console,</li>
							<li>W pliku robots.txt można r&oacute;wnież wstawiać pomocnicze komentarze. Powinny się one rozpoczynać od&nbsp;<strong># w nowej linii</strong>.</li>
						</ul>
					</section>
					<section>
						<h2>Konfiguracja robots.txt</h2>
						<p>W końcu przechodzimy do sedna artykułu, czyli do konfiguracji robots.txt. Ten plik jest w formacie zwykłego tekstu, zgodnego z Robots Exclusion Protocol.&nbsp;<strong>Powinien on zawierać minimum jedną regułę.</strong></p>
						<ul>
							<li><strong>Allow &mdash; zezwala</strong> <p>robotom indeksującym i botom wyszukiwarek na pobieranie informacji.</p></li>
							<li><strong>Disallow &mdash; blokuje</strong> <p>dostęp do zawartości botom indeksującym i robotom wyszukiwarek.</p></li>
						</ul>
						
						<b>Przy stosowaniu dyrektywy disallow należy pamiętać o tym, że:</b>
						<ul>
							<li><b>disallow: /test -</b> blokuje pliki oraz katalogi zaczynające się od &bdquo;test&rdquo;, dlatego dobrą praktyką jest jeśli chcemy zablokować jedynie do folderu, należy dodać na końcu slash, a więc w rezultacie będzie **disallow: /test/,</li>
							<li><b>disallow: /*htm -</b> blokuje pliki htm oraz pliki html, co dla strony internetowej nigdy nie będzie mądrym rozwiązaniem dla procesu pozycjonowania stron, dlatego, aby zapobiec, warto dodać dyrektywę allow: /*html,</li>
						</ul>
						<h3>Przykładowy plik robots.txt zastosowany w stronach internetowych postawionych na systemach zarządzania WordPress:</h3>
						<pre><code>User-agent: * <br/>Disallow: /wp-admin/ <br/>Allow: /wp-admin/admin-ajax.php<br/>Sitemap: https://example.pll/wp-sitemap.xml</code></pre>
					</section>
					<section>
						<h2>Roboty wyszukiwarek internetowych i plik robots.txt &mdash; Specjaliści RadWEB</h2>
						<p>W filmach Marvela słyszałem, że z wielką mocą wiąże się wielka odpowiedzialność. Możliwość i wiedza na temat kontrolowania robot&oacute;w internetowych jest wielką oraz pożądaną umiejętnością zar&oacute;wno wśr&oacute;d programist&oacute;w, tw&oacute;rc&oacute;w stron internetowych jak i specjalist&oacute;w SEO.</p>
						<p><strong>Dlatego też jeśli masz problem z poprawnym skonfigurowaniem meta tag&oacute;w i pliku odpowiedzialnego za zarządzanie robotami, warto&nbsp;<a href="https://rad-web-ri8u.vercel.app/kontakt">skonsultować się ze specjalistami serwisu RadWEB</a>.</strong></p>
					</section>`,
				summary: {
					title: "",
					content: ``,
					list: [],
					visible: false,
				},
			},
			{
				seo: {
					image:
						"https://images.unsplash.com/photo-1560205000-acffa7fbacb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
					meta: {
						description: `Każdy korzystający z komputera, bądź też laptopa używa systemu operacyjnego. Który jest najpopularniejszy, a który znienawidzony? Zapraszam!`,
						title: `Fenomen i alternatywy dla Windowsa, GNU Linux, OSX - RadWEB`,
					},
					og: {
						description: `Każdy korzystający z komputera, bądź też laptopa używa systemu operacyjnego. Który jest najpopularniejszy, a który znienawidzony? Zapraszam!`,
						title: `Fenomen i alternatywy dla Windowsa, GNU Linux, OSX - RadWEB`,
					},
				},
				author: "adamczyk_radoslaw",
				url: "https://rad-web.vercel.app/blog/programowanie/fenomen-windowsa",
				path: "/blog/programowanie/fenomen-windowsa",
				slug: "fenomen-windowsa",
				title: "Fenomen Windowsa",
				breadcrumbs: [
					{
						path: "/blog",
						title: "blog",
					},
					{
						path: "/blog/programowanie",
						title: "programowanie",
					},
				],
				hero: {
					date: "Sun Jun 05 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)",
					excerpt:
						"W Polsce z komputera korzysta około 85% osób, którzy są sklasyfikowani pomiędzy trzy duże systemy operacyjne: Windows, Linux oraz MacOS. Jednakże w kraju nad Wartą i Wisłą dominują użytkownicy systemu okienkowego, z racji tego że sporo aplikacji biznesowych i gier jest tworzona z myślą o tym systemie. Z zrealizowanej w ubiegłym tygodniu ankiety traktującej o systemach operacyjnych, ze sztandarowego produktu Microsoft korzysta 75% osób, jednakże jedynie 50% użytkowników uważa za swój ulubiony. Dlaczego?",
					image:
						"https://images.unsplash.com/photo-1560205000-acffa7fbacb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
					lang: "pl",
					readingTime: "3",
					title: "Fenomen Windowsa",
				},
				content: `
				<b style="font-weight:700">W Polsce z komputera korzysta około 85% osób, którzy są sklasyfikowani pomiędzy trzy duże systemy operacyjne: Windows, Linux oraz MacOS. Jednakże w kraju nad Wartą i Wisłą dominują użytkownicy systemu okienkowego, z racji tego że sporo aplikacji biznesowych i gier jest tworzona z myślą o tym systemie. Z zrealizowanej w ubiegłym tygodniu ankiety traktującej o systemach operacyjnych, ze sztandarowego produktu Microsoft korzysta 75% osób, jednakże jedynie 50% użytkowników uważa za swój ulubiony. Dlaczego?</b>
				<section>
				<h2>Czym wog&oacute;le jest system operacyjny?</h2>
				<p>Skoro ten artykuł traktuje o systemach operacyjnych, warto wspomnieć czym wog&oacute;le są. Sama nazwa pochodzi z angielskiego <em>Operating System</em> - w skr&oacute;cie <em>OS</em>. OS to środowisko do uruchamiania i zarządzania programami, procesami oraz zadaniami w komputerze. Najważniejszymi obszarami działań system&oacute;w są:</p>
				<ul>
					<li>zarządzanie procesorem i pamięcią operacyjną</li>
					<li>czuwanie nad połączeniami sieciowymi</li>
					<li>zarządzanie plikami</li>
				</ul>
				<p>Dziś, tj. w 2022 roku utożsamiamy systemy z tym co widzimy na ekranie (nakładką, interfejsem graficznym) , aczkolwiek warto pamiętać o tym źe di początku lat 80. XX wieku systemy produkowane przez firmę&nbsp;<strong>IBM</strong> były wyposażone w interfejs tekstowy, gdzie każdą akcję musieliśmy uruchamiać przy wykorzystaniu konsoli.</p>
			</section>
			<section>
				<h2>Dlaczego Windows?</h2>
				<p>Windows często kojarzy się z memem, gdzie włączenie komputera z tym oprogramowaniem przyr&oacute;wnywane jest do otwarcia okna w łodzi podwodnej, a mimo to jest ogromne środowisko fan&oacute;w, kt&oacute;rzy najczęściej wymieniają Windows XP jako coś co do czego czują sentyment. Pierwszym powodem tego zadziwiającego zjawiska według mnie, jest fakt, że na początku XXI wieku sporo program&oacute;w w tym też system&oacute;w operacyjnych było rozpowszechniane drogą piracką - np bazar na** Stadionie Tysiąclecia w Warszawie** - gdzie przy niskich nakład&oacute;w finansowych, można było się cieszyć cyfrową rozrywką w zaciszu domowym.<br/> <br/> Natomiast sam Windows XP i jego charakterystyczny dźwięk uruchamiania logowania się do komputera towarzyszył w najmłodszych latach uczestnik&oacute;w ankiety.&nbsp;Kolejnym powodem popularności XP jest stosowanie go w plac&oacute;wkach publicznych. Dla przykladu, w latach kiedy jeszcze chodziłem do gimnazjum (2013-2016), nauczyciele w tej plac&oacute;wce oraz miejscowa pracownia komputerowa była wyposażona w tego kultowego Windowsa, a i do dziś można go spotkać w punktach pocztowych. <strong>Zasadniczo dziś nie zaleca się korzystania z niego, dlatego że w maju 2019 roku koncern z Doliny Krzemowej wycofał dla niego wsparcie, co skutkuje się większą podatnością na ataki hakerskie.</strong></p>
			</section>
			<section>
				<h2>Co sądzę o Windows?</h2>
				<p>Nie da się ukryć że Windows jest narzędziem kompletnym wyposażonym w najpotrzebniejsze narzędzia i oprawionym w estetyczną wartswę wizualną. R&oacute;wnież plusem dla produktu Bill&apos;a Gates&apos;a jest szerokie pasmo gier - chociażby moje ulubione gry z serii Assasins Creed oraz Civilization - i aplikacji - np. umożliwających personalizację ustawień peryferii i podzespoł&oacute;w komputera - co jest przeogromną przewagą wobec konkurencji. Jednakże wszystko też ma swoje wady, a tutaj jest chociażby kwestia popularności.&nbsp;</p><br/>
				<p><strong>Tak. popularność może być wadą!</strong>. Im popularniejszy system, tym możemy liczyć się z tym że całe bataliony haker&oacute;w silą i trudzą się aby dostać do wrażliwych danych jak największej liczby ofiar. Kolejną wadą jest chermetyczność sklepu Microsoftu, kt&oacute;ry posiada o wiele większe ograniczenia niż sklep z aplikacjami dla Androida. Jeśli deweloperzy Windowsa popracują nad kwestią sklepu oraz bezpieczeństwa z całą pewnością moje serducho na 100% przylgnie do niego.</p>
			</section>
			<section>
				<h2>Konkurencja Windowsa - Linux i MacOS</h2>
				<p>Najważniejszymi rywalami są Linux i MacOS. Oba te systemy pod sobą mają podobny rdzeń (są systemami <strong>UNIX</strong>&apos;owymi). MacOS jest rozpropagowany wśr&oacute;d Amerykan&oacute;w oraz w pracy profesjonalnej przez programist&oacute;w, fotograf&oacute;w oraz montażyst&oacute;w film&oacute;w video, ze względu na sam ekosystem i wsparcie dla aplikacji m.in. z rodziny Adobe czy też JetBrains. Natomiast Linux, a raczej powinienem pisać <strong>GNU Linux</strong> to cała masa r&oacute;żnorodnych dystrybucji o indywidualnych mechanikach i szatach graficznych.&nbsp;</p><br/>
				<p>Ogromną zaletą pingwinka jest otwartoźr&oacute;dłowość, czyli bezpłatne użytkowanie oraz ewentualna możliwość włączenia się w rozw&oacute;j wybranej dystrybucji. Jest istotną rzeczą dla użytkownik&oacute;w co świadczy o tym fakt, iż w wyżej wymienionej ankiecie aż 10% więcej os&oacute;b opowiedziało się za tym, że to właśnie Linux jest ich ulubionym systemem, co r&oacute;wnoznaczne jest z zdeptaniem konkurenta.</p><br/>
				<p>Moim zdaniem Windows to system kt&oacute;ry ma swoje wady i zalety, ale co najważniejsze większość z nas darzy go wielkim sentymentem. Na szczęście nie jesteśmy na niego skazani i mamy spory wyb&oacute;r, bo poza Linuxem i OSX (MaxOS) możemy korzystać z memicznych system&oacute;w jak chociażby TempleOS, w kt&oacute;rym możemy komunikować się ze samym Stw&oacute;rcą.</p>
			</section>`,
				summary: {
					title: "",
					content: ``,
					list: [],
					visible: false,
				},
			},
			{
				seo: {
					image:
						"https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
					meta: {
						description: `W internecie jest sporo stron internetowych, lecz większość nie jest dobra, a też jest sporo wręcz niepoprawnych. Dowiesz się jak powinna wyglądać dobra strona. Zapraszam.`,
						title: `Jak powinna wyglądać dobra strona - RadWEB`,
					},
					og: {
						description: `W internecie jest sporo stron internetowych, lecz większość nie jest dobra, a też jest sporo wręcz niepoprawnych. Dowiesz się jak powinna wyglądać dobra strona. Zapraszam.`,
						title: `Jak powinna wyglądać dobra strona - RadWEB`,
					},
				},
				author: "adamczyk_radoslaw",
				url: "https://rad-web.vercel.app/blog/programowanie/cechy-dobrej-strony-internetowej",
				path: "/blog/programowanie/cechy-dobrej-strony-internetowej",
				slug: "cechy-dobrej-strony-internetowej",
				title: "Cechy dobrej strony internetowej",
				breadcrumbs: [
					{
						path: "/blog",
						title: "blog",
					},
					{
						path: "/blog/programowanie",
						title: "programowanie",
					},
				],
				hero: {
					date: "Tue Apr 12 2022 00:00:00 GMT+0200 (czas środkowoeuropejski letni)",
					excerpt:
						"W swoim życiu każdy z nas widział setki, jak nie tysiące stron internetowych. Jedne nam przypadły do gustu, inne niekoniecznie. Od czego to zależy? Najważniejszymi czynnikami są prędkość załadowania strony, kolory oraz typografia - to wszystko wpływa w sposób istotny na jakość strony w aspekcie front-end developerskim oraz jakości pozycjonowania. Ta Święta Trójca internetowa, jest swoistym kluczem do odniesienia sukcesu w tej przestrzeni.",
					image:
						"https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
					lang: "pl",
					readingTime: "3",
					title: "Cechy dobrej strony internetowej",
				},
				content: `
				<b style="font-weight:700">W swoim życiu każdy z nas widział setki, jak nie tysiące stron internetowych. Jedne nam przypadły do gustu, inne niekoniecznie. Od czego to zależy? Najważniejszymi czynnikami są prędkość załadowania strony, kolory oraz typografia - to wszystko wpływa w sposób istotny na jakość strony w aspekcie front-end developerskim oraz jakości pozycjonowania. Ta Święta Trójca internetowa, jest swoistym kluczem do odniesienia sukcesu w tej przestrzeni.</b>
				<section>
				<section>
					<h2>Co to jest typografia?</h2>
					<p>Typografia to nic innego jak styl, grubość oraz rozmiar czcionek. W tworzeniu stron internetowych istotne jest zastosowanie odpowiedniej czcionki. Im przejrzystsza tym użytkownikowi, łatwiej będzie przeczytać to co mieliśmy do przekazania. Wielu tw&oacute;rc&oacute;w stron, korzysta z tzw. <strong>czcionek bezszeryfowych</strong> - <em>&quot;sans serif&quot;</em>, kt&oacute;re nie posiadają haczyk&oacute;w. Do najpopularniejszych przykład&oacute;w czcionek, przy jednoczesnym wsparciu polskich znak&oacute;w należą Poppins, Lato oraz Montserrat.&nbsp;</p><br/>
					<p>Wśr&oacute;d ludzi jest przeświadczenie że rozmiar nie ma znaczenia. Inaczej jest w typografii. Jeśli zastosujemy mały lub gargantuicznie duży rozmiar czcionek spowodujemy najgorszą z możliwych opcji - opuszczenie serwisu przez użytkownika. Przy tworzeniu od podstaw strony internetowej, domyślną wartością czcionki jest 16px. Ta podstawowa wartość sprawia, że pisanie tekst&oacute;w, wyglądających optymalnie nie jest łatwe, dlatego że pixele nie są auto skalowalne. Rozwiązaniem tego problemu jest <strong>happy rem</strong>, czyli ustawienie domyślnej czcionki na <strong>62.5%</strong> co daje nam <strong>10px</strong>.&nbsp;</p><br/>
					<p>Po zastosowaniu tego tip&apos;a bez problemu, można tworzyć skalowalną czcionkę z użyciem rem, dlatego że 1rem będzie r&oacute;wne 10px. Ostatnim najistotniejszym elementem typografii jest grubość czcionki. Tą sprawę warto wziąć na przysłowiowy chłopski rozum. W czasach szkolnych, podczas sporządzania notatek, to co było dla nas ważne do zapamiętania, to zapisywaliśmy grubszym, często zaznaczonym tekstem. Nie inaczej jest z witrynami internetowymi. Im grubsza czcionka, tym ważniejszy tekst i basta.</p>
				</section>
				<section>
					<h2>Ograniczenia prędkości tutaj nie obowiązują.</h2>
					<p>Po internecie krążą og&oacute;lnodostępne badania, dotyczące ilości oraz czasu wizyt na stronach internetowych. Z tych statystyk wynika, że im kr&oacute;tszy czas załadowania tym jest większe prawdopodobieństwo pozostania na stronie. Dlaczego? Odpowiedź jest prosta. Dziś każdy oczekuje informacji na swoje pytanie tu i teraz. Nikt nie będzie łaskawie czekać jak dostanie się do docelowego miejsca. Tu rodzi się kluczowe pytanie - jak szybko powinna załadować się strona? Z doświadczenia zawodowego oraz wielu statystyk, czasem granicznym jest 8 sekund, wszak im szybciej tym lepiej.&nbsp;</p><br/>
					<p>Czynnikami, kt&oacute;re wpływają na spadek wydajności strony są zaawansowane skrypty, niezminifikowane pliki ze stylami oraz zdjęcia. Obrazki na stronie są czymś co wpada nam w oko, ale niestety to ma swoją cenę, ponieważ zdjęcia wysokiej jakości są bardzo ciężkie. Jednak i na to jest remedium. Nawet kilka! Po pierwsze, zastosowanie grafik wektorowych oraz plik&oacute;w svg, kt&oacute;re są napisane zazwyczaj za pomocą HTML-a, co umożliwia szybsze zaczytanie treści przez przeglądarkę.&nbsp;</p><br/>
					<p>Drugim lekarstwem jest implementacja wtyczki dla front-endowych developer&oacute;w Gatsby&apos;ego o nazwie <strong>gatsby-plugin-image</strong>, kt&oacute;ra daje wiele parametr&oacute;w umożliwiających zanimowane załadowanie fotografii, co w rezultacie przyspiesza załadowanie strony. Chcesz na własną rękę sprawdzić prędkość własnej strony? Bezpłatnym, a i jednocześnie rekomendowanym narzędziem jest <strong>Google PageSpeed Insights</strong>.</p>
				</section>
				<section>
					<h2>Pomaluj m&oacute;j świat.</h2>
					<p>Każdy z nas, nie może przejść obojętnie na widok płci przeciwnej przyodzianej w odpowiednio dobrane kolorystycznie szaty. Ta sama zasada tyczy się internetu, w kt&oacute;rym trzeba się kierować empatią i atencją, co jedno drugiego nie wyklucza. Dlaczego empatia? Z internetu korzysta nie do zliczenia przez zwykłego Kowalskiego liczba os&oacute;b. Do tego grona wliczają się osoby zdrowe i chore, młodzi i starzy, kobiety i mężczyźni.</p>
					<p>&nbsp;Przy projektowaniu strony należy zadać sobie pytanie - do kogo chcę trafić? Po udzieleniu sobie satysfakcjonującej odpowiedzi należy mieć zawsze na uwadze, że mogą wejść do serwisu osoby niedowidzące. Lekarstwem, kt&oacute;re nie wykluczy żadnego odbiorcy obowiązkowym elementem stron jest dobry kontrast, oraz jeśli to możliwe przystosowanie serwisu do przeczytania strony przez przeglądarkowego lektora, dla os&oacute;b niewidomych.&nbsp;</p><br/>
					<p>Ok, ale o co chodzi z atencją? Dzisiejsze serwisy cechują się wolną przestrzenią i minimalnymi dekoracjami. Tymi dekoracjami są np. najechanie kursorem na interaktywny element, uzupełnianie jakiegokolwiek formularza oraz przemieszczanie się między podstronami. Teraz minimalizm jest w cenie. Od praktycznego aspektu, ważne jest rozsądne położenie oraz dostępność nawigacji. Należy mieć na uwadze aby accesbilty do tak ważnego komponentu, w postaci przycisku, kt&oacute;re przeniesie nas do sekcji z nawigacją, lub przyklejenie do g&oacute;rnej części widoku.</p><br/>
					<p><strong>Dobre strony, nie są jeszcze chlebem powszednim w sieci, ale warto podjąć wszystkie możliwe działania aby tak się właśnie stało. Mam nadzieję, że tymi poradami wskazałem Tobie, do czego przywiązać szczeg&oacute;lną uwagę.</strong></p>
				</section></section>`,
				summary: {
					title: "",
					content: ``,
					list: [],
					visible: false,
				},
			},
		],
	},
};
