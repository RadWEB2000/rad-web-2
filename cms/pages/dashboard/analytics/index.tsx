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
				<Link href="/analytics">statystyki</Link>
				<Link href="/artykuly">artykuly</Link>
				<Link href="/strony">strony</Link>
				<Link href="/uzytkownicy">uzytkownicy</Link>
				<Link href="/rozszerzenia">rozszerzenia</Link>
				<Link href="/ustawienia">ustawienia</Link>
				<Link href="/">Wyloguj</Link>
				<Link href="/dashboard/wiadomosci">wiadomosci</Link>
				<Link href="/dashboard/kontakty">kontakty</Link>
			</menu>
			<h1>{p}</h1>
		</>
	);
};

export default Page;
