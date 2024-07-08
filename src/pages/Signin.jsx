// import signin from '../assets/signin.png'
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { LuEye } from "react-icons/lu";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { useState } from 'react';
// import axios from 'axios';
// const SignInPopupDesktop = () => {
  
//   const [isStar, setIsStar] = useState(true);
//   const toggleIcon = () => {
//     setIsStar(!isStar)
//   };
// const toggle=()=>{
//   setIsStar(!isStar)

// }

//   const run=()=>(
//     <FaRegEyeSlash />

//   )
//   return (
//     <div className="flex flex-col w-full relative bg-white h-[1080px]  text-center text-[24px] text-black font-headline-4">
//       <div className="absolute  top-[0px] right-[704px] left-[0px] h-[1080px]">
//         <img
//           className="w-[375px] h-[430px] m-10 object-fit  mq350:w-[500px] h-[600px] left-3 mq750:h-[600px] w-[736px]  bg-red-300 max-mq1050: h-[1080px] w-[376px] object-cover bg-yellow-200"
//           alt=""
//           src={signin}
//         />
//         <div className="absolute top-[32px] left-[315px] w-[105px] h-6">
//           <div className=" top-[0px] left-[0px] leading-[24px] font-large">
//             <span>3legant</span>
//             <span className="text-neutral-04-100">.</span>
//           </div>
//         </div>
//       </div>
//       <div className="absolute flex flex-col text-center mt-96 ml-56 w-[311px] mq350:flex flex-col text-center absolute top-[100px] right-[160px]  bg-neutral-01-100 w-[311px] mb-[70px] items-end justify-start gap-[32px] text-left text-base text-neutral-07-100 font-button-s mq750: text-center w-[300px]   mq1050:m-8  w-[456px]   ">
//         <div className="flex flex-col items-start justify-start gap-[24px] text-21xl font-headline-4">
//           <div className="flex flex-row items-center justify-center mq450:self-stretch flex flex-row items-start justify-start">
//             <div className="flex-1 flex flex-row items-center justify-center mq450:flex flex-row items-start justify-start">
//               {/* <div className="flex-1 justify-center items-center   tracking-[-0.4px] leading-[44px] font-medium ml-56 sm:flex-1 justify-center items-center   tracking-[-0.4px] leading-[44px] font-medium ml-0">
//                 Sign In
//               </div> */}
//               <div className="text-sm flex justify-center items-center leading-[44px] font-medium ml-56 flex-1 mq450:justify-center sm:items-center sm:tracking-[-0.4px] sm:leading-[44px] mq350:font-medium mq350:ml-0">
//   Sign In
// </div>

//             </div>
//           </div>
//           <div className="self-stretch relative text-base leading-[26px] text-neutral-04-100 font-button-s">
//             <span>
//               <span>Don’t have an accout yet?</span>
//               <span className="text-neutral-07-100">{` `}</span>
//             </span>
//             <button className="flex justify-center font-semibold text-mediumseagreen bg-transparent ">Sign Up</button>
//           </div>
//         </div>
//         <div className="relative flex flex-col items-start justify-start text-neutral-04-100 w-[311px] mq350: py-40px">
//           <div className=" flex flex-col items-start justify-start gap-[32px]">
//             <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//               <div className=" flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//                 {/* <div className="fixed w-fill flex-1 relative h-8 mq750:w-[456px] flex-1 relative h-8 mq1050:right-0 w-[200px]"> */}
//                 <div className='flex justify-center items-center  mq450:flex justify-start items-start'>
//                   <input placeholder="email address"className="  flex flex justify-center w-[456px] h-[40px] top-0 left-12  inline-block  "/>
                   
                 
                  

//                    {/* <input cltype="text" placeholder=' Your username or email address'/> */}
//                 </div>
//               </div>
//             </div>
//             <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//               <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//                 <div className="flex-1 relative h-8">
//                   {/* <input type="password" placeholder='password' className=" flex justify-between absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] inline-block w-[456px]"/> */}
//                   <div className="flex justify-between absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] w-[300px] inline-block sm: w-[456px] mq1050:right-0 w-[400px] ">
//                   <input placeholder="Password"className="  flex flex justify-center w-[456px] h-[40px] top-0 left-12  inline-block  "/>
//                     {/* Password */}
                  
