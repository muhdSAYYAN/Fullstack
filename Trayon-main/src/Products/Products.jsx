import React from 'react'
import "./pr.css"
import sr from "./search.png"
import allproducts from './Prdata'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link} from 'react-router-dom'
export const Products = () => {
  const [data, setData] = useState(allproducts);
  const navigate = useNavigate();

  const filterset = (catitem) => {
    const result = allproducts.filter((curdata) => {
      return curdata.category === catitem;
    });
   setData(result);
  };
  const material = (catitem) => {
    const result = allproducts.filter((curdata) => {
      return curdata.material === catitem;
    });
   setData(result);
  };
  const brand = (catitem) => {
    const result = allproducts.filter((curdata) => {
      return curdata.pdts === catitem;
    });
   setData(result);
  };
  const pricerange = (catitem) => {
    const result = allproducts.filter((curdata) => {
      return curdata.prange === catitem;
    });
   setData(result);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


 


  return (
    <>
    <div className='filterbar'>
      <div className="sr-bar">
      <input type="search" />
      <img src={sr} alt="" />
      </div>
  
      <div class="dropdown drop-down">
  <button class="btn btn-secondary dropdown-toggle color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a onClick={() => setData(allproducts)} class="dropdown-item" href="#">All</a></li>
    <li><a onClick={() => filterset('bed')} class="dropdown-item" href="#">Bedroom</a></li>
    <li><a onClick={() => filterset('living')} class="dropdown-item" href="#">Living</a></li>
    <li><a onClick={() => filterset('lights')}class="dropdown-item" href="#">Outdoor</a></li>
  </ul>
</div>
<div class="dropdown drop-down">
  <button class="btn btn-secondary dropdown-toggle color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Price
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a onClick={() => setData(allproducts)} class="dropdown-item" href="#">All</a></li>
    <li><a onClick={()=> pricerange('1k 5k')} class="dropdown-item" href="#">₹1000-5000</a></li>
    <li><a onClick={()=> pricerange('5k 10k')}  class="dropdown-item" href="#">₹5000-15000</a></li>
    <li><a onClick={()=> pricerange('10k 20k')}  class="dropdown-item" href="#">₹15000-35000</a></li>
  </ul>
</div>
<div class="dropdown drop-down">
  <button class="btn btn-secondary dropdown-toggle color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Material
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a onClick={() => setData(allproducts)} class="dropdown-item" href="#">All</a></li>
    <li><a class="dropdown-item" onClick={()=> material('wood')} href="#">Wood</a></li>
    <li><a class="dropdown-item" onClick={()=> material('metal')} href="#">Metal</a></li>
    <li><a class="dropdown-item" onClick={()=> material('fibre')} href="#">Fibre</a></li>
    <li><a class="dropdown-item" onClick={()=> material('foam')} href="#">Foam</a></li>
    <li><a class="dropdown-item" onClick={()=> material('polyster')} href="#">Polyster</a></li>
  </ul>
</div>
<div class="dropdown drop-down">
  <button class="btn btn-secondary dropdown-toggle color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Brand
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a onClick={() => setData(allproducts)} class="dropdown-item" href="#">All</a></li>
    <li><a class="dropdown-item" onClick={()=> brand('By urban ladder')} href="#">By urban ladder</a></li>
    <li><a class="dropdown-item" onClick={()=> brand('By vintage')} href="#">By vintage</a></li>
    <li><a class="dropdown-item" onClick={()=> brand('By febonic')} href="#">By febonic</a></li>
  </ul>
</div>
    </div>
    <div className="products">
      {data.map((item)=>{
        return(
          <div onClick={()=> navigate(`/products/${item.id}`)} className='cards'>
            <img src={item.image} alt="" />
            <h1>{item.pname}</h1>
            <div className='price'>
            <span>₹{item.price}/-</span>
            <span className='emi'>EMI from ₹105</span>
            </div>
            <Link to={`/products/${item.id}`}><button>View Product</button></Link>
          </div>
        )
      })}
    

    </div>
    </>
  )
}
