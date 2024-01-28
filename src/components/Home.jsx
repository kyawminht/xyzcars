import React, { useEffect, useState } from 'react'
import { fetchAllCars } from '../service/service';


const Home = () => {
    const [products,setProduct] =useState([]);

    const fetchDataFromApi=async()=>{
        try {
            const result=await fetchAllCars();
             setProduct(result);
        } catch (error) {
            console.log('error from api')
        }
    }
    console.log(products)
    useEffect(()=>{
        fetchDataFromApi();
    },[]);
  return (
    <div>
        <table className=' border-gray-400 p-3'>
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.proId}>
              <td className="py-2 px-4 border-b">{product.prodName}</td>
              <td className="py-2 px-4 border-b">{product.prodPrice}</td>
              <td className="py-2 px-4 border-b">{product.prodCategory}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default Home
