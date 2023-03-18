import { loginUser } from "@default/src/context/UserContext";
import { useUser } from "@default/src/lib/hooks/useUser";
import { iLogin } from "@default/src/ts/interfaces";
import { sLogin } from "@default/src/ts/schemas";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
	const [Alert, updateAlert] = useState("");
	const router = useRouter();
	const { user, login, setUser } = useUser();

	const handleSubmit = async (values: iLogin, actions: any) => {
		try {
			await sLogin.validate(values);
			actions.setSubmitting(false);

			const user = loginUser(values.login, values.password);
			console.log("values", values);

			if (!user) {
				updateAlert("Wprowadź poprawny login");
			} else if (user?.password !== values.password) {
				updateAlert("Wprowadź poprawne hasło");
			} else {
				login(values.login, values.password);
				setUser(user);
				router.push("/dashboard");
			}
		} catch (error) {
			console.error("Błąd walidacji:", error);
			actions.setSubmitting(false);
		}
	};

	const renderForm = ({
		errors,
		touched,
		isSubmitting,
	}: {
		errors: any;
		touched: any;
		isSubmitting: any;
	}) => {
		return (
			<Form>
				<br />
				<br />
				<label htmlFor="login">Login: </label>
				<Field id="login" name="login" placeholder="login" type="text" />
				<br />
				<br />
				<br />
				<label htmlFor="password">password: </label>
				<Field
					id="password"
					name="password"
					placeholder="password"
					type="password"
				/>
				{errors.password && touched.password ? (
					<div>{errors.password}</div>
				) : null}
				<br />
				<br />

				<button
					onClick={() => console.log("ok")}
					type="submit"
					disabled={isSubmitting}
				>
					Submit
				</button>
			</Form>
		);
	};

	useEffect(() => {
		console.log(user);
	}, []);

	return (
		<>
			<Formik
				initialValues={{
					login: "",
					password: "",
				}}
				onSubmit={handleSubmit}
				validationSchema={sLogin}
			>
				{renderForm}
			</Formik>
			<h6>{Alert}</h6>
		</>
	);
};

export default Page;
