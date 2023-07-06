
// import LogIn from './LogIn';
// import Products from './Products';
// function App() {
//   return (
//     <div>
//       <LogIn/>
//       <Products/>
     
        
//     </div>
//   );
// }

// export default App;





import logo from './logo.svg';
import './App.css';
import Products from './Products';
// import Login from './Loginpage';
import LogIn from './LogIn';
import Navigationbar from './Navigationbar/navigation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails/productdetails';
// import addProduct from './Addproduct/addproduct';
function App() {
  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
        {/* <Route path='/addproduct' element={<Addproduct/>}/> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;

