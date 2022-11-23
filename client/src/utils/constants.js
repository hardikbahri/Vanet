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
 const car8tv=false
 const car9tv=true
 const car10tv=true

 var car8="."
 let car9=""
 let car10="."

 
if(car8tv==false&&car9tv==false){

   car8="car 8"
   car9="car 9"
   car10="car 10"


}
else if(car8tv==true){
   car8="car 9"
   car9=""
   car10="car 10"
}
else if(car9tv==true){
   car8="car 8"
   car9=""
   car10="car 10"

}

 export const mal1=car8
 export const mal2=car9

 export const notmal1=car10
