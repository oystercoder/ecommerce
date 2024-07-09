// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:3050/reviews');
//       setReviews(response.data.Reviews); // Set reviews state with fetched data
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>All Reviews</h2>
//       <ul>
//         {reviews.map(review => (
//           <li key={review._id}>
//             <p>Rating: {review.rating}</p>
//             <p>Review: {review.review}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Reviews;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Rating,Avatar,Button} from 'flowbite-react'; // Assuming Rating component from flowbite-react

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:3050/reviews');
//       setReviews(response.data.Reviews); // Set reviews state with fetched data
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   return (
//     <div>
    
//       <ul className="list-none">
//         {reviews.map(review => (
//           <li key={review._id}>
//             <div className="flex items-center mb-2 ml-28">
//             <Avatar className='mr-5' rounded />
              
             

//               <Rating max={5} value={review.rating} readOnly>
//                 {/* Render stars based on review.rating */}
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <Rating.Star key={index} filled={index < review.rating} />
//                 ))}
//               </Rating>
//             </div>
           
//             <p className='ml-28'>{review.review}</p>
//             <span className='ml-[300px] mt-4 mb-4 hover:cursor-pointer'>Like</span>
//             <span className='ml-4'>|</span>
//             <span className=' ml-4 mb-4 hover:cursor-pointer'>Reply</span>
//             <hr className="border-gray-50 my-0 border-t mt-5 mb-3" />
//           </li>
//         ))}
       
//       </ul>
//       <Button className='ml-[750px]' outline gradientDuoTone="cyanToBlue">
//        Read More
//       </Button>
    
//     </div>
//   );
// };

// export default Reviews;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Rating, Avatar, Button } from 'flowbite-react'; 
// // Assuming Rating, Avatar, and Button components from flowbite-react

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   const [likes,setlikes]=useState(0)

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:3050/reviews');
//       setReviews(response.data.Reviews); // Set reviews state with fetched data
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   const toggleShowAllReviews = () => {
//     setShowAllReviews(!showAllReviews);
//   };

//   return (
//     <>
    

//     <div>
        
//       <ul className="list-none">
//         {/* Display only the first 5 reviews if showAllReviews is false */}
//         {reviews.slice(0, showAllReviews ? reviews.length : 5).map(review => (
//           <li key={review._id} className="mb-4">
//             <div className="flex items-center mb-2 ml-4"> {/* Adjust ml-4 for indentation */}
//               <Avatar className="mr-3 " src={review.avatar} rounded /> {/* Assuming 'avatar' field in review object */}
//               <Rating max={5} value={review.rating} readOnly>
//                 {/* Render stars based on review.rating */}
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <Rating.Star key={index} filled={index < review.rating} />
//                 ))}
//               </Rating>
//             </div>
//             <p className="ml-4  pl-[160px] pr-[160px] w-auto overflow-ellipsis mb-10">{review.review}</p>
            
//             <span className='ml-[300px] mt-4 hover:cursor-pointer' onclick={()=>
//               {
//                 setlikes(likes+1)

//               }
//               }>Like</span>
//             <span className='ml-2 mr-2 mt-4'>|</span>
//             <span className='ml-4 mt-4'>Reply</span>
//             <hr className="border-t border-gray-300 my-6 mt-4 mb-4" />
//             {/* Adjust ml-4 for indentation */}
//           </li>
          
//         ))}
       
//       </ul>

//       {/* Conditionally render 'Read More' button */}
//       {!showAllReviews && reviews.length > 5 && (
//         <Button className="ml-[750px]" outline gradientDuoTone="cyanToBlue" onClick={toggleShowAllReviews} size="lg">
//           Read More
//         </Button>
//       )}
//     </div>
//     </>
//   );
// };

// export default Reviews;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Rating, Avatar, Button } from 'flowbite-react'; // Assuming Rating, Avatar, and Button components from flowbite-react

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   const [likes, setLikes] = useState({}); // Use an object to store likes for each review

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:3050/reviews');
//       setReviews(response.data.Reviews); // Set reviews state with fetched data

//       // Initialize likes state based on fetched reviews
//       const initialLikes = {};
//       response.data.Reviews.forEach(review => {
//         initialLikes[review._id] = 0; // Initialize likes for each review to 0
//       });
//       setLikes(initialLikes);
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   const handleLike = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3050/reviews/${reviewId}/like`);
//       // Update local state to reflect the new likes count
//       setReviews(prevReviews =>
//         prevReviews.map(review =>
//           review._id === reviewId ? { ...review, likes: review.likes + 1 } : review
//         )
//       );
//     } catch (error) {
//       console.error('Error liking review:', error);
//     }
//   };

//   const toggleShowAllReviews = () => {
//     setShowAllReviews(!showAllReviews);
//   };

//   return (
//     <>
//       <div>
//         <ul className="list-none">
//           {reviews.slice(0, showAllReviews ? reviews.length : 5).map(review => (
//             <li key={review._id} className="mb-4">
//               <div className="flex items-center mb-2 ml-4">
//                 <Avatar className="mr-3" src={review.avatar} rounded /> {/* Adjust as per your Avatar component */}
//                 <Rating max={5} value={review.rating} readOnly>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Rating.Star key={index} filled={index < review.rating} />
//                   ))}
//                 </Rating>
//               </div>
//               <p className="ml-4 pl-[160px] pr-[160px] w-auto overflow-ellipsis mb-10">{review.review}</p>
//               <span className='ml-[300px] mt-4 cursor-pointer' onClick={() => handleLike(review._id)}>
//                 Like ({review.likes})
//               </span>
//               <span className='ml-2 mr-2 mt-4'>|</span>
//               <span className='ml-4 mt-4'>Reply</span>
//               <hr className="border-t border-gray-300 my-6 mt-4 mb-4" />
//             </li>
//           ))}
//         </ul>

//         {/* Conditionally render 'Read More' button */}
//         {!showAllReviews && reviews.length > 5 && (
//           <Button className="ml-[750px]" outline gradientDuoTone="cyanToBlue" onClick={toggleShowAllReviews} size="lg">
//             Read More
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Reviews;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Rating, Avatar, Button } from 'flowbite-react'; // Assuming Rating, Avatar, and Button components from flowbite-react

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   const [replyContent, setReplyContent] = useState('');
//   const [repliesMap, setRepliesMap] = useState({});

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:3050/reviews');
//       setReviews(response.data.Reviews); // Set reviews state with fetched data
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   const handleLike = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3050/reviews/${reviewId}/like`);
//       // Update local state to reflect the new likes count
//       setReviews(prevReviews =>
//         prevReviews.map(review =>
//           review._id === reviewId ? { ...review, likes: review.likes + 1 } : review
//         )
//       );
//     } catch (error) {
//       console.error('Error liking review:', error);
//     }
//   };

//   const handleReplySubmit = async (reviewId) => {
//     try {
//       const response = await axios.post(`http://localhost:3050/reviews/${reviewId}/replies`, {
       
        
//       });

//       // Clear reply input and update local state to reflect the new reply
//       setReplyContent('');
//       const newReply = response.data;
//       setRepliesMap(prevState => ({
//         ...prevState,
//         [reviewId]: [...(prevState[reviewId] || []), newReply]
//       }));
//     } catch (error) {
//       console.error('Error submitting reply:', error);
//     }
//   };

//   const toggleShowAllReviews = () => {
//     setShowAllReviews(!showAllReviews);
//   };

//   const handleReplyChange = (event) => {
//     setReplyContent(event.target.value);
//   };

//   const loadReplies = async (reviewId) => {
//     try {
//       const response = await axios.get(`http://localhost:3050/reviews/${reviewId}/replies`);
//       setRepliesMap(prevState => ({
//         ...prevState,
//         [reviewId]: response.data
//       }));
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <ul className="list-none">
//           {reviews.slice(0, showAllReviews ? reviews.length : 5).map(review => (
//             <li key={review._id} className="mb-4">
//               <div className="flex items-center mb-2 ml-4">
//                 <Avatar className="mr-3" src={review.avatar} rounded /> {/* Adjust as per your Avatar component */}
//                 <Rating max={5} value={review.rating} readOnly>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Rating.Star key={index} filled={index < review.rating} />
//                   ))}
//                 </Rating>
//               </div>
//               <p className="ml-4 pl-[160px] pr-[160px] w-auto overflow-ellipsis mb-10">{review.review}</p>
//               <span className='ml-[300px] mt-4 cursor-pointer' onClick={() => handleLike(review._id)}>
//                 Like ({review.likes})
//               </span>
//               <span className='ml-2 mr-2 mt-4'>|</span>
//               <span className='ml-4 mt-4' onClick={() => loadReplies(review._id)}>Reply</span>
//               <div className="ml-8 mt-2">
//                 <input type="text" value={replyContent} onChange={handleReplyChange} className="border border-gray-300 p-2 rounded-md" placeholder='give your opinion' />
//                 <button className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-md" onClick={() => handleReplySubmit(review._id)}>Submit</button>
//               </div>
             
//               {repliesMap[review._id] && repliesMap[review._id].map(reply => (
//                 <div key={reply._id} className="ml-8 mb-2">
//                   <p className="text-gray-600">{reply.content}</p>
//                 </div>
//               ))}

//               <hr className="border-t border-gray-300 my-6 mt-4 mb-4" />

//               {/* Render replies */}
            

//               {/* Reply input */}
             
//             </li>
//           ))}
//         </ul>

//         {/* Conditionally render 'Read More' button */}
//         {!showAllReviews && reviews.length > 5 && (
//           <Button className="ml-[750px]" outline gradientDuoTone="cyanToBlue" onClick={toggleShowAllReviews} size="lg">
//             Read More
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Reviews;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Rating, Avatar, Button, Dropdown } from 'flowbite-react'; // Assuming Rating, Avatar, Button, and Dropdown components from flowbite-react

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   const [replyContent, setReplyContent] = useState('');
//   const [repliesMap, setRepliesMap] = useState({});
//   const [sortBy, setSortBy] = useState('newest'); // State to track sorting criteria

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('http://localhost:3050/reviews');
//       let sortedReviews = response.data.Reviews;

