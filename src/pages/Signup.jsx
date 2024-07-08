// import signin from '../assets/signin.png';
// import axios from 'axios';
// import { useState } from 'react';


// const SignUpPopupDesktop = () => {
//   const[name,setName]=useState("");
//   const[phone,setPhone]=useState("");
// const[email,setEmail]=useState("");
// const[password,setPassword]=useState("");

//   return (
//     <div className="w-full relative bg-white h-[1080px] overflow-hidden text-center text-5xl text-black font-headline-4">
//       <div className="absolute w-[calc(100%_-_704px)] top-[0px] right-[704px] left-[0px] h-[1080px]">
//         <img 
//          src={signin}
//         />
//         <div className="absolute top-[32px] left-[315px] w-[105px] h-6">
//           <div className="absolute top-[0px] left-[0px] leading-[24px] font-medium">
//             <span>3legant</span>
//             <span className="text-neutral-04-100">.</span>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[220px] right-[160px] bg-neutral-01-100 w-[456px] flex flex-col items-end justify-start gap-[32px] text-left text-base text-neutral-07-100 font-body-2-semi">
//         <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-21xl font-headline-4">
//           <div className="self-stretch flex flex-row items-start justify-start">
//             <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
//               <div className="flex-1 relative tracking-[-0.4px] leading-[44px] font-medium">
//                 Sign up
//               </div>
//               <img
//                 className="w-10 relative h-10 object-cover hidden"
//                 alt=""
//                 src="/iconclose@2x.png"
//               />
//             </div>
//           </div>
//           <div className="self-stretch relative text-base leading-[26px] text-neutral-04-100 font-body-2-semi">
//             <span>
//               <span>Already have an account?</span>
//               <span className="text-neutral-07-100">{` `}</span>
//             </span>
//             <span className="font-semibold text-mediumseagreen">Sign in</span>
//           </div>
//         </div>
//         <div className="self-stretch flex flex-col items-start justify-start text-neutral-04-100">
//           <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
//             <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//               <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//                 <div className="flex-1 relative h-8">
//                   {/* <div className="absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] inline-block w-[456px]">
//                     Your name
//                   </div> */}
//                    <input
//                                         type="text"
//                                         placeholder="Full Name"
//                                         // value={name}
                                        
//                                         className="flex justify-center w-[456px] h-[40px] top-0 left-12 inline-block"
//                                     />
//                 </div>
//               </div>
//             </div>
//             <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//               <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//                 <div className="flex-1 relative h-8">
//                   {/* <div className="absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] inline-block w-[456px]">
//                     Username
//                   </div> */}
//                   <input
//                                         type="number"
//                                         placeholder="+91-"
//                                         // value={name}
                                        
//                                         className="flex justify-center w-[456px] h-[40px] top-0 left-12 inline-block"
//                                     />
//                 </div>
//               </div>
//             </div>
//             <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//               <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//                 <div className="flex-1 relative h-8">
//                   {/* <div className="absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] inline-block w-[456px]">
//                     Email address
//                   </div> */}

// <input
//                                         type="email"
//                                         placeholder="Email Address"
                                      
//                                         // value={name}
                                        
//                                         className="flex justify-center w-[456px] h-[40px] top-0 left-12 inline-block"
//                                     />
//                 </div>
//               </div>
//             </div>
//             <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//               <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
//                 <div className="flex-1 relative h-8">
//                   {/* <div className="absolute top-[calc(50%_-_16px)] left-[0px] leading-[26px] inline-block w-[456px]">
//                     Password
//                   </div> */}

// <input
//                                         type="password"
//                                         placeholder="Password"
//                                         // value={name}
                                        
//                                         className="flex justify-center w-[456px] h-[40px] top-0 left-12 inline-block"
//                                     />
//                   <img
//                     className="absolute h-3/4 w-[5.26%] top-[12.5%] right-[0%] bottom-[12.5%] left-[94.74%] max-w-full overflow-hidden max-h-full"
//                     alt=""
//                     src="/hugeiconinterfaceoutlineeye.svg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
//               <input type="checkbox"/>
             
//               <div className="flex-1 relative leading-[26px]">
//                 <span>{`I agree with `}</span>
//                 <span className="font-semibold text-neutral-07-100">
//                   Privacy Policy
//                 </span>
//                 <span>{` and `}</span>
//                 <span className="font-semibold text-neutral-07-100">
//                   Terms of Use
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="hover:cursor-pointer w-[456px] rounded-lg bg-neutral-07-100 flex flex-row items-center justify-center py-2.5 px-10 box-border text-center text-white">
//           <div className="relative tracking-[-0.4px] leading-[28px] font-medium">
//             Sign Up
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUpPopupDesktop;

