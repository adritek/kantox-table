import { Outlet, Link } from "react-router-dom";

import MainNav from "../components/MainNav";

export default function RootNav() {
  return (
    <div id="container">
      <MainNav />
      <main>
        <Outlet />
      </main>
      <footer>
        <Link to="/error">Lil dude</Link>
      </footer>
    </div>
  );
}