//       // Sort reviews based on sortBy criteria
//       if (sortBy === 'newest') {
//         sortedReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//       } else if (sortBy === 'mostLiked') {
//         sortedReviews.sort((a, b) => b.likes - a.likes);
//       } else if (sortBy === 'oldest') {
//         sortedReviews.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
//       }

//       setReviews(sortedReviews); // Set reviews state with sorted data
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   const handleLike = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3050/reviews/${reviewId}/like`);
//       // Update local state to reflect the new likes count
//       setReviews(prevReviews =>
//         prevReviews.map(review =>
//           review._id === reviewId ? { ...review, likes: review.likes + 1 } : review
//         )
//       );
//     } catch (error) {
//       console.error('Error liking review:', error);
//     }
//   };

//   const handleReplySubmit = async (reviewId) => {
//     try {
//       const response = await axios.post(`http://localhost:3050/reviews/${reviewId}/replies`, {
//         content: replyContent  // Send the reply content in the request body
//       });

//       // Clear reply input and update local state to reflect the new reply
//       setReplyContent('');
//       const newReply = response.data;
//       setRepliesMap(prevState => ({
//         ...prevState,
//         [reviewId]: [...(prevState[reviewId] || []), newReply]
//       }));
//     } catch (error) {
//       console.error('Error submitting reply:', error);
//     }
//   };

