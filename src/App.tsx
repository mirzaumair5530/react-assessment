import { Navigate, useLocation } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import AppContext from "@src/contexts/AppContext";

function App() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to={"/home-feed"} />;
  }
  return (
    <AppContext>
      <Layout />
    </AppContext>
  );
}

export default App;
