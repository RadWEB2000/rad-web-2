import InputField from "@default/src/components/Utilities/Forms/Field";
import { Field, Form, Formik } from "formik";

const Page = () => {
	return (
		<>
			<h1>RadWEB CMS</h1>
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={(e) => {
					console.log(e);
				}}
			>
				<Form>
					<Field
						name="username"
						placeholder="Username"
						render={({ field, props }: { field: any; props: any }) => (
							<InputField field={field} label="Username: " props={props} />
						)}
					/>
					<Field
						name="password"
						placeholder="Password"
						type="password"
						render={({ field, props }: { field: any; props: any }) => (
							<InputField
								field={field}
								label="Password: "
								props={props}
								type="password"
							/>
						)}
					/>
					<button>Log in</button>
				</Form>
			</Formik>
		</>
	);
};

export default Page;
