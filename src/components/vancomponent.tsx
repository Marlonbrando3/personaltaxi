import React, { useContext, useRef } from "react";
import Image from "next/image";
import {
  BsFillPersonFill,
  BsFillBagFill,
  BsClockHistory,
} from "react-icons/bs";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { MdMoneyOffCsred } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { RiSuitcase3Fill, RiPriceTag3Fill } from "react-icons/ri";
import { AppContext } from "@/pages/_app";

export default function Sedancomponent() {
  const { calculateDistance, cars } = useContext(AppContext);

  const servies: any = useRef();
  const aboutCar: any = useRef();

  const handleShowInfoAboutCar = () => {
    servies.current.style.display = "block";
  };

  const handleHideInfoAboutCar = () => {
    servies.current.style.display = "none";
  };

  let distanceAboveMin = 0;

  if (calculateDistance > 20) {
    distanceAboveMin = calculateDistance - 20;
  }

  let CountPrice = calculateDistance;
  let FinalPrice = cars.van * 149 + cars.van * distanceAboveMin * 7;

  console.log(CountPrice);
  return (
    <div className="w-full h-full flex border-blue-900">
      <div className="relative lg:w-5/12 w-1/2 h-full ">
        <Image
          className="object-contain"
          src="/Van.webp"
          fill
          alt="sedan"
        ></Image>
      </div>
      <div id="info-wrapper" className="lg:w-7/12 w-1/2">
        <div className="text-[15px] lg:text-[20px] font-[500] flex items-center">
          <p>Mini Van</p>
          <AiFillInfoCircle
            className="lg:hidden ml-[5px]"
            onMouseEnter={handleShowInfoAboutCar}
            onMouseLeave={handleHideInfoAboutCar}
          />
        </div>
        <div id="info-container" className="flex w-full">
          <div
            ref={servies}
            id="descriptions-wrapper"
            className="absolute lg:sticky shadow-md lg:shadow-[0px] lg:w-1/2 w-[150px] lg:flex flex-col justify-between py-[10px] pl-[5px] lg:h-[150px] hidden z-10 bg-white"
          >
            <AiOutlineClose className="absolute right-0 top-0 lg:hidden" />
            <div
              id="description-about-service"
              className="w-[300px] text-[12px] lg:text-[16px]"
            >
              <div className="w-full flex items-center">
                <BsClockHistory className="text-yellow-500" />
                <p className="text-center pl-[5px]">Free waiting time</p>
              </div>
              <div className="w-full flex  items-center">
                <MdMoneyOffCsred className="text-yellow-500" />
                <p className=" text-center pl-[5px]">No hidden costs</p>
              </div>
              <div className="w-full flex  items-center">
                <RiPriceTag3Fill className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Best price</p>
              </div>
            </div>
            <div
              id="price"
              className="bg-yellow-500 w-1/2 rounded-r-[5px] text-center text-white -ml-[15px]"
            ></div>
          </div>
          <div
            id="descriptions-wrapper"
            className="lg:w-1/2 w-full flex flex-col justify-between py-[10px] pl-[5px] lg:h-[150px]"
          >
            <div
              ref={aboutCar}
              id="description-about-car"
              className="w-[300px] text-[12px] lg:text-[16px]"
            >
              <div className="w-full flex items-center">
                <BsFillPersonFill className="text-yellow-500" />
                <p className="text-center font-normal pl-[5px]">
                  Seats for up to 8 people
                </p>
              </div>
              <div className="w-full flex  items-center">
                <FaSuitcaseRolling className="text-yellow-500" />
                <p className=" text-center pl-[5px]">
                  Up to 7 medium suitcases
                </p>
              </div>
              <div className="w-full flex  items-center">
                <RiSuitcase3Fill className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Up to 4 big suitcases</p>
              </div>
            </div>
            <div
              id="price"
              className="bg-yellow-500 rounded-r-[5px] text-center text-white -ml-[15px] w-full"
            >
              <p className="text-[12px] lg:text-[20px] inline">
                final way price {FinalPrice} zł
              </p>
            </div>
            <p className="text-[8px]">Switch to van</p>
          </div>
        </div>
      </div>
    </div>
  );
}
