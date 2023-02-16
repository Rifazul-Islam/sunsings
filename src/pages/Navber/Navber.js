import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

      const itemsMenu = <>
                 
                 <li> <Link> Home</Link> </li>
                 <li> <Link> Contact Us</Link> </li>
                 <li> <Link> About</Link> </li>
                 <li> <Link> Sign In</Link> </li>
                 
        </>
    return (
     <div className=' mx-4 mt-2 '>
     <div className="navbar bg-green-500">
    <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
       {itemsMenu}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navber;