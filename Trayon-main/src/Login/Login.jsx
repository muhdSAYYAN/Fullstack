import { useState, useEffect,useContext } from "react";
import { Shopcontext } from "../context/Shop-context";
import "./login.css"


function Login() {
  const initialValues = { username: "", email: "", password: "",address:"",lastname:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");
  // const [orderPlaced, setOrderPlaced] = useState(false);
  const { cartitems,getTotal } = useContext(Shopcontext);
  const ordertotal = getTotal();
  const delivarypercent = 5;
  const discountPercent = 10;
  const discountAmount = (ordertotal * discountPercent) / 100;
  const delivaryAmount = (ordertotal * delivarypercent) / 100;

  const totalPayableamount = (ordertotal+delivaryAmount) - discountAmount;

  // const handleOrderNow = () => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     setSuccessMessage("Order placed successfully!");
  //     setShowPopup(true);
  //     setFormValues(initialValues);
  //     setIsSubmit(false)
  //   } else {
  //     setSuccessMessage("Please fill the address!");
  //     setShowPopup(true);
  //   }
  // };

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "First Name is required!";
    }
    if (!values.lastname) {
        errors.lastname = "Last Name is required!";
      }
    if (!values.address) {
        errors.address = "Address can't be empty!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Phone no is required";
    } else if (values.password.length < 10) {
      errors.password = "Please enter a valid number";
    } else if (values.password.length > 10) {
      errors.password = "please enter a valid number";
    }
    return errors;
  };
 
  // console.log(Object.values(cartitems).reduce((acc, quantity) => acc + quantity, 0));

  return (
    <>
    <div className="checkoutt">
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h1 className="bill">Billing Address</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Firstname"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="field">
            <label>Last name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastname}</p>
          <div className="field">
            <label>Email Add</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Address </label>
            <textarea name="address" id="" cols="28" rows="1" placeholder="Address"   value={formValues.address}
              onChange={handleChange}></textarea>
          </div>
          <p>{formErrors.address}</p>

          <div className="field">
            <label>Phone no</label>
            <input
              type="text"
              name="password"
              placeholder="Enter phone number"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
          <button className="fluid ui button blue" >Submit</button>
          </div>
        </div>
      </form>
    </div>
    <div className="order">
    {/* {Object.keys(cartitems).map((itemId) => (
          <li key={itemId}>
          Quantity: {cartitems[itemId]}
          </li>
        ))} */}
        <div className="summary">
            <h1>Order Summary</h1>
        </div>
        <div className="qnt">
            <span>Total Quantity : {Object.values(cartitems).reduce((acc, quantity) => acc + quantity, 0)}</span>

        </div>
        <div className="amnt">
            <span>Order Total</span>
            <span>₹{ordertotal}</span>

        </div>
        <div className="amnt">
            <span>Discounts</span>
            <span>₹{discountAmount}</span>
            </div>
            <div className="amnt">
            <span>Delivary charges</span>
            <span>₹{delivaryAmount}</span>
            </div>
            <div className="total">
                <span>Total Payable Amount</span>
                <span>₹{totalPayableamount}</span>
            
            </div>
       
            <div className="payment">
<button type="button " className="ordernow" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ORDER NOW
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" className="success">Order Placed Successfully</h5>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" className="cancel">Cancel Order</button>
        <button type="button" class="btn btn-primary" className="continue" data-bs-dismiss="modal">Back To Shop</button>
      </div>
    </div>
  </div>
</div>

            </div>
       
        

    </div>
    </div>
    </>
  );
}

export default Login;