//                   {/* <img
//                     className="absolute h-3/4 w-[5.26%] top-[12.5%] right-[0%] bottom-[12.5%] left-[94.74%] max-w-full overflow-hidden max-h-full"
//                     alt=""
//                     src={<LuEye />}
//                   /> */}
//                   {isStar ? (<LuEye onClick={toggleIcon} />): (<FaRegEyeSlash  onClick={toggle} />)}
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch relative h-[26px] text-neutral-07-100">
              
//               <div className="absolute top-[calc(50%_-_13px)] right-[0px] leading-[26px] font-semibold">
//                 Forgot password?
//               </div>
//               {/* <img
//                 className="absolute top-[1px] left-[0px] rounded w-6 h-6 overflow-hidden"
//                 alt=""
//                 src="/ratio-button.svg"
//               /> */}
//               <input  type='checkbox' className='absolute text-black text-5xl' />
              
            
//               <div className="absolute top-[0px] left-[36px] leading-[26px] text-neutral-04-100">
//                 Remember me
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center w-[311px]  mb-72  top-1/2   mq350:w-[456px] rounded-lg bg-neutral-07-100 flex flex-row items-center justify-center py-2.5 px-10 box-border text-center text-white">
//           <div className="relative tracking-[-0.4px] leading-[28px] font-medium">
//             Sign In
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPopupDesktop;


