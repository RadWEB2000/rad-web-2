import { users } from "@default/src/data/users";
import { iLogin } from "@default/src/ts/interfaces";
import { sLogin } from "@default/src/ts/schemas";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

const Page = () => {
	const [Alert, updateAlert] = useState("");
	const router = useRouter();
	const handleSubmit = async (values: iLogin, actions: any) => {
		const { login, password } = values;
		console.log("values", values);
		console.log("actions", actions);
		try {
			await sLogin.validate(values);
			actions.setSubmitting(false);

			const user = users.find((user) => user.login === login);
			if (!user) {
				updateAlert("Nieprawidłowy login");
			} else if (user.password !== password) {
				updateAlert("Nieprawidłowe hasło");
			} else {
				router.push("/dashboard");
			}
		} catch (error) {
			console.error("Błąd walidacji:", error);
			actions.setSubmitting(false);
		}
	};

	const validate = {
		login: (value: string) => {
			let error;
			if (value === "admin") {
				error = "nice try";
				updateAlert("nice try");
			} else {
				updateAlert("");
			}
			return error;
		},
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
				<label htmlFor="login">Login: </label>
				<Field
					id="login"
					name="login"
					placeholder="login"
					type="text"
					validate={validate.login}
				/>

				<label htmlFor="password">password: </label>
				<Field
					id="password"
					name="password"
					placeholder="password"
					type="text"
				/>
				{errors.password && touched.password ? (
					<div>{errors.password}</div>
				) : null}

				<button type="submit" disabled={isSubmitting}>
					Submit
				</button>
			</Form>
		);
	};

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
			<h1>{Alert}</h1>
		</>
	);
};

export default Page;
