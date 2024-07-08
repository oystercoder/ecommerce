import React from 'react'
import Footer from '../components/Footer'
import { Container } from 'postcss'
import table from '../assets/decor.png'
import { IoIosCamera } from "react-icons/io";
import { useState } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Account = () => {
    const fileInputRef = useRef(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [newpassword, setnewpassword] = useState('');
    const [repeatpassword, setrepeatpassword] = useState('');
    const handle=async(e)=>{
        e.preventDefault();
        console.log("entered handle function")
        if(!name||!phone||!email||!newpassword||!repeatpassword)
            {
                toast.error("Please fill all the fields",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    
                })
            }
            

        
        try{
        const response = await axios.patch('http://localhost:3050/auth/signup', {
            name,
            phone,
            email,
            newpassword,
            repeatpassword
        });
    
      
        // Handle response based on status code
        if (response.status === 200) {
            console.log("success")
            toast.success("Updated Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

           
        
            setName("")
            setPhone("")
            setEmail(""), 
            setnewpassword("")
            setrepeatpassword("")

            
        }
        if(response.status===400)
            {
                toast.error("Passwords Don't Match", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
     
        
            //  if(response.status===404)
            //     {
            //         toast.error("Enter Valid Credentials", {
            //             position: "top-center",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //             theme: "colored",
            //         })
            //     }
        }catch(error)
        {
             
            toast.error("Error in the details filled", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }
            );
        }
    
    
};
    
    const run=()=>{
        fileInputRef.current.click();

    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Handle the selected file here (e.g., upload to server, display preview, etc.)
        console.log('Selected file:', file);
      };
  return (
    <>
    <ToastContainer />
    <h1 className="font-poppins text-3xl font-medium leading-64 tracking-tight text-center py-[80px] pb-4">MY ACCOUNT</h1>
    <div className='flex flex-col md:flex md:flex-row justify-between' >
        
   
    {/* mq450:bg-red-500 w-[132px] h-[100px] */}
    {/* mq750:ml-[16px] bg-gray-200 w-[262px] h-[444px] */}
    {/* flex-col mq350:flex flex-col justify-center mq750:flex flex-row justify-between mq1050:  */}


   
       
    <div className='bg-gray-200 w-[312px] h-[288px] ml-[300px] md:ml-16  md:w-[262px] md:h-[444px] mr-5 '>
        <div className='relative mq350:flex justify-center'>
            <div className='flex flex-col flex-wrap'>

        <img src={table} className=' w-[82px] h-[82px]  ml-24 m-16 rounded-full' />
        
        
        <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
       
        <IoIosCamera onClick={run} className='absolute hover:cursor-pointer bottom-0 right-0 mr-20 mb-[64px]  text-5xl' />
        <span className='absolute  font-inter text-base font-semibold leading-8 flex justify-center text-center mt-36 ml-20'>Sofia Havertz</span>

         

        
        </div>
        
        </div>
        {/* <ul className=' mq450:text-gray-700 ml-16 flex flex-col align-center list-none'> */}
        <ul className='hidden md:flex flex-col justify-center md:mr-24 items-center list-none text-gray-700 ml-16 gap-[12px]'>

            
            <li className='hover:text-15xl hover:underline mb-[12px]'>
                    Account
                </li>
                <li className='hover:text-15xl hover:underline mb-[12px]'>
                    Address
                </li>
                <li className='hover:text-15xl hover:underline mb-[12px]'>
                    Orders
                </li>
                <li className='hover:text-15xl hover:underline mb-[12px]'>
                   Wishlist
                </li>
                <li className='hover:text-15xl hover:underline mb-[12px]'>
                    Logout
                </li>
            </ul>
       

    </div>
    <div>
    
   
       
      
<form  className='flex flex-col justify-center ml-[500px] items-center md:flex md:ml-0 md:flex-col md:justify-start md:items-start'>
{/* <div class='ml-[16px] bg-gray-200 w-[262px] h-[444px] right-0'>

</div> */}
  
    {/* <div class="font-inter text-base font-semibold leading-8 mr-96">
     Account Details.

    </div> */}
    <div className='flex flex-col'>
    <div className="font-inter text-base font-semibold leading-8 mr-96">
     Account Details.

    </div>
    
    
        <label className='flex justify-center mb-2 md:m-2 md:flex flex-col'>FULL NAME</label>
        <input   value={name} onChange={(e) => setName(e.target.value)} className='mb-3 ml-3 w-[312px] h-[40px] border-gray-300 mb-3 ml-3 mr-96 md:w-[707px] md:h-[40px] border border-gray-300 mb-3 ml-3 mr-96' type="text" placeholder='Full Name' />
        </div>
    
    <div className='flex flex-col'>
        <label className='mb-2'>MOBILE NUMBER*</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className='mb-3 ml-3 w-[312px] h-[40px] md:w-[707px] md:h-[40px] border border-gray-300 mb-3 mr-96 mq350:w-[300px] mq750:w-[707px]' type="text" placeholder='+91-' />
    </div>
    <div className='flex flex-col'>
        <label className='mb-2'>EMAIL*</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='mb-3 ml-3 w-[312px] h-[40px] md:w-[707px] md:h-[40px] border border-gray-300 mr-96 mb-24' type="text" placeholder='EMAIL' />
    </div>
    
</form>
<form className='flex flex-col justify-center ml-[150px] items-center md:flex md:ml-0 md:flex-col md:justify-start md:items-start'>
{/* <div class="font-inter text-base font-semibold leading-8 mr-96">
     Change Password

    </div> */}
    <div className='flex flex-col'>
    <div className="font-inter text-base font-semibold leading-8 ml-[500px] md:ml-0">
     Change Password

    </div>
        <label className='mb-2 ml-[350px] md:ml-0'>NEW PASSWORD</label>
        <input value={newpassword} onChange={(e) => setnewpassword(e.target.value)} className='mb-3  w-[312px] h-[40px] ml-[350px] md:w-[707px] md:ml-0 md:h-[40px] border border-gray-300 mr-96 md:mb-4' type="text" placeholder='NEW PASSWORD' />
    </div>
    <div className='flex flex-col'>
        <label className='mb-2 ml-[350px] md:ml-0'>REPEAT NEW PASSWORD</label>
        <input value={repeatpassword} onChange={(e) => setrepeatpassword(e.target.value)} className='mb-3  w-[312px] ml-[350px] h-[40px] md:ml-0 md:w-[707px] md:h-[40px] border border-gray-300 mr-96 md:mb-8' type="text" placeholder='REPEAT NEW PASSWORD' />
        <button onClick={handle} className='ml-[500px] md:ml-0 bg-black text-white w-[183px] h-[52px] mb-16'>
        Save Changes
    </button>

    </div>
    

</form>
</div>

</div>



        <Footer />
      
        </>

  )
}

export default Account