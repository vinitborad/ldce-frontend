import React from 'react'
import "./Events.css"
import { CarouselSlider2 } from './CarouselSlider';
import Heading from './Heading';

const Events = () => {
  return (
    <>
      <Heading title="News & Updates" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-2 md:mx-4 mb-4 mt-3 ">
        {/* <div className="h-auto rounded-lg bg-blue-200">
          <div className="marquee-wrapper">
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-left">
                  <span>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here 1
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="marquee-item group relative overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow hover:scale-95 hover:shadow-2xl">
                      <div className="flex items-center gap-2 relative rounded-[15px] bg-white">
                        <img
                          src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                          alt=""
                          className="size-20 rounded-lg object-cover ms-2"
                        />
                        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                        <div>
                          <h3 className="text-lg/tight font-medium text-gray-900 mt-2">
                            Title goes here
                          </h3>

                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptas distinctio nesciunt quas
                            non animi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className='px-4 overflow-scroll max-h-[450px]'>
          {/* container */}
          <div >
            {/* card container  */}
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col '>
              {/* Date div  */}
              <div className='flex justify-start -mb-3 -ml-1'>
                <p>22-12-9099</p>
              </div>
              {/* information div  */}
              <div className=' flex gap-3 pl-4  border-l-2 border-stone-800 items-center -mt-1'>
                {/* logo div  */}
                  <img
                    src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
                    alt=""
                    className=" w-20 h-20 rounded-full object-cover"
                  />
                {/* heading & text div  */}
                <div className=' flex flex-col pt-2 gap-2'>
                  <h3 className=' font-medium leading-3 text-2xl'>Title goes here</h3>
                  <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptates volup dudbd uis uis uisu s  issi sis  iss si ssi  jjs jjjjjjjjjjjjjjjjjjjjjjjjjjjjj ks sk t s toint  u osot to o ttas distinctio nesciunt quas
                    non animi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto rounded-lg bg-blue-200">
          <CarouselSlider2 />
        </div>
      </div>
    </>
  );
}

export default Events