import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BookmarkPage from './views/bookmark';
import Index from './views';
import AboutPage from './views/about';
import SettingsPage from './views/settings';



const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/settings' element={<SettingsPage/>}></Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App;
