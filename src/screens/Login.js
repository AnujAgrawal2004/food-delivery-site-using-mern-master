import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: ""
  });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    );
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }

  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div style={{backgroundImage: 'url("https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar/>
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark text-light border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/creatuser" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>

      </div>
    </div>
    </>
  );
}
