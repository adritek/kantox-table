import { Outlet, Link } from 'react-router';

import MainNav from './components/MainNav';

// import './App.css';

export default function App() {
  return (
    <div id="container" className="flex flex-col h-screen">
      <MainNav />
      <main>{<Outlet />}</main>
      <footer className="w-full bg-gray-500 text-gray-400">
        <Link to="/error">Lil dude</Link>
      </footer>
    </div>
  );
}
