import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Table from './components/Table';
import RootNav from './pages/RootNav';

import './App.css';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootNav />,
      errorElement: <Error />,

      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/orders',
          element: <Table />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
