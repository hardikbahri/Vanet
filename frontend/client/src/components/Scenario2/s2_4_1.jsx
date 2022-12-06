import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Link} from "react-router-dom" 
import {useState} from "react";
import CarImage from "../../assets/car.png";
import RsuImage from "../../assets/rsu.png";
import Arrow from "../../arrow.png";
import {motion} from "framer-motion"
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { Loader } from "..";

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
  //const  user = JSON.parse(localStorage.getItem('user'));
  //console.log(user);
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo} = formData;

    e.preventDefault();

    if (!addressTo) return;

    sendTransaction();
  };

 
  const  malicious = localStorage.getItem('malicious');
  console.log(malicious)


  return (
    <div className="">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-10 ">
        <div className="flex flex-1 justify-start items-start flex-col">
          <h1 className="text-3xl sm:text-5xl text-white text">
            Please allow message transfer    <br /> 
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          the cars which are in range of car 7 are trying to pass the information change the account to car 8 please allow message transfer
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

   
        
        
    
       
 
       <div className="AROW44">  
       <motion.div animate={{x:30,scaleX:1.5}} initial={{scaleX:0.8}} transition={{delay:2}} class="page-wrapper">
        <ul className="clearfix">
           <li className="clearfix" id="blacksmith">
                <p class="occupation"></p>
                <div className="progress-bar">
                        <div className="bar-fill" id="kuch">
                             <span className="progress-bar-arrow"></span>
                        </div>	
                </div>
                <p className="percentage"></p>
            </li>
        </ul>
       
  </motion.div>
                
  </div>
 
                
       

     
      <div className="s2car4">  
      
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">car 4's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>

      <div className="s2car1">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 1's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      
  <div className="s2AROW166">  
       <motion.div animate={{x:30,scaleX:1.5}} initial={{scaleX:0.8}} transition={{delay:2}} class="page-wrapper">
        <ul className="clearfix">
           <li className="clearfix" id="blacksmith">
                <p class="occupation"></p>
                <div className="progress-bar">
                        <div className="bar-fill" id="kuch">
                             <span className="progress-bar-arrow"></span>
                        </div>	
                </div>
                <p className="percentage"></p>
            </li>
        </ul>
       
  </motion.div>
                
  </div>
 
      <div className="s2car8">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 8's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      <div className="s2car777">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 7's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      <div className="s2car9">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 9's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      <div className="s2car10">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 10's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
      <div className="s2car11">  
      <div className="container">
           <img src={CarImage} alt="Avatar" className="image"/>
                <div className="middle">
                  <div className="text">car 11's addr:- {shortenAddress("0x635036A872162CB8A7f79abF9a46527e6C4290c8")}</div>
           </div>
        </div>
       
      </div>
       
      <div className="s2AROW55">  
       <motion.div animate={{x:30,scaleX:1.5}} initial={{scaleX:0.8}} transition={{delay:2}} class="page-wrapper">
        <ul className="clearfix">
           <li className="clearfix" id="blacksmith">
                <p class="occupation"></p>
                <div className="progress-bar">
                        <div className="bar-fill" id="kuch">
                             <span className="progress-bar-arrow"></span>
                        </div>	
                </div>
                <p className="percentage"></p>
            </li>
        </ul>
       
  </motion.div>
  
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
            <Input placeholder="Transaction Count" name="addressTo" type="text" handleChange={handleChange} />

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
    
   
  </>}
</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
