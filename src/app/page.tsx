import Image from "next/image"
import {
  Icon
} from '@iconify-icon/react'


import {
  Quicksand
} from 'next/font/google'


import {
  BsInstagram,
  BsWhatsapp
} from 'react-icons/bs';

import {
  TbNoCopyright
} from 'react-icons/tb';

 const quickSand = Quicksand({
   weight: "700",
   subsets: ["latin"],
   
 });

export default function HomePage() {

 

    return (
      <div className="relative py-12 h-screen w-screen ">
        <div className=" z-10 lg:flex lg:px-0 px-6 lg:justify-center">
          <div className="lg:w-2/5 bg-white px-4 pb-16 rounded-xl w-full">
            <div className="logo w-full">
              <div className="w-full   flex justify-center">
                <img
                  src={"/images/1.png"}
                  className="lg:w-64 w-32 mt-4 lg:mt-6   h-auto object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="description mt-4">
              <div className="text-center">
                <p className="lg:text-lg text-sm font-semibold">
                  We provide services for your Holiday in Bali.
                </p>
                <p className="lg:text-sm text-gray-600 mt-2 text-xs font semibold">
                  Providing the perfect home at the best value in bali.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <h1 className="font-semibold text-base lg:text-xl lg:mb-4 ">
                Our Social Media
              </h1>
            </div>
            <div className=" Social Media">
              <ul className="flex flex-col lg:items-center">
                <li className="my-2 lg:w-2/3">
                  <a
                    href="https://www.instagram.com/bali.westayproperty/"
                    className="bg-white items-center space-x-4  w-full lg:px-20 justify-center py-3 transition-all duration-500 hover:border-black flex hover:bg-black hover:text-white rounded-md border border-gray-400"
                  >
                    <BsInstagram />
                    <span>Instagram</span>
                  </a>
                </li>
                {/* <li className="my-2 lg:w-2/3 ">
                  <button className="bg-white w-full lg:px-20 justify-center py-3 transition-all duration-500 hover:border-red-600 flex hover:bg-red-600 hover:text-white rounded-md border border-gray-400">
                    Instagram
                  </button>
                </li> */}
              </ul>
            </div>

            <div className="Admin Contacts lg:mt-6 mt-4">
              <h1 className="text-center lg:text-lg font-semibold text-sm">
                Admin Contacts
              </h1>
              <ul className="flex flex-col lg:items-center">
                <li className="my-2 lg:w-2/3">
                  <a
                    href="https://api.whatsapp.com/send?phone=6282211558215"
                    className="bg-white items-center space-x-4  w-full lg:px-20 justify-center py-3 transition-all duration-500 hover:border-green-600 flex hover:bg-green-600 hover:text-white rounded-md border"
                  >
                    <BsWhatsapp />
                    <span>Admin 1</span>
                  </a>
                </li>
                <li className="my-2 lg:w-2/3">
                  <a
                    href="https://api.whatsapp.com/send?phone=6281238163603"
                    className="bg-white items-center space-x-4  w-full lg:px-20 justify-center py-3 transition-all duration-500 hover:border-green-600 flex hover:bg-green-600 hover:text-white rounded-md border"
                  >
                    <BsWhatsapp />
                    <span>Admin 2</span>
                  </a>
                </li>
                {/* <li className="my-2 lg:w-2/3 ">
                  <button className="bg-white w-full lg:px-20 justify-center py-3 transition-all duration-500 hover:border-red-600 flex hover:bg-red-600 hover:text-white rounded-md border border-gray-400">
                    Instagram
                  </button>
                </li> */}
              </ul>
            </div>

            <div className="lg:mt-24 mt-16 flex items-center space-x-2 justify-center">
              <div className="flex items-center">
                <span className="lg:text-sm text-xs">Copyrights</span>
                <TbNoCopyright />
              </div>
              <h1
                className={`${quickSand.className} font-bold lg:text-sm text-sm`}
              >
                We Stay.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
}