import signin from '../assets/signin.png';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useLocation } from 'react-router-dom';

const SignUpPopupDesktop = () => {
    const location = useLocation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkbox, setCheckbox] = useState(false); // State for checkbox

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (!name || !phone || !email || !password) {
            toast.error("Fill all the details", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        // Check if checkbox is checked
        if (!checkbox) {
            toast.info("Please agree to Privacy Policy and Terms of Use", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
           
            return;
        }

        try {
            // Send form data to backend
            const response = await axios.post('http://localhost:3050/auth/signup', {
                name,
                phone,
                email,
                password
            });

            // Handle response based on status code
            if (response.status === 200) {
                toast.success("Registered Successfully", {
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
                setPassword("")
                setCheckbox(false)
                setTimeout(() => {
                    window.location.assign('/signin');  // Redirect to the sign-in page
                  }, 2000);
                
            } else {
                toast.error("Failed to Register", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Error occurred. Please try again.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            
        }
    };
    const handleClick = () => {
        location.pathname !== '/signin' && window.location.assign('/signin');
      };

    return (
        <>
        <ToastContainer />
        <div className='flex-col md:flex-row' >
        <div className=" bg-white overflow-hidden text-center text-5xl text-black font-headline-4">
            <div className="absolute   right-[704px] left-[0px] ">
                <img className="w-[375px] h-[430px] px-6 md:w-[736px] md:px-10  mq500:w-[500px] mq500:mx-16 mq768:h-[600px] lg:w-[350px] lg:h-[750px]  xl:w-[736px] xl:h-[1080px] " src={signin} alt="signin image" />
                <div className="absolute top-[32px] left-[315px] w-[105px] h-6">
                    <div className=" top-[32px] left-[315px] leading-[24px] font-medium">
                        <span>3legant</span>
                        <span className="text-neutral-04-100">.</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bottom-0 mx-14 mt-[500px] md:absolute md:mx-20 md:top-[220px] md:mt-[500px]  mq750:mt-[650px] lg:mt-0 right-[10px] bg-neutral-01-100 w-[456px] flex flex-col items-end justify-start gap-[32px] text-left text-base text-neutral-07-100 font-body-2-semi">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-21xl font-headline-4">
                    <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex-1 relative tracking-[-0.4px] leading-[44px] font-medium">
                                Sign up
                                
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
                            <span>Already have an account?</span>
                            <span className="text-neutral-07-100">{` `}</span>
                        </span>
                        <span onClick={handleClick}className="font-semibold text-mediumseagreen cursor-pointer">Sign in</span>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-neutral-04-100">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                        <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                                <div className="flex-1 relative h-8 w-[311px]">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="flex justify-center w-[311px] h-[40px] md:w-[456px] md:h-[40px] top-0 left-12"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[456px] box-border h-10 flex flex-col items-start justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2 border-b-[1px] border-solid border-neutral-03-100">
                                <div className="flex-1 relative h-8">
                                    <input
                                        type="number"
                                        placeholder="+91-"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="flex justify-center w-[311px] h-[40px] md:w-[456px] md:h-[40px] top-0 left-12"
                                    />
                                </div>
                            </div>
                        </div>
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
                            <input
                                type="checkbox"
                                checked={checkbox}
                                onChange={(e) => setCheckbox(e.target.checked)}
                            />
                            <div className="flex-1 relative leading-[26px]">
                                <span>{`I agree with `}</span>
                                <span className="font-semibold text-neutral-07-100 text-wrap">
                                    Privacy Policy
                                </span>
                                <span>{` and `}</span>
                                <span className=" overflow-auto text-wrap font-semibold text-neutral-07-100">
                                    Terms of Use
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleSignUp}
                    className="hover:cursor-pointer w-[311px] rounded-none mr-40 md:w-[456px] md:rounded-lg md:mr-0 mq750:ml-80 bg-neutral-07-100 flex flex-row items-center justify-center py-2.5 px-10 box-border text-center text-white"
                >
                    <div className="relative tracking-[-0.4px] leading-[28px] font-medium">
                        Sign Up
                    </div>
                </button>
            </div>
        </div>
        </div>
        </>
    );
};

export default SignUpPopupDesktop;
