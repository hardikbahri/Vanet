import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Link} from "react-router-dom" 
import {useState} from "react";
import CarImage from "../assets/car.png";
import RsuImage from "../assets/rsu.png";
import Arrow from "../arrow.png";
import {motion} from "framer-motion"
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";






const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
var str="."

const Welcome = () => {
  const  malicious = JSON.parse(localStorage.getItem('malicious'));
  //console.log(user);
  console.log(malicious)
  //alert("On Board Unit (OBU) Of Car2 has calculated that happening of the event is true")

 

  if(malicious==="."){
    alert("aborting because all of the cars present in the vanet sent false information")
     return
   }
 

  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo } = formData;

    e.preventDefault();

    if (!addressTo) return;

    sendTransaction();
  };
  

 
  console.log(malicious.c1);


  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex mf:flex-row flex-col items-start justify-between md:p-10 py-5 px-10">
      <div className="flex flex-1 justify-start items-start flex-col">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient">
           {malicious.c1.CarName} is malicious as it sent wrong information to other cars 
             <br /> 
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          {malicious.c1.CarName}'s trust score decreases to zero .Car 2's trust score is increased by 10 as it reported the malicious vehicle.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

     <div className="grid sm:grid-cols-4 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              CAR NAME
            </div>
            <div className={companyCommonStyles}>
              TRUST SCORE (initial)</div>
              <div className={companyCommonStyles}>
              TRUST SCORE (final)</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Comments
            </div>
            <div className={`sm:bl-2xl ${companyCommonStyles}`}>
            {malicious.c1.CarName}
            </div>
            <div className={companyCommonStyles}>
            20
            </div>
            <div className={companyCommonStyles}>
            {malicious.c1.TrustScore}</div>
            <div className={`br-2xl ${companyCommonStyles}`}>
               Malicious/Untrusted 
            </div>
            <div className={`sm:bl-2xl ${companyCommonStyles}`}>
            {malicious.c2.CarName}
            </div>
            <div className={companyCommonStyles}>
           20
            </div>
            <div className={companyCommonStyles}>
            {malicious.c2.TrustScore}</div>
            <div className={`br-2xl ${companyCommonStyles}`}>
               trusted 
            </div>
            <div className={`sm:bl-2xl ${companyCommonStyles}`}>
            car 3
            </div>
            <div className={companyCommonStyles}>
             20 
            </div>
            <div className={companyCommonStyles}>
              60</div>
            <div className={`br-2xl ${companyCommonStyles}`}>
               Accident happened at this car :- Trusted 
            </div>
            <div className={`sm:bl-2xl ${companyCommonStyles}`}>
             car 2
            </div>
            <div className={companyCommonStyles}>
            20
            </div>
            <div className={companyCommonStyles}>
              30</div>
            <div className={`br-2xl ${companyCommonStyles}`}>
             Can't Say 
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            {malicious.c3.CarName}
            </div>
            <div className={companyCommonStyles}>
            20
            </div>
            <div className={companyCommonStyles}>
            {malicious.c3.TrustScore}</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
               trusted 
            </div>
     </div>

          

          <div className="lg:grid-cols-3 grid-cols-2 w-full mt-10 hover:bg-fuchsia-600">
            
   
            
        
        
                              
            
            
            
            
            
          
          </div>
        </div>

        <div className="flex flex-col flex-1 items-end justify-end w-full">
          <div className="p-3 flex justify-end items-end flex-col rounded-xl h-40 sm:w-80 w-full eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                </p>
              </div>
            </div>
          </div>
          <div className="p-7 sm:w-80 w-full  flex flex-col justify-end items-end blue-glassmorphism">
           <div className="h-[1px] w-full bg-gray-400 my-2" />

{isLoading
  ? <Loader />
  : <>

    <Link to="/8"       className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
> Next Scenario</Link>

   
  </>}
</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
