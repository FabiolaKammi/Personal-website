import React from 'react';
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className='footer-div'>
      <ul>
        <li><MdOutlineTipsAndUpdates width="30px" height="30px"/></li>
        <li>{year} Companyn Inc</li>
      </ul>
    </div>
  )
}

export default Footer
