import React,{useState} from 'react'
import {motion} from 'framer-motion'
import mouse from './assets/mouse.svg'
import avc from "./assets/avc.png";
import ic from "./assets/ic.png";
import nav from './assets/nav.png'
 
function Avocado() {
  const [sta,setSta] = useState(2)
    return (
      <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
                  duration: 0.3,
                }}
       className="bg-white  py-3 h-screen  px-12 w-screen overflow-x-hidden ">
        <nav className="flex justify-between mt-4 items-center ">
          <div className="bg-yellow-200 px-2 py-3 rounded-[50%] flex items-center justify-center  h-[50px] w-[50px]  ">
            <img src={ic} alt="" />
          </div>
          <img className="h-[35px]" src={nav} alt="" />
        </nav>

        <main className="flex  w-[100%] items-center justify-center  ">
          <main className="flex  sm:flex-row flex-col-reverse mt-40 items-center justify-center gap-40  sm:w-[90%]   ">
            <dix>
              <h1 className="font-[700] mb-3 text-[80px] capitalize  ">
                Avocado
              </h1>
              <p className="w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, voluptas similique!.
              </p>
              <p className="mt-4 font-[700] text-[18px]  ">
                {" "}
                <sup>$</sup> 20.00
              </p>
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="uppercase cursor-pointer bg-yellow-200 mt-6 px-6 py-2 rounded-md shadow-sm text-black font-bold text-[16px]  "
              >
                Buy Now
              </motion.button>
            </dix>
            <motion.div
              initial={{
                scale: 0.4,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="flex items-center  sm:justify-end justify-center sm:gap-4 "
            >
              <div className=" bg-yellow-200  top-5 h-[400px] w-[400px] rounded-[50%]   ">
                <motion.img
                  whileHover={{
                    scale: 1.4,
                    // rotate:90
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="rounded-[50%] translate-y-10 sm:-translate-x-20 h-[100%] w-[100%] "
                  src={avc}
                  alt=""
                />
              </div>
              <div className="flex flex-col sm:ml-12 ml-3 gap-2 ">
                {[1, 2, 3, 4, 5].map((d, id) => {
                  return (
                    <div
                      onClick={() => setSta(id)}
                      className={`flex hover:bg-gray-700 ${
                        id == sta && "bg-gray-700"
                      } h-[8px] w-[8px] rounded-[50%] bg-gray-300 `}
                    ></div>
                  );
                })}
              </div>
            </motion.div>
          </main>
        </main>
        <footer className="flex items-center  justify-between mt-[60px] ">
          <div className="flex font-[500] gap-3 ">
            <p className="font-[700]">Fb</p>
            <p>Ln</p>
            <p>Tw</p>
          </div>
          <div>
            <img className="h-[30px]" src={mouse} alt="" />
          </div>
        </footer>
      </motion.div>
    );
}

export default Avocado
