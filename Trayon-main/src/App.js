import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Products } from './Products/Products';
import { Single } from './Products/Single';
import { Shopcontextprovider } from './context/Shop-context';
import { Cart } from './cart/Cart';
import Login from './Userlogin/Login';
import Register from './Register/Register';
import Seller from './SellerPage/Seller/Seller';
import Admin from './AdminPage/Admin';
import Usersdata from './AdminPage/Admincomponents/Usersdata';
import Sellerdata from './AdminPage/Admincomponents/Sellerdata';
import Blocklist from './AdminPage/Admincomponents/Blocklist';
import Myproducts from './SellerPage/Seller/SellerComponents/Myproducts';
import UploadProduct from './SellerPage/Seller/SellerComponents/UploadProduct';



function App() {

  return (
    <div className="App">
      <Shopcontextprovider>
      <BrowserRouter>
      <Routes>

         
      <Route path='/log' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
            
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/allusers' element={<Usersdata/>}/>
              <Route path='/allsellers' element={<Sellerdata/>}/>
              <Route path='/blockedlist' element={<Blocklist/>}/>

              <Route path='/seller' element={<Seller />} />
              <Route path='/myproduct' element={<Myproducts />} />
              <Route path='/addproduct' element={<UploadProduct />} />
       
    
                    <Route index element={<Home />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/products/:productId' element={<Single />} />
                    <Route path='/cart' element={<Cart />} />
             
          
          <Route path='*' element={<Navigate to='/log' />} />

      </Routes>
      </BrowserRouter>
      </Shopcontextprovider>
   
    </div>
  );
}

export default App;
