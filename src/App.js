import { useRoutes } from "react-router-dom";
import "./App.less";
import routes from "./config/routes";
import { Suspense } from "react";

function App() {
  return <Suspense>{useRoutes(routes)}</Suspense>;
}

export default App;
