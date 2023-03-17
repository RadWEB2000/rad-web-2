import { iUser } from "../ts/interfaces";
import { users } from "@default/src/data/users";
import { createContext, ReactElement, useState } from "react";

interface iUserContext {
	user: iUser | null;
	login: (login: string, password: string) => void;
	logout: () => void;
}

interface iUserProvider {
	children: ReactElement;
}

export const loginUser = (
	login: string,
	password: string
): iUser | undefined => {
	const user = users.find(
		(user) => user.login === login && user.password === password
	);
	return user;
};

export const UserContext = createContext<iUserContext>({
	user: null,
	login: () => {},
	logout: () => {},
});

export const UserProvider = ({ children }: iUserProvider) => {
	const [user, setUser] = useState<iUser | null>(null);
	const login = (login: string, password: string) => {
		const user = loginUser(login, password);
		if (user) {
			setUser(user);
		}
	};
	const logout = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				login,
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
