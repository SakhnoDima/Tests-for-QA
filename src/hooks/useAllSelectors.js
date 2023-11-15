import { useSelector } from "react-redux";
import { selectorsAuth } from "../redux/authSlice";
import { selectorsTests } from "../redux/testsSlice";

export const useAllSelectors = () => {
  const isLoggedIn = useSelector(selectorsAuth.getIsLoggedIn);
  const email = useSelector(selectorsAuth.getUserEmail);
  const error = useSelector(selectorsAuth.getError);
  const tests = useSelector(selectorsTests.getTests);
  const results = useSelector(selectorsTests.getResults);

  return {
    isLoggedIn,
    email,
    error,
    tests,
    results,
  };
};
