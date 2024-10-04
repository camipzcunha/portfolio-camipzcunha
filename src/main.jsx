import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import MeusProjetos from './Pages/MeusProjetos.jsx';
import DetalheProjetos from './Pages/DetalheProjetos.jsx';
import SobreMim from './Pages/SobreMim.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projetos', element: <MeusProjetos /> },
      { path: 'projetos/:id', element: <DetalheProjetos /> },
      { path: 'sobremim', element: <SobreMim /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
