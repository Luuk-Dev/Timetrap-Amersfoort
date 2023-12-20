import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Map, Menu} from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<Menu/>}/>
          <Route path="play" element={<Map/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
