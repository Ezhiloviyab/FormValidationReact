
import {useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

import { emailValidator,passwordValidator } from '../components/rejuxvalidator';
const Login = () => {
  const navigate = useNavigate();


    const [input,setInput]=React.useState({email:"",password:""})
    const [errorMessage,seterrorMessage]=React.useState("")
    const [successMessage,setsuccesMessage]=React.useState("")

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const FormSubmitter = (e) => {
        e.preventDefault();
        setsuccesMessage('')
       if(!emailValidator(input.email))
       return seterrorMessage('please enter valid email')
      
       if (!passwordValidator(input.password))
       return seterrorMessage(
           'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
       );
       setsuccesMessage('Sucessfully validated')
       if (input.email !== 'ezhil1312@gmail.com' || input.password !== 'Password@13')
       return seterrorMessage('Invalid email or password');
     
       localStorage.setItem('auth', true)
       navigate('/');
      };
  return (
    <div className="container">
     
          
           
              <h3> User  Login</h3>
            
            
              <form onSubmit={FormSubmitter}><span>
              {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
              {successMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
                    	</span>	
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Username</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password"id="password" placeholder="Enter your password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            
            
              <p>Or sign in with:</p>
              <button className="btn  btn-light btn-block mb-3"><i className="fab fa-google"></i> Sign in with Google</button><br/>
              <button className="btn btn-primary btn-block"><i className="fab fa-facebook"></i> Sign in with Facebook</button>
            
          
        
      </div>
    
        
  );
};

export default Login;
