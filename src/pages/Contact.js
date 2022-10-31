import React from 'react'
import StyledContact from '../styles/Contact.styled'
import {FaLinkedinIn,FaGithub,FaRegEnvelope} from 'react-icons/fa'


const Contact = () => {
  return (
    <StyledContact>
      <div><a href="https://www.linkedin.com/in/ironstone-/"><FaLinkedinIn size={40}/></a></div> <br />
      <div><a href="https://github.com/IRONSTONE-A"><FaGithub size={40}/></a></div> <br />
      <div><a href="mailto:thinkingman.6019@gmail.com"><FaRegEnvelope size={40}/></a></div>
      
      
    </StyledContact>
  )
}

export default Contact  