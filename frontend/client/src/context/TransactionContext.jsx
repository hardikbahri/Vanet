import React, { useEffect, useState } from "react";
import { ethers } from "ethers";



import { contractABI, contractAddress,str1,rsu } from "../utils/constants";
import { car1,car4,car6,car88,car99,car100 } from "../utils/constants";

export const TransactionContext = React.createContext();


const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  let hashmap=new Map([
    [1,"0x635036A872162CB8A7f79abF9a46527e6C4290c8"], // car1's address must be pasted here

    [2,"0x1d74037Fdc9f79A05081af086d5FE7d8B12Ea19f"], //car 4's address must be pasted here
    [3,"0xd9663636006FF27Cd11730Ea0e3BD61BE42f2cE8"], //car 6's address must be pasted here
    [4,"0x577fB0F413C98D09Ea89265128571ff181D37884"], //car 2's address must be pasted here
    [5,"0x577fB0F413C98D09Ea89265128571ff181D37884"], //car 2's address must be pasted here
    [6,"0x577fB0F413C98D09Ea89265128571ff181D37884"], //car 2's address must be pasted here
    [8,"0x635036A872162CB8A7f79abF9a46527e6C4290c8"], //car 1's address must be pasted here
    [9,"0xAC784cd73162CB01B411F425e94b5e6A88Cc0fe7"], //car 8's address must be pasted here
    [10,"0x624Fc8083596319761F40208960Cb87E0D7C3974"],//car 9's address must be pasted here
    [11,"0x4891A03c8cad3C09c7d8c38fFe41df2f91dCF39C"],//car 10's address must be pasted here
    [12,"0x885e79c157713eFe0ad215cBd9f54FCEc175375d"],//car 7's address must be pasted here
    [13,"0x885e79c157713eFe0ad215cBd9f54FCEc175375d"],//car 7's address must be pasted here
    [14,"0x885e79c157713eFe0ad215cBd9f54FCEc175375d"],//car 7's address must be pasted here
    [15,"0x7698CC1896C77fc7bD9A334D7E8E6Bb328D5AE08"],//car 11's address must be pasted here
    [16,"0x7698CC1896C77fc7bD9A334D7E8E6Bb328D5AE08"],//car 11's address must be pasted here
    [17,"0x7698CC1896C77fc7bD9A334D7E8E6Bb328D5AE08"] //car 11's address must be pasted here

  ]);
var msgcar1="."

if(car1==true){
  msgcar1="true"
}
else{
  msgcar1="false"
}
var msgcar4="."

if(car4==true){
  msgcar4="true"
}
else{
  msgcar4="false"
}
var msgcar6="."

if(car6==true){
  msgcar6="true"
}
else{
  msgcar6="false"
}
  
// second part
var msgcar8="."

if(car88==true){
  msgcar8="true"
}
else{
  msgcar8="false"
}
var msgcar9="."

if(car99==true){
  msgcar9="true"
}
else{
  msgcar9="false"
}
var msgcar10="."

if(car100==true){
  msgcar10="true"
}
else{
  msgcar10="false"
}

  let map_2=new Map([
    [1,"true"],
    [2,"true"],
    [3,"true"],
    [4,msgcar1],
    [5,msgcar4],
    [6,msgcar6],
    [7,"true"],
    [8,"true"],
    [9,"true"],
    [10,"true"],
    [11,"true"],
    [12,"true"],
    [13,msgcar8],
    [14,msgcar9],
    [15,msgcar8],
    [16,msgcar9],
    [17,msgcar10],
  ]);
  //console.log(hashmap.get(2));
  

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther("0.0000001");

         var To=hashmap.get(parseInt(addressTo));

         var msg=map_2.get(parseInt(addressTo));
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: To,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(To, parsedAmount, msg, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();
        setTransactionCount(transactionsCount.toNumber());
        let a=parseInt(addressTo)+1;
       
      
        window.location.href = `http://localhost:3000/${a}`;
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  
  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,

      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};