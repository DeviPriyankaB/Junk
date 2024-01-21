// WasteDetails.js
import React ,{useRef} from 'react';
import { Route, Routes, NavLink ,useNavigate} from 'react-router-dom';
import Plastic from './/Plastic';
import Paper from './Paper';
import Clothes from './Clothes';
import EWaste from './EWaste';
import Wood from './Wood';
import Placepickup from './Placepickup';


const WasteDetails = () => {
  const navigate = useNavigate();
  const pickupRef = useRef();
  const handlepickup = () => {
    // Save logic (you can send data to backend or store in local storage)
  
    // Navigate to the next page
    navigate('/WasteDetails/pickup');
    if (pickupRef.current) {
      pickupRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="waste-details-container">
      <div className="header d-flex justify-content-between align-items-center">
        <h1>Waste Details</h1>
        <button className="btn custom-light-green btn-lg"  ref={pickupRef} onClick={handlepickup}>Place Pickup</button>
      </div>
    <div className="waste-details-container">
      <div className="category-row">
        <div className="category-card">
          <h5>Plastic</h5>
          <p>Information about plastic waste.</p>
          <NavLink to="/wastedetails/plastic">View</NavLink>
        </div>
        <div className="category-card">
          <h5>Paper</h5>
          <p>Information about paper waste.</p>
          <NavLink to="/wastedetails/paper">View </NavLink>
        </div>
      </div>
      <div className="category-row">
        <div className="category-card">
          <h5>Clothes</h5>
          <p>Information about clothes waste.</p>
          <NavLink to="/wastedetails/clothes">View </NavLink>
        </div>
        <div className="category-card">
          <h5>E-Waste</h5>
          <p>Information about electronic waste.</p>
          <NavLink to="/wastedetails/e-waste">View </NavLink>
        </div>
       </div>
       <div className='category-row'>
        <div className="category-card">
          <h5>Wood</h5>
          <p>Information about wood waste.</p>
          <NavLink to="/wastedetails/wood">View </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="plastic" element={<Plastic />} />
        <Route path="paper" element={<Paper />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="e-waste" element={<EWaste />} />
        <Route path="wood" element={<Wood />} />
        <Route path="pickup" element={<Placepickup />} />
      </Routes>
    </div>
    </div>
  );
};

export default WasteDetails;



