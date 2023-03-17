import { iLogin } from "@default/src/ts/interfaces";
import { schLogin } from "@default/src/ts/schemas";
import { Formik, Field, Form } from "formik";

const Page = () => {
	const handleSubmit = async (values, actions) => {
		try {
			await schLogin.validate(values);
			console.log("values", values);
			actions.setSubmitting(false);
			// wykonaj dalsze akcje, np. wysłanie formularza do API
		} catch (error) {
			console.error("Błąd walidacji:", error);
			actions.setSubmitting(false);
		}
	};

	const renderForm = ({ errors, touched, isSubmitting }) => {
		return (
			<Form>
				<label htmlFor="login">login: </label>
				<Field id="login" name="login" placeholder="login" type="text" />
				{errors.login && touched.login ? <div>{errors.login}</div> : null}

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
				validationSchema={schLogin}
			>
				{renderForm}
			</Formik>
			{/* <form action="">
				<br />
				<input type="text" placeholder="login" />
				<br />
				<input type="password" placeholder="password" name="" id="" />
				<br />
				<button type="submit">Log In</button>
			</form> */}
		</>
	);
};

export default Page;