//   const loadReplies = async (reviewId) => {
//     try {
//       const response = await axios.get(`http://localhost:3050/reviews/${reviewId}/replies`);
//       setRepliesMap(prevState => ({
//         ...prevState,
//         [reviewId]: response.data
//       }));
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const toggleShowAllReviews = () => {
//     setShowAllReviews(!showAllReviews);
//   };

//   const handleReplyChange = (event) => {
//     setReplyContent(event.target.value);
//   };

//   const handleSortChange = (sortOption) => {
//     setSortBy(sortOption); // Update sortBy state based on dropdown selection
//   };

//   return (
//     <>
//       <div>
//         <Dropdown size="lg" label="Sort By">
//           <Dropdown.Item onClick={() => handleSortChange('newest')}>Newest</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleSortChange('mostLiked')}>Most Liked</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleSortChange('oldest')}>Oldest</Dropdown.Item>
//         </Dropdown>

//         <ul className="list-none">
//           {reviews.slice(0, showAllReviews ? reviews.length : 5).map(review => (
//             <li key={review._id} className="mb-4">
//               <div className="flex items-center mb-2 ml-4">
//                 <Avatar className="mr-3" src={review.avatar} rounded /> {/* Adjust as per your Avatar component */}
//                 <Rating max={5} value={review.rating} readOnly>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Rating.Star key={index} filled={index < review.rating} />
//                   ))}
//                 </Rating>
//               </div>
//               <p className="ml-4 pl-[160px] pr-[160px] w-auto overflow-ellipsis mb-10">{review.review}</p>
//               <span className='ml-[300px] mt-4 cursor-pointer' onClick={() => handleLike(review._id)}>
//                 Like ({review.likes})
//               </span>
//               <span className='ml-2 mr-2 mt-4'>|</span>
//               <span className='ml-4 mt-4' onClick={() => loadReplies(review._id)}>Reply</span>
//               <div className="ml-8 mt-2">
//                 <input type="text" value={replyContent} onChange={handleReplyChange} className="border border-gray-300 p-2 rounded-md" placeholder='Type your reply' />
//                 <button className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-md" onClick={() => handleReplySubmit(review._id)}>Submit</button>
//               </div>

//               {repliesMap[review._id] && repliesMap[review._id].map(reply => (
//                 <div key={reply._id} className="ml-8 mb-2">
//                   <p className="text-gray-600">{reply.content}</p>
//                 </div>
//               ))}

//               <hr className="border-t border-gray-300 my-6 mt-4 mb-4" />
//             </li>
//           ))}
//         </ul>

//         {/* Conditionally render 'Read More' button */}
//         {!showAllReviews && reviews.length > 5 && (
//           <Button className="ml-[750px]" outline gradientDuoTone="cyanToBlue" onClick={toggleShowAllReviews} size="lg">
//             Read More
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Reviews;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Rating, Avatar, Button, Dropdown } from 'flowbite-react'; // Assuming Rating, Avatar, Button, and Dropdown components from flowbite-react

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [showAllReviews, setShowAllReviews] = useState(false);
//   const [replyContent, setReplyContent] = useState('');
//   const [repliesMap, setRepliesMap] = useState({});
//   const [sortBy, setSortBy] = useState('newest'); // State to track sorting criteria

