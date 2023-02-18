import React from 'react';

const Contact = () => {
    return (
        <div className='bg-blue-400 mx-4'>
          
            <div className="hero w-full my-2 ">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src='https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-7">
                <h1 className="text-2xl text-center font-bold">Contact Info</h1>
                <form  className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name'  placeholder="Your Name" className="input input-bordered " required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>

                 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone country code </span>
                        </label>
                        <input type="number" name='number' placeholder="Your phone Number" className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume</span>
                        </label>
                        <input type="text" name='name' placeholder="Be sure to include an updated resume" className="input input-bordered" required/>
                    </div>


                    
                   
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Submit application" />
                    </div>
                </form>
               
            </div>
        </div>
    </div>
        </div>
    );
};

export default Contact;