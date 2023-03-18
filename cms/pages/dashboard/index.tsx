import { UserProvider } from "@default/src/context/UserContext";
import { useUser } from "@default/src/lib/hooks/useUser";

const Page = () => {
	const { user } = useUser();
	console.log(user);
	return (
		<UserProvider>
			<h1>Successfull</h1>
			<h2>{user?.fullname.lastname}</h2>
			<h2>{user?.role}</h2>
			<h4>{user?.login}</h4>
			<h2>{user?.password}</h2>
		</UserProvider>
	);
};

export default Page;
