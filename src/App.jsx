import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Menus from './pages/Menus'

import SystemCode from './pages/Systems/SystemCode';
import Properties from './pages/Systems/Properties';
import Menus from './pages/Systems/Menus';
import APIList from './pages/Systems/APIList';

import Users from './pages/UsersGroup/Users';
import Groups from './pages/UsersGroup/Groups';

import Competitors from './pages/Competition/Competitors';
import Analysis from './pages/Competition/Analysis';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/menus" replace={true} />} />

        <Route exact path="/system-code" element={<SystemCode />} />
        <Route exact path="/properties" element={<Properties />} />
        <Route exact path="/menus" element={<Menus />} />
        <Route exact path="/api-list" element={<APIList />} />

        <Route exact path="/users" element={<Users />} />
        <Route exact path="/groups" element={<Groups />} />

        <Route exact path="/competitors" element={<Competitors />} />
        <Route exact path="/analysis" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;