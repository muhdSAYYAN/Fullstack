import React from "react";
import products from "../db/Data";
import decors from "../db/Light";
import living from "../db/Living";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Item = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="light">
        <div className="title">
          <h1>Bedrooms & Mattresses</h1>
        </div>
        {products.map((item) => {
          return (
            <div onClick={()=> Navigate("Products")} className="bed">
              <img src={item.image} alt="" />
              <h1>{item.pname}</h1>
              <Link to='Products'><button className="vm">View more</button></Link>
            </div>
          );
        })}
      </div>
      <div className="light">
        {decors.map((item) => {
          return (
            <div className="bed">
              <img src={item.image} alt="" />
              <h1>{item.pname}</h1>
              <Link to='Products'><button>View more</button></Link>
            </div>
          );
        })}
        <div className="title">
          <h1>Lighting & Decor</h1>
        </div>   
            
            </div>
            <div className="light">
            <div className="title">
          <h1>Living & Outdoor</h1>
        </div>
        {living.map((item) => {
          return (
            <div className="bed">
              <img src={item.image} alt="" />
              <h1>{item.pname}</h1>
              <Link to='Products'><button>View more</button></Link>
            </div>
          );
        })}
          
            
            </div>
        
    </>
  );
};
