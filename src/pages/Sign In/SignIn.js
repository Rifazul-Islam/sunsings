import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';

const SignIn = () => {

  const {handlarSogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event)=>{
    
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handlarSogin(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from, { replace: true });

      toast.success('your Sign In Successfully')
  })
  .catch(err => toast.error(`${err}`));
  
  }
  
 return (
  <div className="hero w-full my-7">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
      <div className="text-center lg:text-left"> 
        <img className='w-3/4 h-64' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmIHrjRc-M4nQ_diFRZlOXpk_vkEnDrxSiApxDrFvursDBkBnFqpwbhaxjifU45t6s8c&usqp=CAU' alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-7">
          <h1 className="text-2xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                  <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
              </div>
          </form>
          <p className='text-center'>New to Accout <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
      </div>
  </div>
</div>
    );
};

export default SignIn;