import "./App.scss";
import Layout from "./components/Layout";
import AppContext from "@src/contexts/AppContext";

function App() {
  return (
    <AppContext>
      <Layout />
    </AppContext>
  );
}

export default App;
