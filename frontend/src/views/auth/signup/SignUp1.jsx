import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const SignUp1 = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    touched: false
  });

  const [loading, setLoading] = useState(false);


  const handleBlur = () => {
    if (userData.email.trim() === '' || userData.password.trim() === '') {
      setUserData({
        ...userData,
        touched: true
      });
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch('https://officeproject.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const resData = await res.json();
      console.log(resData);

      // const resData = await res
      setUser(res);
      if (res.ok) {
        setLoading(false);
        navigate('/signin');
      }
    } catch (error) {
      console.error('Signin error:', error);
    }
  };


  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless">
            <Row className="align-items-center">
              <Col>
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon" />
                  </div>
                  <h3 className="mb-4">Sign up</h3>
                  <div className="input-group mb-3">
                    <input type="text" name='name' onChange={handleChange} className="form-control" placeholder="Username" />
                  </div>
                  <div className="input-group mb-3">
                    <input type="email" name='email' onChange={handleChange} className="form-control" placeholder="Email address" />
                  </div>
                  <div className="input-group mb-4">
                    <input type="password" name='password' onChange={handleChange} className="form-control" placeholder="Password" />
                  </div>
                  {/* <div className="form-check  text-start mb-4 mt-2">
                    <input type="checkbox" className="form-check-input" id="customCheck1" defaultChecked={false} />
                    <label className="form-check-label" htmlFor="customCheck1">
                      Send me the <Link to="#"> Newsletter</Link> weekly.
                    </label>
                  </div> */}
                  <button className="btn btn-primary mb-4" onClick={handleSubmit}>Sign up</button>
                  <p className="mb-2">
                    Already have an account?{' '}
                    <NavLink to={'/auth/signin-1'} className="f-w-400">
                      Login
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp1;
