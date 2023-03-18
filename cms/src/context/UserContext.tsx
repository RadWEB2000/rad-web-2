import { users } from "@default/src/data/users";
import React, { createContext, ReactElement, useState } from "react";
import { iLogin, iUser } from "@default/src/ts/interfaces";

interface iUserContext {
	user: iUser | null;
	setUser: (user: iUser | null) => void;
	login: (login: string, password: string) => void;
	logout: () => void;
}

interface iUserProvider {
	children: ReactElement | React.ReactNode;
}

export const loginUser = (
	login: string,
	password: string
): iUser | undefined => {
	const user = users.find(
		(user) => user.login === login && user.password === password
	);

	// console.log("user context", user);

	return user;
};

export const UserContext = createContext<iUserContext>({
	user: null,
	setUser: () => {},
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
				setUser,
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
