import { useUser } from "@default/src/lib/hooks/useUser";
import Link from "next/link";

const Page = () => {
	const { user } = useUser();
	console.log(user);
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
			<h1>Successfull</h1>
		</>
	);
};

export default Page;
