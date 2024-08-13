import React, { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import '../../styles/Dashboard.css';
import { AuthContext } from '../../context/ConfigContext';

const DashDefault = () => {
  const { setProduct } = useContext(AuthContext);
  const formRef = useRef(null);

  const [productDetails, setProductDetails] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    completeAddress: '',
    pincode: '',
    state: '',
    city: '',
    landmark: '',
    orderId: '',
    orderDate: '',
    paymentMode: '',
    productName: '',
    category: '',
    quantity: '',
    orderValue: '',
    hsn: '',
    physicalWeight: '',
    length: '',
    breadth: '',
    height: '',
    courierservices: '',
    amount: ''
  });

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    if (e.target.name === 'pincode') {
      setLocation([]);
    };

    console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:7000/api/productorderdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productDetails),
        credentials: 'include'
      });

      const resData = await res.json();
      if (res.status === 201) {
        setProductDetails(resData);
        setProduct(resData);
        toast.success('Product Created Successfully');
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const generatePDF = ({
    fullName,
    email,
    mobileNo,
    completeAddress,
    pincode,
    state,
    city,
    landmark,
    orderId,
    orderDate,
    paymentMode,
    productName,
    quantity,
    orderValue,
    hsn,
    physicalWeight,
    breadth,
    height,
    courierservices,
    amount
  }) => {
    const doc = new jsPDF();
    let y = 10;

    Object.entries({
      fullName,
      email,
      mobileNo,
      completeAddress,
      pincode,
      state,
      city,
      landmark,
      orderId,
      orderDate,
      paymentMode,
      productName,
      quantity,
      orderValue,
      hsn,
      physicalWeight,
      breadth,
      height,
      courierservices,
      amount
    }).forEach(([label, value]) => {
      doc.text(`${label}: ${value}`, 10, y);
      y += 10;
    });

    doc.save('form-data.pdf');
  };

  const handleSubmitPdf = () => {
    const requiredFields = [
      'fullName', 'mobileNo', 'email', 'completeAddress', 'pincode',
      'state', 'city', 'landmark', 'orderId', 'orderDate', 'paymentMode',
      'productName', 'quantity', 'orderValue', 'hsn', 'physicalWeight',
      'breadth', 'height', 'courierservices', 'amount'
    ];

    if (requiredFields.every(field => productDetails[field] !== '')) {
      generatePDF(productDetails);
    } else {
      console.error('Some required fields are missing or empty.');
    }
  };

  const [location, setLocation] = useState([]);
  const [aaa, setAaa] = useState([]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const fetchLocation = async (e) => {
    const pincode = e.target.value;
    try {
      if (pincode.length === 6) {
        setIsLoadingLocation(true);
        const url = `http://localhost:7000/api/getlocation/${pincode}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        if (res.ok && data.data) {
          setLocation(data.data.addresses);
          setAaa(data.data);
          setProductDetails({
            ...productDetails,
            state: data.data.state,
            city: data.data.city
          });
        } else {
          setLocation([]);
          setAaa({});
          setProductDetails({ ...productDetails, state: '', city: '' });
        }
        setIsLoadingLocation(false);
      } else {
        setProductDetails({
          ...productDetails,
          state: '',
          city: ''
        });
      }
    } catch (error) {
      console.log("Error", error);
      setIsLoadingLocation(false);
      setProductDetails({ ...productDetails, state: '', city: '' });
    }
  }

  const handleLocationSelect = (e) => {
    const completeAddress = e.target.value;

    setProductDetails({
      ...productDetails,
      state: aaa.state,
      city: aaa.city,
      completeAddress: completeAddress
    })
  };

  return (
    <div className='div.content'>
    <div className="container">
      <form ref={formRef}>
        <div className="card">
          <div className="card-header">
            <div>
              <span>1</span>
            </div>
            <div>
              <h1>Consignee Details</h1>
            </div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Customer Full Name</label>
              <input type="text" name="fullName" placeholder="Enter full name" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mobile No</label>
              <input type="number" name="mobileNo" placeholder="Enter mobile no" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>2</span>
            <h1>Customer Address</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Complete Address</label>
              {location.length > 0 && !isLoadingLocation ? (
                <select name="completeAddress" onChange={handleLocationSelect}>
                  <option>Select Address...</option>
                  {location.map((loc, index) => (
                    <option key={loc._id} value={loc.locationName}>
                      {`${loc.locationName}`}
                    </option>
                  ))}
                </select>
              ) : (
                <input type="text" placeholder="Enter Address" />
              )}
              {isLoadingLocation && <p>Loading...</p>}
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input type="number" name="pincode" placeholder="Enter pincode" onChange={handleChange} onInput={fetchLocation} />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" placeholder="Enter state" onChange={handleLocationSelect} value={aaa.state ? productDetails.state : ''} />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" placeholder="Enter city" onChange={handleLocationSelect} value={aaa.city ? productDetails.city : ''} />
            </div>
            <div className="form-group">
              <label>Landmark</label>
              <input type="text" name="landmark" placeholder="Enter landmark" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>3</span>
            <h1>Order Details</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Order ID</label>
              <input type="text" name="orderId" placeholder="Enter Order ID" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Order Date</label>
              <input type="date" name="orderDate" placeholder="Enter Order Date" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Payment Mode</label>
              <select name="paymentMode" onChange={handleChange}>
                <option value="cod">COD</option>
                <option value="prepaid">Prepaid</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>4</span>
            <h1>Product Details</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" name="productName" placeholder="Enter Product Name" onChange={handleChange} />
            </div>
            <div className="form-group">
              {/* <label>Category</label>
              <input type="text" name="category" placeholder="Enter Category" onChange={handleChange} /> */}

              <label htmlFor="category">Category</label>
              <select name="category" id="" onChange={handleChange}>
                <option value="accessories">Accessories</option>
                <option value="fashion and clothing">Fashion & Clothing</option>
                <option value="accessories">Beauty and & Stationary</option>
                <option value="electronics">Electronics</option>
                <option value="fmcg">FMCG</option>
                <option value="footwear">Footwear</option>
                <option value="toys">Toys</option>
                <option value="sports equipment">Sports Equipment</option>
                <option value="others">Others</option>
                <option value="wellness">Wellness</option>
                <option value="medicines">Medicines</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" name="quantity" placeholder="Enter Quantity" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Order Value</label>
              <input type="number" name="orderValue" placeholder="Enter Order Value" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>HSN</label>
              <input type="text" name="hsn" placeholder="Enter HSN" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Physical Weight</label>
              <input type="text" name="physicalWeight" placeholder="Enter Physical Weight" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Length</label>
              <input type="number" name="length" placeholder="Enter Length" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Breadth</label>
              <input type="number" name="breadth" placeholder="Enter Breadth" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Height</label>
              <input type="number" name="height" placeholder="Enter Height" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Courier Services</label>
              <select name="courierservices" id="" onChange={handleChange}>
                <option value="xpressbees">Xpressbees</option>
                <option value="dtdc">DTDC Courier Service.</option>
                <option value="delhivery">Delhivery</option>
                <option value="indiaPost">IndiaPost</option>
                <option value="bluedart">Blue Dart Express</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input type="number" name="amount" placeholder="Enter Amount" onChange={handleChange} />
            </div>
          </div>
        </div>

        <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
        <button className="btn" type="button" onClick={handleSubmitPdf}>Generate PDF</button>
      </form>
    </div>
    </div>
  );
};

export default DashDefault;
