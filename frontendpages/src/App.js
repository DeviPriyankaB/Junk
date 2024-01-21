// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Coupons from './pages/Coupons';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Logout from './pages/Logout';
import WasteDetails from './pages/WasteDetails/WasteDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/wastedetails/*" element={<WasteDetails />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;



// // App.js
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Coupons from './pages/Coupons';
// import Profile from './pages/Profile';
// import Products from './pages/Products';
// import Logout from './pages/Logout';
// import WasteDetails from './pages/WasteDetails/WasteDetails';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/coupons" element={<Coupons />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/wastedetails/*" element={<WasteDetails />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;





