import './App.css';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from './routes';

const router = createBrowserRouter(routes);

function App(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;