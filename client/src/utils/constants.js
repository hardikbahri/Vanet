import abi from "./Transactions.json";

export const contractAddress = "0x6F06aa88a1367B0dED7A8C282cc3F4F2ccB5559e";
export const contractABI = abi.abi;
 const tv1=true
 const tv2=true
 const tv3=false
 export const rsu=true;

 var str="."
 
if((tv1==true&&tv2==true)){
    str="car 6 "
 }
 else if(tv2==true&&tv3==true){

    str="car 1 "
 }
 else if(tv1==true&&tv3==true){

    str="car 4 "
 }
 
 


 export const str1=str
 