import { Outlet, Link } from 'react-router';

import MainNav from './components/MainNav';

export default function App() {
  return (
    <div
      id="container"
      className="min-h-screen w-full flex flex-col  m-auto max-w-5xl "
    >
      <MainNav />
      <main className="py-5 flex-1">{<Outlet />}</main>
      <footer className=" bg-gray-500 text-gray-400">
        <Link to="/error">Lil dude</Link>
      </footer>
    </div>
  );
}
