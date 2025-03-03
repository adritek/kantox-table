import { Outlet, Link } from 'react-router-dom';

import MainNav from '../components/MainNav';

export default function RootNav() {
  return (
    <div id="container" className="flex flex-col h-screen">
      <MainNav />
      <main className="mx-auto w-full max-w-9/10 pt-4 pb-4 text-gray-600 grow">
        <Outlet />
      </main>
      <footer className="w-full bg-gray-500 text-gray-400">
        <Link to="/error">Lil dude</Link>
      </footer>
    </div>
  );
}
