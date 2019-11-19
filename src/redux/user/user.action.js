import { userActionTypeS } from "./user.types";
export const setCurrentUser = user => ({
  type: userActionTypeS.SET_CURRENT_USER,
  payload: user
});
