import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { GamePage } from "./pages/game-page/game-page";
import ResultsPage from "./pages/results-page/results-page";

//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import ErrorPage from "./pages/error-page/error-page";
import PlayersPage from "./pages/players-pages/players-page";
import AddPlayersPage from "./pages/players-pages/add-player/add-player";
import RootPage from "./pages/root-page/root-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
