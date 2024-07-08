import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import table from '../assets/table.png'
const BreadCrumbs = () => {
    const {pathname} = useLocation();
    
     const p=pathname.split("/").filter(x=>x)
     console.log(p)
     let bp=''
  return (
    <div  className='ml-2' >
        
        <Link to='/' > Home</Link>
        <Link to='/shop' >/ Shop</Link>
      

{p.map((name, index) => {
    bp += `/${name}`
   
    const last=index===p.length-1
    return last ?<span key={index}>/ {name}</span>  : <span>/ <Link to={bp}> {name}</Link></span>
    
    



})}


      
    </div>
  )
}

export default BreadCrumbs