//   useEffect(() => {
//     fetchReviews(); // Fetch reviews when component mounts or when sortBy changes
//   }, [sortBy]);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3050/reviews?sortOrder=${sortBy}`);
//       setReviews(response.data.Reviews); // Set reviews state with fetched data
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   const handleLike = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3050/reviews/${reviewId}/like`);
//       // Update local state to reflect the new likes count
//       setReviews(prevReviews =>
//         prevReviews.map(review =>
//           review._id === reviewId ? { ...review, likes: review.likes + 1 } : review
//         )
//       );
//     } catch (error) {
//       console.error('Error liking review:', error);
//     }
//   };

//   const handleReplySubmit = async (reviewId) => {
//     try {
//       const response = await axios.post(`http://localhost:3050/reviews/${reviewId}/replies`, {
//         content: replyContent  // Send the reply content in the request body
//       });

//       // Clear reply input and update local state to reflect the new reply
//       setReplyContent('');
//       const newReply = response.data;
//       setRepliesMap(prevState => ({
//         ...prevState,
//         [reviewId]: [...(prevState[reviewId] || []), newReply]
//       }));
//     } catch (error) {
//       console.error('Error submitting reply:', error);
//     }
//   };

//   const loadReplies = async (reviewId) => {
//     try {
//       const response = await axios.get(`http://localhost:3050/reviews/${reviewId}/replies`);
//       setRepliesMap(prevState => ({
//         ...prevState,
//         [reviewId]: response.data
//       }));
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const toggleShowAllReviews = () => {
//     setShowAllReviews(!showAllReviews);
//   };

//   const handleReplyChange = (event) => {
//     setReplyContent(event.target.value);
//   };

//   const handleSortChange = (sortOption) => {
//     setSortBy(sortOption); // Update sortBy state based on dropdown selection
//   };

//   return (
//     <>
//       <div>
//         <Dropdown size="lg" label={sortBy}>
//           <Dropdown.Item onClick={() => handleSortChange('newest')}>Newest</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleSortChange('oldest')}>Oldest</Dropdown.Item>
//         </Dropdown>

//         <ul className="list-none">
//           {reviews.slice(0, showAllReviews ? reviews.length : 5).map(review => (
//             <li key={review._id} className="mb-4">
//               <div className="flex items-center mb-2 ml-4">
//                 <Avatar className="mr-3" src={review.avatar} rounded /> {/* Adjust as per your Avatar component */}
//                 <Rating max={5} value={review.rating} readOnly>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Rating.Star key={index} filled={index < review.rating} />
//                   ))}
//                 </Rating>
//               </div>
//               <p className="ml-4 pl-[160px] pr-[160px] w-auto overflow-ellipsis mb-10">{review.review}</p>
//               <span className='ml-[300px] mt-4 cursor-pointer' onClick={() => handleLike(review._id)}>
//                 Like ({review.likes})
//               </span>
//               <span className='ml-2 mr-2 mt-4'>|</span>
//               <span className='ml-4 mt-4' onClick={() => loadReplies(review._id)}>Reply</span>
//               <div className="ml-8 mt-2">
//                 <input type="text" value={replyContent} onChange={handleReplyChange} className="border border-gray-300 p-2 rounded-md" placeholder='Type your reply' />
//                 <button className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-md" onClick={() => handleReplySubmit(review._id)}>Submit</button>
//               </div>

//               {repliesMap[review._id] && repliesMap[review._id].map(reply => (
//                 <div key={reply._id} className="ml-8 mb-2">
//                   <p className="text-gray-600">{reply.content}</p>
//                 </div>
//               ))}

//               <hr className="border-t border-gray-300 my-6 mt-4 mb-4" />
//             </li>
//           ))}
//         </ul>

//         {/* Conditionally render 'Read More' button */}
//         {!showAllReviews && reviews.length > 5 && (
//           <Button className="ml-[750px]" outline gradientDuoTone="cyanToBlue" onClick={toggleShowAllReviews} size="lg">
//             Read More
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Reviews;









import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rating, Avatar, Button, Dropdown } from 'flowbite-react'; // Assuming Rating, Avatar, Button, and Dropdown components from flowbite-react

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [repliesMap, setRepliesMap] = useState({});
  const [sortBy, setSortBy] = useState('newest'); // State to track sorting criteria

  useEffect(() => {
    fetchReviews(); // Fetch reviews when component mounts or when sortBy changes
  }, [sortBy]);

  const fetchReviews = async () => {
    try {
      let sortOrder = 'desc'; // Default to descending (newest first)
      let sortField = 'createdAt'; // Default to sorting by createdAt field

      // Determine sorting criteria based on sortBy state
      if (sortBy === 'oldest') {
        sortOrder = 'asc'; // Sort ascending (oldest first)
      } else if (sortBy === 'mostLiked') {
        sortField = 'likes'; // Sort by likes field for most liked
        sortOrder = 'desc'; // Sort descending for most liked
      }

      const response = await axios.get(`http://localhost:3050/reviews?sortField=${sortField}&sortOrder=${sortOrder}`);
      setReviews(response.data.Reviews); // Set reviews state with fetched data
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // const fetchReviews = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3050/reviews`, {
  //       params: {
  //         sortField: getSortField(),
  //         sortOrder: getSortOrder()
  //       }
  //     });
  //     setReviews(response.data.Reviews); // Set reviews state with fetched data
  //   } catch (error) {
  //     console.error('Error fetching reviews:', error);
  //   }
  // };

  const handleLike = async (reviewId) => {
    try {
      await axios.put(`http://localhost:3050/reviews/${reviewId}/like`);
      // Update local state to reflect the new likes count
      setReviews(prevReviews =>
        prevReviews.map(review =>
          review._id === reviewId ? { ...review, likes: review.likes + 1 } : review
        )
      );
    } catch (error) {
      console.error('Error liking review:', error);
    }
  };

  const handleReplySubmit = async (reviewId) => {
    try {
      const response = await axios.post(`http://localhost:3050/reviews/${reviewId}/replies`, {
        content: replyContent  // Send the reply content in the request body
      });

      // Clear reply input and update local state to reflect the new reply
      setReplyContent('');
      const newReply = response.data;
      setRepliesMap(prevState => ({
        ...prevState,
        [reviewId]: [...(prevState[reviewId] || []), newReply]
      }));
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  const loadReplies = async (reviewId) => {
    try {
      const response = await axios.get(`http://localhost:3050/reviews/${reviewId}/replies`);
      setRepliesMap(prevState => ({
        ...prevState,
        [reviewId]: response.data
      }));
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  const toggleShowAllReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  const handleReplyChange = (event) => {
    setReplyContent(event.target.value);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption); // Update sortBy state based on dropdown selection
  };

  return (
    <>
      <div>
        <div className='ml-20'>
        <Dropdown size="lg" label="Sort By">
          <Dropdown.Item onClick={() => handleSortChange('newest')}>Newest</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('oldest')}>Oldest</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('mostLiked')}>Most Liked</Dropdown.Item>
        </Dropdown>
        </div>

        <ul className="list-none">
          {reviews.slice(0, showAllReviews ? reviews.length : 5).map(review => (
            <li key={review._id} className="mb-4">
              <div className="flex items-center mb-2 ml-4">
                <Avatar className="mr-3" src={review.avatar} rounded /> {/* Adjust as per your Avatar component */}
                <Rating max={5} value={review.rating} readOnly>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Rating.Star key={index} filled={index < review.rating} />
                  ))}
                </Rating>
              </div>
              <p className="ml-4 pl-[160px] pr-[160px] w-auto overflow-ellipsis mb-10">{review.review}</p>
              <span className='ml-[300px] mt-4 cursor-pointer' onClick={() => handleLike(review._id)}>
                Like ({review.likes})
              </span>
              <span className='ml-2 mr-2 mt-4'>|</span>
              <span className='ml-4 mt-4' onClick={() => loadReplies(review._id)}>See others Reply</span>
              <div className="ml-8 mt-2">
                <input type="text" value={replyContent} onChange={handleReplyChange} className="border border-gray-300 p-2 rounded-md" placeholder='Type your reply' />
                <button className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-md" onClick={() => handleReplySubmit(review._id)}>Submit</button>
              </div>

              {repliesMap[review._id] && repliesMap[review._id].map(reply => (
                <div key={reply._id} className="ml-8 mb-2">
                  <p className="text-gray-600">{reply.content}</p>
                </div>
              ))}

              <hr className="border-t border-gray-300 my-6 mt-4 mb-4" />
            </li>
          ))}
        </ul>

        {/* Conditionally render 'Read More' button */}
        {!showAllReviews && reviews.length > 5 && (
          <Button className="ml-[750px]" outline gradientDuoTone="cyanToBlue" onClick={toggleShowAllReviews} size="lg">
            Read More
          </Button>
        )}
      </div>
    </>
  );
};

export default Reviews;
