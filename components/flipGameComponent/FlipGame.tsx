import Image from "next/image"
import { useState, useEffect } from "react"
import BetSettings from "../BetSettingsCompo/BetSettings"
import MultiplierComp from "../Multiplier/MultiplierComp"

import SolanaIcon from "../../public/assests/images/solana_icon.png";

// solana coins
import HeadCoin from "/public/assests/images/HeadsCoin.png";
import RandomCoin from "/public/assests/images/RandomCoin.png";
import TailCoin from "/public/assests/images/TailsCoin.png";
// Dust coins
import DustHead from "/public/assests/images/Dust_Heads_Coin.png";
import DustRandom from "/public/assests/images/Dust_Random_Coin.png";
import DustTail from "/public/assests/images/Dust_Tails_Coin.png";
// Crek coins
import CrekHead from "/public/assests/images/CRECK_Heads_Coin.png";
import CrekRandom from "/public/assests/images/CRECK_Random_Coin.png";
import CrekTail from "/public/assests/images/CRECK_Tails_Coin.png";
// forge coins
import ForgeHead from "/public/assests/images/Forge_Heads_Coin.png";
import ForgeRandom from "/public/assests/images/Forge_Random_Coin.png";
import ForgeTail from "/public/assests/images/Forge_Tails_Coin.png";

// Icons
import bulletPoint from '/public/assests/images/bulletPoint.png'
import BetAmountComp from "../BetAmount/BetAmountComp"
import CoinsSection from "../CoinsComp/CoinsSection"

const FlipGame = () => {

    const [coins, setCoins] = useState([
        [HeadCoin, RandomCoin, TailCoin],
        [DustHead, DustRandom, DustTail],
        [CrekHead, CrekRandom, CrekTail],
        [ForgeHead, ForgeRandom, ForgeTail],
    ]);
    const [filteredCoins, setfilteredCoins] = useState([HeadCoin, RandomCoin, TailCoin]);
    const [BetAmountCoin, setBetAmountCoin] = useState(SolanaIcon);
    const [OddsValue, setOddsValue] = useState("2.5X odds (40%)");
    const [CenterCoinVal, setCenterCoinVal] = useState<String>("Random");

    // console.log(filteredCoins);
    useEffect(() => {

    }, [filteredCoins])

    return (
        <div className="w-11/12 md:w-12/12 mx-auto mt-10">

            {/* Flip Section Header */}

            <div className="flex items-center bg-footerBg-900 justify-between px-3 py-2 rounded-t-2xl">
                <div className="flex items-center">
                    <Image src={bulletPoint} width={15} height={15} alt="heading bullet" />&nbsp;&nbsp;
                    <h3 className="text-lg font-semibold text-white">Coin Flip Game</h3>
                </div>
                <div className="text-white text-md bg-[#c77402] px-4 py-1 rounded-2xl md:hidden">
                    <h3>{CenterCoinVal}</h3>
                </div>
            </div>

            {/* Flip Sections */}
            <div className="grid grid-cols-12 mb-4">
                <div className="md:order-last md:col-span-8 col-span-12 order-first h-full bg-gradient-to-r from-[#151e2b] to-[#2a3e55]">
                    <CoinsSection filteredCoins={filteredCoins} setfilteredCoins={setfilteredCoins} setCenterCoinVal={setCenterCoinVal} />
                </div>

                <div className="bg-[#1B2838] p-8 md:col-span-4 col-span-12 h-full">
                    <h2 className="text-white text-2xl font-bold text-center py-4">Bet Settings</h2>
                    <BetSettings coinss={coins} setfilteredCoins={setfilteredCoins} setBetAmountCoin={setBetAmountCoin} />
                    <MultiplierComp setOddsValue={setOddsValue} />
                    <BetAmountComp BetAmountCoin={BetAmountCoin} />
                    <button className="p-5 bg-btnColor-900 w-full text-2xl md:text-lg font-bold mt-3 rounded-md">Connect Wallet</button>

                    <h2 className="text-center text-lg text-gray-400 font-bold mt-2">{OddsValue}</h2>
                </div>
            </div>
        </div>
    )
}

export default FlipGame