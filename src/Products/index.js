// import React,{useState,useEffect} from "react";
// const Products = ()=>{
//     const [products,setProducts] = useState([]);
//     const [loading,setLoading] = useState(false);
//     useEffect(()=>{
//         (async()=>{
//             await getProducts();

//         })();
//     },[])
//     console.log({products});


//     const getProducts = async ()=>{
//         try{
//             setLoading(true);
//             const response = await fetch('https://dummyjson.com/products')
//             const result = await response.json();
//              setProducts(result.products);
//              setLoading(false);
             
//         }
//         catch(error){
//             console.log(error.message);
//         }
//     }
//     if(loading){
//         return <h2>Loading.....</h2>
//     }
//     return(
//         <div>
//             <h1>All products</h1>
//             {products.map(item => (
//                 <div key={item.id}>
//                 <h2>{item.title}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// };
// export default Products;




import React, { useState, useEffect } from "react";
import './style.css'
import { Link } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);
  console.log({ products });
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // if (products.length === 0) {
  //   return <h2>No products found.</h2>;
  // }
  return (
    <div className="product">
      {/* <h1>Product</h1> */}
      {products.map((item) => (
        <div key={item.id} className="productkey">
          {/* <h3>{item.title}</h3> */}
          <img  src={item.images[1]} alt={item.title} className="productimage" />
        <p className="productprice">price &nbsp;ksh{item.price}</p>
        <p className="productdiscount">discount&nbsp;{item.discountPercentage}%</p>
        <Link to={`/ProductDetails/${item.id}` }className="buton">
            <button type="submit" className="button">View details</button >
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Products;












