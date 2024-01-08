import { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import allproducts from './Prdata';
import love from "./wish.png"
import wish from "./love.png"
import cmp from "./left-and-right-arrows.png"
import cart from "./add-to-basket.png"
import { Shopcontext } from '../context/Shop-context';


function Single() {
  const { productId } = useParams();
  const [product,setproduct] = useState();
  const {addTocart,cartitems} = useContext(Shopcontext);
  const [buttontext,setbuttontext] = useState('ADD TO CART');
  const [wishlist,setwishlist] = useState(wish);
  const [photo,setphoto] = useState("");
  

  const handleclick2 = ()=>{
    setwishlist(love);
  }

  const handleclick = ()=>{
    setbuttontext('ADDED TO CART');
  }



  useEffect(()=>{
    const data = allproducts.filter((item)=>{
      return item.id == productId;
    });
    setproduct(data[0]);
  },[productId]);

  if(!product){
    return null;
  }
  
    const {id,pname,image,pdts,category,material,price,image2,image3,image4,image5,image6,mrp} = product;

    







  return (
    <>
    <div className='details'>
      <div className="details-1">
        <h1>{pname}</h1>
        <span>{pdts}</span>
        <img src={photo || image2} alt="" className='chair'/>
        <div className="angles">
          <img onClick={()=> setphoto(image2)} src={image2} alt="" />
          <img onClick={()=> setphoto(image3)} src={image3} alt="" />
          <img onClick={()=> setphoto(image4)} src={image4} alt="" />
          <img onClick={()=> setphoto(image5)} src={image5} alt="" />
          <img onClick={()=> setphoto(image6)} src={image6} alt="" />

        </div>

      </div>
      <div className="details-2">
        <div className="free">

        </div>
        <div className="add">
          <div className="wish" onClick={handleclick2}>
            <img src={wishlist} alt="" />
            <h1>Add to wish list</h1>
          </div>
          <div className="wish">
            <img src={cmp} alt="" />
            <h1>Add to compare</h1>

          </div>
        </div>
        <div className="sale">
          <h1>41% OFF</h1>
        </div>
        <div className="mtrl">
        <div className="material">
          <h1>Material</h1>
          <span>{material}</span>
        </div>
        <div className="material">
          <h1>category</h1>
          <span>{category}</span>
        </div>
        </div>
        <div className="prices">
          <div className="mrp">
            <span>MRP</span>
            <span className='mrpp'>₹{mrp}</span>
          </div>
          <div className="price2">
          <h1>₹{price}/-</h1>
          <span>(inclusive of all taxes)</span>
          </div>
          
        </div>
        <div className="addtocart" onClick={() => {addTocart(id)}}>
          <img src={cart} alt="" />
          <span onClick={handleclick}>{buttontext}</span>
        </div>

      </div>
    
    </div>
    </>
  );
}

export {Single};



