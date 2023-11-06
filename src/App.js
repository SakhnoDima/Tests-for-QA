import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import ResultsPage from "./pages/ResultsPage";
import ContactsPage from "./pages/ContactsPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
