import abi from "./Transactions.json";

export const contractAddress = "0xF81D1fa8aD0546C14d1CFF0A7CCc65c552013032";
export const contractABI = abi.abi;
 const tv1=true //Math.random()<0.5
 const tv2=true  //Math.random()<0.5
 const tv3=false //Math.random()<0.5
 export const rsu=true; //Math.random()<0.5

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
 export const car1=tv1
 export const car4=tv2
 export const car6=tv3
 
 const car1tv=true
 const car8tv=true
 const car9tv=true
 const car10tv=false

 var car8="."
 let car9=""
 let car10="."
 let allcar=false
 
if(car8tv==false&&car9tv==true&&car10tv==true){

   car8="car 8"
   car9="car 9"
   car10="car 10"


}
else if(car8tv==true&&car9tv==false&&car10tv==true){
   car8="car 9"
   car9="car 8"
   car10="car 10"
}
else if(car8tv==true&&car9tv==true&&car10tv==false){
   car8="car 10"
   car9="car 9"
   car10="car 8"

}
else if(car8tv==true&&car9tv==true&&car10tv==true){
   car8="car 10"
   car9="car 9"
   car10="car 8"
   allcar=true
}

 export const mal1=car8
 export const notmal2=car9

 export const notmal1=car10
 export const acar=allcar

 export const car88=car8tv
 export const car99=car9tv
 export const car100=car10tv
