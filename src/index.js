import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Landing from './Landing';
import Sidenav from './Sidenav';
import Myprofile from './Myprofile';
import Changepassword from './Changepassword';
import Document from './Document';
import Onetodo from './Onetodo';
import Http from './Http';
import Job from './Job';
import Nextpage from './Nextpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
     <Routes>
    <Route path='/' element={<App/>}/>
  <Route path='/one/:index' element={<Onetodo/>}/>
    <Route path='*' element={<Notfound/>}/>
    <Route path='/http' element={<Http/>}/>
    {/* <Route>
      
    </Route> */}
    <Route path='/job' element={<Job/>}/>
    <Route path='/tododetails/:id' element={<Nextpage/>}/>
    <Route path='/home' element={<Welcome/>}>
      <Route path='/home/Dashboard' element={<Landing/>}/>
      <Route path='/home/Profile' element={<Myprofile/>}/>
      <Route path='/home/Password' element={<Changepassword/>}/>
      <Route path='/home/Document' element={<Document/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
