import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserPorvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
