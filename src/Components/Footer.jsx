import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    const contact = "Phone: +12407897619";
    const email = "fabiolazoubet@gmail.com";
    const linkedIn = "linkedIn/fabiolakammi"
    
  return (
    
    <section>
        <ul>
            <li>{<IoIosPhonePortrait />}</li>
            <li>{contact}</li>
        </ul>
        <ul>
            <li>{<IoMdMail />}</li>
            <li>{email}</li>
        </ul>
        <ul>
            <li>{<FaLinkedin />}</li>
            <li>{linkedIn}</li>
        </ul>
    </section>
  )
}

export default Footer
