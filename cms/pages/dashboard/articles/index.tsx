import { useUser } from "@default/src/lib/hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
	const { user } = useUser();
	const { pathname } = useRouter();
	const p = pathname.split("/")[2];

	return (
		<>
			<nav>
				<h1>RadWEB CMS</h1>
				<div>
					<p>{`${user?.fullname.firstname} ${user?.fullname.lastname}`}</p>
				</div>
			</nav>
			<menu>
				<Link href="/dashboard/analytics">statystyki</Link>
				<Link href="/dashboard/articles">artykuly</Link>
				<Link href="/">Wyloguj</Link>
				{/* <Link href="/dashboard/strony">strony</Link>
				<Link href="/dashboard/uzytkownicy">uzytkownicy</Link>
				<Link href="/dashboard/rozszerzenia">rozszerzenia</Link>
				<Link href="/dashboard/ustawienia">ustawienia</Link>
				<Link href="/dashboard/wiadomosci">wiadomosci</Link>
				<Link href="/dashboard/kontakty">kontakty</Link> */}
			</menu>
			<h1>{p}</h1>

			<button>
				<Link href="/dashboard/articles/new">nowy</Link>
			</button>
		</>
	);
};

export default Page;
