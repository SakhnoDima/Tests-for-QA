import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import ResultsPage from "./pages/ResultsPage";
import ContactsPage from "./pages/ContactsPage";
import AuthPage from "./pages/AuthPage";
import MaterialPAge from "./pages/MaterialPAge";
import { useDispatch } from "react-redux";
import { operationsAuth } from "./redux/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operationsAuth.refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="useful-info" element={<MaterialPAge />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