import React, { useState } from 'react';
import axios from 'axios';
import signin from '../assets/signin.png';
import { LuEye } from 'react-icons/lu';
import { FaRegEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignInPopupDesktop = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const handleClick = () => {
        location.pathname !== '/signup' && window.location.assign('/signup');
      };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3050/auth/signin', {
                email,
                password,
            });
            if(response.status===200)
              {
                toast.success("Successfull", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    window.location.assign('/');  // Redirect to the sign-in page
                  }, 2000);
              }
              else{
                toast.error("User not found", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
              }
            console.log(response.data);
             // Handle successful login response
            // Optionally, store token or user data in local storage or state
        } catch (error) {
            toast.error("Enter valid details", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // console.error('Error:', error);

            setError('Failed to sign in');
        }
    };

    return (
        <>
        <ToastContainer />
        {/* <div className="flex flex-col w-full relative bg-white h-[1080px] text-center text-[24px] text-black font-headline-4">
            <div className="absolute top-[0px] right-[704px] left-[0px] h-[1080px]">
                <img
                    className="w-[375px] h-[430px] m-10 md:w-[736px] md:h-[1080px] object-fit  left-3"
                    alt=""
                    src={signin}
                />
                <div className="absolute top-[32px] left-[315px] w-[105px] h-6">
                    <div className="top-[0px] left-[0px] leading-[24px] font-large">
                        <span>3legant</span>
                        <span className="text-neutral-04-100">.</span>
                    </div>
                </div>
            </div>
            <div className="absolute flex flex-col text-center mt-96 ml-56 w-[311px] mq350:flex mq350:flex-col mq350:bottom-0  mq350:absolute  mq350:top-[100px] right-[160px] bg-neutral-01-100 mq350:w-[311px] mb-[70px] items-end justify-start gap-[32px] mq350:text-left text-base text-neutral-07-100 font-button-s mq750:text-center mq750:w-[300px] mq1050:m-11 mq1050:w-[456px]">
                <div className="flex flex-col items-start justify-start gap-[24px] text-21xl font-headline-4">
                    <div className="flex flex-row items-center  justify-center mq450:self-stretch mq450:flex mq450:flex-row mq450i:tems-start mq450:justify-start">
                    <div className="flex-1 relative tracking-[-0.4px] leading-[44px] font-medium">
                                Sign In
                                
                            </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[26px] text-neutral-04-100 font-button-s">
                        <span>
                            <span>Don’t have an account yet?</span>
                            <span className="text-neutral-07-100">{` `}</span>
                        </span>
                        <span>
                        <button className="flex justify-center font-semibold text-mediumseagreen bg-transparent">
                            Sign Up
                        </button>
                        </span>
                    </div>
                </div>
                <div className="relative flex flex-col items-start justify-start text-neutral-04-100 w-[311px] mq350: py-40px">
                    <div className="flex flex-col items-start justify-start gap-[32px]">
                        <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                            <div className="flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                                <div className="flex-1 flex justify-center items-center  mq450:flex justify-start items-start">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex justify-center w-[456px] h-[40px] top-0 left-12"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                                <div className="flex-1 relative h-8">
                                    <div className="flex justify-between absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] w-[300px]  mq450:w-[456px] mq1050:right-0 mq1050:w-[400px]">
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="flex justify-center w-[456px] h-[40px] top-0 left-12"
                                        />
                                        {isPasswordVisible ? (
                                            <FaRegEyeSlash onClick={togglePasswordVisibility} />
                                        ) : (
                                            <LuEye onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch relative h-[26px] text-neutral-07-100">
                            <div className="absolute top-[calc(50%_-_13px)] right-[0px] leading-[26px] font-semibold">
                                Forgot password?
                            </div>
                            <input
                                type="checkbox"
                                className="absolute text-black text-5xl"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <div className="absolute top-[0px] left-[36px] leading-[26px] text-neutral-04-100">
                                Remember me
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleSignIn} className="w-[311px] mb-72 top-1/2 mq350:w-[456px] rounded-lg bg-neutral-07-100 flex flex-row items-center justify-center py-2.5 px-10 box-border text-center text-white">
                    <button onClick={handleSignIn} className="relative tracking-[-0.4px] leading-[28px] bg-black text-white font-medium">
                        Sign In
                    </button>
                </button>
            </div>
        </div> */}

<div className='flex-col md:flex-row' >
        <div className=" bg-white overflow-hidden text-center text-5xl text-black font-headline-4">
            <div className="absolute   right-[704px] left-[0px] ">
                <img className="w-[375px] h-[430px] px-4 md:w-[736px]  mq500:w-[500px] mq500:mx-16 mq768:h-[600px] lg:w-[350px] lg:h-[750px]  xl:w-[736px] xl:h-[1080px] " src={signin} alt="signin image" />
                <div className="absolute top-[32px] left-[315px] w-[105px] h-6">
                    <div className=" top-[32px] left-[315px] leading-[24px] font-medium">
                        <span>3legant</span>
                        <span className="text-neutral-04-100">.</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bottom-0 ml-20 mt-[500px] md:absolute md:top-[220px] md:mt-[500px] md:mx-0 mq750:mt-[650px] lg:mt-0 lg: right-[160px] bg-neutral-01-100 w-[456px] flex flex-col items-end justify-start gap-[32px] text-left text-base text-neutral-07-100 font-body-2-semi">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-21xl font-headline-4">
                    <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex-1 relative tracking-[-0.4px] leading-[44px] font-medium">
                                Sign In
                                
                            </div>
                            <img
                                className="w-10 relative h-10 object-cover hidden"
                                alt=""
                                src="/iconclose@2x.png"
                            />
                        </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[26px] text-neutral-04-100 font-body-2-semi">
                        <span>
                            <span>Don’t have an accout yet?</span>
                            <span className="text-neutral-07-100">{` `}</span>
                        </span>
                        <span onClick={handleClick} className="font-semibold text-mediumseagreen cursor-pointer">Sign Up</span>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-neutral-04-100">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                       
                       
                        <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                                <div className="flex-1 relative h-8">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex justify-center w-[311px] h-[40px] md:w-[456px] md:h-[40px] top-0 left-12"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                                <div className="flex-1 relative h-8">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="flex justify-center w-[311px] h-[40px] md:w-[456px] md:h-[40px] top-0 left-12 "
                                    />
                                    <img
                                        className="absolute h-3/4 w-[5.26%] top-[12.5%] right-[0%] bottom-[12.5%] left-[94.74%] max-w-full overflow-hidden max-h-full"
                                        alt=""
                                        src="/hugeiconinterfaceoutlineeye.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                          
                            <div className="flex-1 relative leading-[26px]">
                               
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleSignIn}
                    className="hover:cursor-pointer w-[311px] rounded-none mr-40 md:w-[456px] md:rounded-lg md:mr-0 mq750:ml-80 bg-neutral-07-100 flex flex-row items-center justify-center py-2.5 px-10 box-border text-center text-white"
                >
                    <div className="relative tracking-[-0.4px] leading-[28px] font-medium">
                        Sign In
                    </div>
                </button>
            </div>
        </div>
        </div>
        </>
    );
};

export default SignInPopupDesktop;
