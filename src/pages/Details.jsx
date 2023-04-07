import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { productos } from "../data/getDataProduct";

const Details = () => {

const {dataProducts} = useContext(MyContext)

const { id } = useParams();
const productDetail = dataProducts.find(item => item.id == id)


  return (
    <div className="card" style={{width: "18rem"}}>
      <h2>{productDetail.title}</h2>
      <img src={productDetail.image} alt="" />
      <p className="fw-bold">${productDetail.price}</p>
    </div>
  );
};

export default Details;
