import { UserContext } from "@default/src/context/UserContext";
import { useContext } from "react";

export const useUser = () => useContext(UserContext);
