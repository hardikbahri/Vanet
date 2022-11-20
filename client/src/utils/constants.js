import abi from "./Transactions.json";

export const contractAddress = "0x6F06aa88a1367B0dED7A8C282cc3F4F2ccB5559e";
export const contractABI = abi.abi;
 const tv1=true
 const tv2=true
 const tv3=false
 export const rsu=true;

 var str="."
 
if((tv1==true&&tv2==true)){
    str="the car 6 is malicious"
 }
 else if(tv2==true&&tv3==true){

    str="the car 1 malicious"
 }
 else if(tv1==true&&tv3==true){

    str="the car 4 malicious"
 }

 export const str1=str
 