import React from 'react'

function Avocado() {
  return (
    <div className="bg-white  py-3 h-screen  px-12 w-screen overflow-x-hidden ">
      <nav className="flex justify-between mt-4 items-center ">
        <div className="bg-yellow-200 rounded-[50%] flex items-center justify-center  h-[40px] w-[40px]  ">
          nav
        </div>
        <p>nav</p>
      </nav>

      <main className='flex w-[100%] items-center justify-center  ' >
        <main className="flex mt-40 items-center justify-center gap-40  sm:w-[90%]   ">
          <dix>
            <h1 className="font-[700] mb-3 text-[80px] capitalize  ">
              Avocado
            </h1>
            <p className="w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, voluptas similique!.
            </p>
            <p className="mt-4 font-[700] text-[18px]  ">$20.00</p>
            <button className="uppercase bg-yellow-200 mt-6 px-6 py-2 rounded-md shadow-sm text-black font-bold text-[16px]  ">
              Buy Now
            </button>
          </dix>
          <div className="flex items-center justify-end gap-4 ">
            <div className=" bg-yellow-200 h-[400px] w-[400px] rounded-[50%]   ">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col ml-12 gap-2 ">
              {[1, 2, 3, 4, 5].map((d, id) => {
                return (
                  <div className="flex h-[8px] w-[8px] rounded-[50%] bg-gray-300  "></div>
                );
              })}
            </div>
          </div>
        </main>
      </main>
      <footer className='flex  justify-between mt-[60px] '>
        <div className='flex font-[500] gap-3 '>
          <p className='font-[700]'>Fb</p>
          <p>Ln</p>
          <p>Tw</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default Avocado
