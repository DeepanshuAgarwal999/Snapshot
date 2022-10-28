import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbaar from './Component/Navbaar'
import App from './App';
import Users from './Component/Users';
import SingleUser from './Component/SingleUser';
import Page404 from "./Component/Page404";
import Footer from "./Component/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbaar/>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userID" element={<SingleUser />} />
      <Route path="*" element={<Page404 />}/>
       
      </Route>
    </Routes>
<Footer/>
  </BrowserRouter>


);