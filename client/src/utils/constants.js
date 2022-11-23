import abi from "./Transactions.json";

export const contractAddress = "0x6F06aa88a1367B0dED7A8C282cc3F4F2ccB5559e";
export const contractABI = abi.abi;
 const tv1=true;
 const tv2=true
 const tv3=false
 export const rsu=true;

 var str="."
 let str10="."
 let str11="."
 let str12="."

 
if((tv1==true&&tv2==true)){
    str="car 6"
    str10="car 1"
    str12="car 4"
 }
 else if(tv2==true&&tv3==true){

    str="car 1"
    str10="car 6"
    str12="car 4"
 }
 else if(tv1==true&&tv3==true){

    str="car 4"
    str10="car 1"
    str12="car 6"
 }
 
 


 export const str1=str
 export const str2=str10
 export const str3=str12
 
 const car1tv=true
 const car8tv=true
 const car9tv=false

 var str13="."
 let str7="."
 let str8="."

 
if((car1tv==true&&car8tv==true)){
    str13="car 9"
    str7="car 1 "
    str8="car 8"
 }
 else if(car8tv==true&&car9tv==true){

    str13="car 1"
    str7="car 8"
    str8="car 9"
 }
 else if(car9tv==true&&car1tv==true){

    str13="car 9"
    str7="car 1"
    str8="car 8"
 }

 export const mal=str13
 export const notmal1=str7
 export const notmal2=str8