import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import Button from '../Button/Button';
// TODO: import abi from "./utils/Solidity file"
import "./MetamaskConnect.scss";

const networks = {
    1: "Ethereum Mainnet",
    56: "Binance Smart Chain Mainnet",
    43114: "Avalanche C-Chain",
    137: "Polygon Mainnet",
    250: "Fantom Opera",
    42161: "Arbitrum One",
    10: "Optimism",
    1284: "Moonbeam",
    42220: "Celo Mainnet",
    1285: "Moonriver",
    321: "KCC Mainnet",
    361: "Theta Mainnet",
    1666600000: "Harmony Mainnet",
    4689: "IoTeX Mainnet",
    10000: "Smart Bitcoin Cash",
    3: "Ropsten Testnet",
    4: "Rinkeby Testnet",
    5: "Görli Testnet",
    6: "Ethereum Classic Testnet Kotti",
    42: "Kovan Testnet",
    59: "EOS Mainnet",
    65: "OKExChain Testnet",
    941: "PulseChain Testnet",
    31337: "Localhost",
    1337: "Localhost"
};

const MetamaskConnect = () => {

    const [currentAcc, setCurrentAcc] = useState("");
    const [network, setNetwork] = useState("Loading..");

    const contractAddress = "1234";
    const contractABI = "dsagkdlsagna";

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("You might want to install Metamask ;)");
                return;
            }

            setNetwork(networks[window.ethereum.networkVersion]);

            const accounts = await ethereum.request({ method: "eth_accounts"});

            if (accounts.length !== 0)
                setCurrentAcc(accounts[0]);
            
            ethereum.on('accountsChanged', () => setCurrentAcc(""));
            ethereum.on('chainChanged', (chainId) => setNetwork(networks[parseInt(chainId)]));
        
        } catch (e) {
            console.log(e);
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Get Metamask!");
                window.open('https://metamask.io/download/');
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts"});
            console.log("Connected", accounts[0]);
            setCurrentAcc(accounts[0]);
        } catch (e) {
            console.log(e);
        }
    }

    const interact = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
                
                // interaction with the contract
            } else {
                console.log("Ethereum object not found.");
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    },);

    return (
        <div className="metamask-button">
            {currentAcc
            ? <div className='connected-container'>
                <p className='connected'>Connected: {currentAcc.substring(0,5) + "..." + currentAcc.substring(38, 42)}</p>
                <p id="network" className='connected'>{network}</p>
            </div>
            : <Button onClick={connectWallet} text="connect wallet"/>}
        </div>
    )
}

export default MetamaskConnect