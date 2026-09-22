import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { GamePage } from "./components/pages/game-page/game-page";
import ResultsPage from "./components/pages/results-page/results-page";
import RootPage from "./components/root-page/root-page";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import ErrorPage from "./components/pages/error-page/error-page";
import PlayersPage from "./components/pages/players-pages/players-page";
import AddPlayersPage from "./components/pages/players-pages/add-player/add-player";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <GamePage /> },
      { path: "/game-results", element: <ResultsPage /> },
      {
        path: "players",
        element: <PlayersPage />,
        // children: [{ path: "new-player", element: <AddPlayersPage /> }],
      },
      { path: "/players/new-player", element: <AddPlayersPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
