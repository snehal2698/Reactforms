import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarLoader from "./SidebarLoader"


function Users() {

  let [products, setProduct] = useState([]);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        setProduct(response.data);
        setLoaded(true);


      }, (err) => {
        console.log(err);
        setLoaded(true);

      });


    }, 2000);

  }, []);
  if (loaded) {
    return (
      <>
        <h3>Welcome Users</h3>
        <div className="container">
          <div className='row'>
            {
              products.map((data) => {
                return <div className="card col-lg-3">
                  <Link to={"/product/" + data.id} style={{ color: "black", textDecoration: 'none' }}>
                    <img className="card-img-top" src={data.image} alt="product image" />
                    <div className="card-body">



                    </div>
                    <ul className="list-group list-group-flush">
                      <h5>Category : {data.category}</h5>
                      <h5 className="card-title"> title : {data.title}</h5>
                      <h6>Description : {data.description}</h6>
                      {/* <h5>Rating : {data.rating.rate}</h5> */}
                      <h5>Price : {data.price}</h5>
                    </ul>
                  </Link>

                </div>

              })
            }


          </div>

        </div>

      </>
    );
  }
  else {
    return <div>
      <div>< SidebarLoader/>
      </div>
    </div>
  }

}

export default Users;