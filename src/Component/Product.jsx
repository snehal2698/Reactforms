import React from 'react'
import axios from 'axios'
import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';

import UserLoader from './UserLoader';

function Product() {

  let [data, setdata] = useState({});
  let [loaded, setLoaded] = useState(false);
  
  let {id} = useParams();

  useEffect(()=>{
      setTimeout(()=>{
          axios.get("https://fakestoreapi.com/products/"+id).then((res)=>{
              setdata(res.data)
              setLoaded(true);
              console.log(res.data);
  
          },(err)=>{
              setLoaded(true);
          }
          );
      },2000);
    
  },[id]);
  if(loaded){
return (
  <>
  <h2 contentEditable="true">Product</h2>
  <div className="container">
      <div className='row border border-dark p-5'>
          <div className='col-lg-4'>
              <img src={data.image} alt="" className='img-fluid'></img>
          <h5>Title</h5>
          </div>
           <div className='col-lg-6 text-start'>
              <h3 className='text-center '><u>Details</u></h3>
           <h3>Title : {data.title}</h3><br />
           <h5>Category :{data.category} </h5><br />
           {/* <h5> : {data.rating}</h5> */}
           <h5>Price :{data.price} </h5><br />
           <h5>Rating : ⭐⭐⭐⭐⭐</h5><br />
           <h5>Description : {data.description}</h5>
           </div>
      </div>
  </div>

  </>
)
  } else{
      return<div>
          <div><UserLoader /></div>
      </div>
  }
}

export default Product;