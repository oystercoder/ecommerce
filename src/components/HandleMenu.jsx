// import React from 'react'
// import { useState } from 'react';


//  const HandleMenu=()=>
// {
//  const [background,setBackground]=useState('transparent')
//   console.log("this works");
  
//   // Wrap alert in a setTimeout to ensure it's executed after the component is re-rendered
//   setTimeout(() => {
//     alert("button is clicked");
//   }, 0);
//        setBackground('red'); // Change the background color state
//   // };
//   // onClick={handleMenuToggle}
 

//   return (
   
   
//       <div className='bg-red-400 top-0 w-full h-full'></div>
      
//   )
// }
// export default HandleMenu

// import React, { useState, useEffect } from 'react';

// const HandleMenu = () => 
//     {
   
//   const [background, setBackground] = useState('white');
  
//   useEffect(() => {
//     console.log("this works");
//     alert("button is clicked");
//     setBackground('white'); // Change the background color state
//   },[background]);

//   return (
//     <div className={`bg-white top-0 w-[400px] h-full`}></div>
//   );
// }

// export default HandleMenu;

import React, { useState, useEffect } from 'react';

const HandleMenu = () => {
  const [background, setBackground] = useState('white');

  const handleClick = () => {
    console.log("Button is clicked");
    alert("Button is clicked");
    setBackground('white'); // Change the background color state
  };

  return (
    <div className={`bg-${background} top-0 w-[400px] h-full`} onClick={handleClick}>
      {/* Content goes here */}
    </div>
  );
}

export default HandleMenu;


