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
				content: `<section>
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
				content: `<section>
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
				content: `<section>
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
