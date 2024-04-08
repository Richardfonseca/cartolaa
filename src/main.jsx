import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Home.jsx';
import MostrarJogadores from './mostrarJogadores.jsx';


const paginas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mostrarJogadores/:id/:time",
    element: <MostrarJogadores />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={paginas} />
  // {/* // </React.StrictMode>, */}
)
