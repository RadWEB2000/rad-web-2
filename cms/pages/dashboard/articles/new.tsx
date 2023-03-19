import { useUser } from "@default/src/lib/hooks/useUser";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { TextEditor } from "@default/src/components/Utilities/TextEditor/TextEditor";

const Page = () => {
	const { user } = useUser();
	const { pathname } = useRouter();
	const p = pathname.split("/")[3];
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
				<Link href="/articles">artykuly</Link>
				<Link href="/strony">strony</Link>
				<Link href="/uzytkownicy">uzytkownicy</Link>
				<Link href="/rozszerzenia">rozszerzenia</Link>
				<Link href="/ustawienia">ustawienia</Link>
				<Link href="/">Wyloguj</Link>
				<Link href="/dashboard/wiadomosci">wiadomosci</Link>
				<Link href="/dashboard/kontakty">kontakty</Link>
			</menu>
			<h1>{p}</h1>
			<main>
				<TextEditor />

				<h2>SEO</h2>
				<Formik initialValues={{}} onSubmit={() => {}}>
					<Form>
						<label htmlFor="meta-title">meta title</label>
						<Field name="meta-title" placeholder="meta-title" />
						<label htmlFor="meta-desc">meta desc</label>
						<Field name="meta-desc" placeholder="meta-desc" />
					</Form>
				</Formik>
			</main>
		</>
	);
};

export default Page;
