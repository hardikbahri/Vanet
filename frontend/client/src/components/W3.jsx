import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Link} from "react-router-dom" 
import {useState} from "react";
import CarImage from "../assets/car.jpg";
import RsuImage from "../assets/rsu.png";
import Arrow from "../arrow.png";


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

const Welcome = () => {
  const  user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, message } = formData;

    e.preventDefault();

    if (!addressTo ||  !message) return;

    sendTransaction();
  };

  const xcord = Math.floor((Math.random() * 100) + 1) + 200;
  var ycord = Math.floor((Math.random() * 100) + 1) + 200;
  
    
    
  var tv=true;
  //alert("accident happened at car1 information is sent to rsu.. rsu verifies the event as "+tv)
  //document.getElementById("2").style.display="none";
  


  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-10 py-5 px-10">
        <div className="flex flex-1 justify-start items-start flex-col">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient">
            WELCOME LEA PROFESSIONAL :-   <br /> 
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            CURRENTLY PRESENT CARS IN YOUR VANET ARE:-
          </p>
          
          <div className="car1">  
          <div className="container">
           <img src={CarImage} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">car 1's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")} </div>
           </div>
        </div>
       
        </div>
        
        
      <div className="car2">  
      
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">car 2's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
        
      </div>
       
      <div className="rsu">  
       <div className="container">
           <img src={RsuImage} alt="Avatar" className="image2" />
                <div className="middle">
                  <div className="text2">John Doe</div>
           </div>
        </div>
        </div>
       <div className="arrow1">  
       <img src={Arrow} alt="horse" />
       
       </div>

      <div className="car3">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 3's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      <div className="car4">  
      
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">car 4's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      <div className="car5">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 5's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>




          

          <div className="lg:grid-cols-3 grid-cols-2 w-full mt-10 hover:bg-fuchsia-600">
            
            
                                       
            
            
            
            
            
          
          </div>
        </div>


        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
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
          <div className="p-7 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

{isLoading
  ? <Loader />
  : <>
    <button
      type="button"
      onClick={handleSubmit}
      className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
    >
      Send Message
    </button>
    <Link to="W4"       className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
>next page</Link>
   
  </>}
</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
