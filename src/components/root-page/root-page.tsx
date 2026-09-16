import { Outlet } from "react-router";
import { NavigationBar } from "../navigation-bar/navigation-bar";

function RootPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootPage;
