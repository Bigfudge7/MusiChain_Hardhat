import abi from "./contract/coffee.json";
import { useState, useEffect } from "react";
import  { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import "./App.css";

function App(){
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0x9e7329f28952ef65702eb31ab606061907d2185d";
      const contractABI=abi.abi;
      try{
        const {ethereum}=window;

        if(ethereum){
          const accounts =await ethereum.request({method:"eth_requestAccounts",})
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setState({provider,signer,contract});
      } catch(error){
        console.log(error);
      }
    };
    connectWallet();
  },[]);
  //console.log(state);
  return <div className="App">
    <Buy state={state}></Buy>
    <Memos state={state}></Memos>
  </div>
}

export default App;