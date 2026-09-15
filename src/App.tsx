import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { GamePage } from "./components/game-page/game-page";
import ResultsPage from "./components/results-page/results-page";

const router = createBrowserRouter([
  { path: "/", element: <GamePage /> },
  { path: "/game-results", element: <ResultsPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
