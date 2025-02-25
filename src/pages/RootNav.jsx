import { Outlet } from 'react-router-dom';

import MainNav from '../components/MainNav';

export default function RootNav() {
  return (
    <div>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
