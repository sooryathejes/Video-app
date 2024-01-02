import React from 'react';
import { motion } from "framer-motion";

import './Treending.css'
import cover1 from '../images/cover2.jpg'
import cover2 from '../images/cove1.jpg'



const typingContainer = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.24,
      }
   }
}


const typingText = {
   hidden: { opacity: 0, y: "-20px" },
   show: {
      opacity: 1,
      y: "0",
      transition: {
         ease: 'easeInOut',
      }
   }
}




function Trending() {

   return (
      <div className='ms-16'>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}

         >

            <div className="one grid grid-cols-2 bg-black-500">
               <div className="bg-black-200 p-4 rounded-sm">
                  <motion.h1 className='ani text-white' variants={typingContainer} initial="hidden" animate="show">
                     {
                        Array.from("BEST  OF").map((word, i) => (
                           <motion.span key={i} variants={typingText}>{word}</motion.span>
                        ))
                     }
                  </motion.h1>
               </div>
               <div className="bg-black-300 p-4">
                  <img className='trd rounded' src="https://i.pinimg.com/originals/7a/9d/fa/7a9dfa798cbeaedc0fe1f3a9cd9c6962.png" alt="" />
               </div>

               <div className="bg-black-400 p-4">
                  <img className='trd rounded' src={cover2} alt="" />
               </div>
               <div className="bg-black-500 p-4 mt-10 rounded-sm">
                  <motion.h1 className='ani1 text-white ' variants={typingContainer} initial="hidden" animate="show">
                     {
                        Array.from("THE  YEAR").map((word, i) => (
                           <motion.span key={i} variants={typingText}>{word}</motion.span>
                        ))
                     }
                  </motion.h1>          </div>

               <div className="bg-black-600 p-4 mt-10 rounded-sm">
                  <motion.h1 className='ani2 justify-center text-white' variants={typingContainer} initial="hidden" animate="show">
                     {
                        Array.from("2023").map((word, i) => (
                           <motion.span key={i} variants={typingText}>{word}</motion.span>
                        ))
                     }
                  </motion.h1>          </div>
               <div className="bg-black-700 p-4">
                  <img className='trd rounded' src={cover1} alt="" />
               </div>
            </div>


            <h1 className='ms-5 text-white text-center'><u>TRENDING</u></h1>





            <div className='mn'>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>

            </div>







            <div className='mn'>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
            </div>






            <div className='mn'>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>

            </div>






            <div className='mn'>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>

            </div>





            <div className='mn'>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>

            </div>





            <div className='mn'>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/8f/6b/f1/8f6bf13c8930c5fbb651e35f0295db99.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem ipsum .</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet Lorem, ipsum..</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/f3/f5/d2/f3f5d2e2f9a949a04604490155ea9014.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>
               <div className='mn1'>
                  <img className='mn2' src="https://i.pinimg.com/564x/a8/5a/21/a85a21b67ab398cafe7104d8c449f03a.jpg" alt="" />
                  <p className='text-white ms-5'>Lorem ipsum dolor sit amet  Lorem ipsum.</p>
               </div>

            </div>
         </motion.div>
      </div>


   )
}

export default Trending 