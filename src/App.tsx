import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { GamePage } from "./components/game-page/game-page";
import ResultsPage from "./components/results-page/results-page";
import RootPage from "./components/root-page/root-page";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ErrorPage from "./components/error-page/error-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <GamePage /> },
      { path: "/game-results", element: <ResultsPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
