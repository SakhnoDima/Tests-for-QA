import { useSelector } from "react-redux";
import { selectorsAuth } from "../redux/authSlice/";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectorsAuth.getIsLoggedIn);
  const email = useSelector(selectorsAuth.getUserEmail);
  const error = useSelector(selectorsAuth.getError);

  return {
    isLoggedIn,
    email,
    error,
  };
};
