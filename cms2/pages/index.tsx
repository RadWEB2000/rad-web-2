import InputField from "@default/src/components/Utilities/Forms/Field";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

const Page = () => {
	const router = useRouter();

	const validateForm = (e: any) => {
		const { username, password } = e;
		// console.log("username: ", username);
		// console.log("password: ", password);
		if (username !== "" && password !== "") {
			if (username === "admin" && password !== "admin") {
				// return console.log("Type password again please");
			} else if (username !== "admin" && password === "admin") {
				// return console.log("Type username again please");
			} else if (username === "admin" && password === "admin") {
				router.push("/dashboard");
				// return console.log("Great");
			} else {
				// return console.log("Write here correct username and password");
			}
		} else {
			// return console.log("Complete fields please");
		}
	};

	return (
		<>
			<h1>RadWEB CMS</h1>
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={validateForm}
			>
				<Form>
					<Field
						label="Username: "
						name="username"
						placeholder="username"
						component={InputField}
					/>
					<Field
						label="Passowrd: "
						name="password"
						placeholder="password"
						type="password"
						component={InputField}
					/>
					<button>Log in</button>
				</Form>
			</Formik>
		</>
	);
};

export default Page;
