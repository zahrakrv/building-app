import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '../App';
import reportWebVitals from './reportWebVitals';
import BuildingForm from './components/BuildingForm';
import PersonForm from './components/PersonForm';
import BuildingUnit from './components/BuildingUnit';
import Warehouse from './components/Warehouse';
import Parking from './components/Parking';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import NavBar from './components/NavBar';
import { LoadingProvider } from '../src/context/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      {/* <App /> */}
      <NavBar />
      <div className="flex">
        <Menu />
        {/* <Menu2 /> */}
        {/* <BuildingForm /> */}
        {/* <PersonForm /> */}
        {/* <BuildingUnit /> */}
        {/* <Warehouse /> */}
        {/* <Parking /> */}
      </div>
    </LoadingProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
