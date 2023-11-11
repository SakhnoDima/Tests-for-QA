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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operationsAuth.refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="auth"
          element={
            <PublicRoute restricted>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="test"
          element={
            <PrivateRoute>
              <TestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="results"
          element={
            <PrivateRoute>
              <ResultsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PublicRoute>
              <ContactsPage />
            </PublicRoute>
          }
        />
        <Route
          path="useful-info"
          element={
            <PrivateRoute>
              <MaterialPAge />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
