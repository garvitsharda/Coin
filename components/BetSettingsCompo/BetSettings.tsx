import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image, { StaticImageData } from 'next/image'

import { FaAngleDown } from 'react-icons/fa'
import { HiOutlineCheck } from 'react-icons/hi'
import SolanaIcon from "../../public/assests/images/solana_icon.png";
import DustIcon from "../../public/assests/images/Dust_Icon.png";
import CrekIcon from "../../public/assests/images/Creck_Icon_PNG.png";
import ForgeIcon from "../../public/assests/images/Forge_Heads_Coin.png";

const coins = [
    { id: 0, name: '$SOL', icon: SolanaIcon, },
    { id: 1, name: '$DUST', icon: DustIcon },
    { id: 2, name: '$CREK', icon: CrekIcon },
    { id: 3, name: '$FORGE', icon: ForgeIcon },
]

interface Props {
    coinss: StaticImageData[][]
    setfilteredCoins: Dispatch<SetStateAction<StaticImageData[]>>
    setBetAmountCoin: Dispatch<SetStateAction<StaticImageData>>
}

export default function BetSettings({ coinss, setfilteredCoins, setBetAmountCoin }: Props) {
    const [selected, setSelected] = useState(coins[0]);

    useEffect(() => {
        // console.log(coinss[selected.id]);
        setfilteredCoins(coinss[selected.id]);
        setBetAmountCoin(selected.icon);
    }, [selected])

    return (
        <div className="w-full mx-auto">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-full bg-tabsbG-900 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">

                        <span className="font-bold text-[18px] flex items-center space-x-2 text-green-500 ">
                            <Image src={selected.icon.src} width={25} height={25} alt='SelectedIcon' />
                            &nbsp;
                            {selected.name}
                        </span>

                        <span className="cursor-pointer absolute top-2 right-4 flex items-center justify-center p-2 rounded-full bg-btnColor-900">
                            <FaAngleDown className="h-5 w-5 text-black" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-tabsbG-900 rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {coins.map((coin, coinId) => (
                                <Listbox.Option key={coinId} className={({ active }) => `relative cursor-default select-none pl-2 pr-1 rounded-md text-white`} value={coin}>
                                    {({ selected }) => (
                                        <>
                                            <span className={`flex items-center truncate text-[16px] font-bold bg-tabsbG-900 p-3 hover:bg-navbg-800 border-b-[2px] border-gray-500 cursor-pointer`} >
                                                <Image src={coin.icon} alt="icon" width={25} height={25} />
                                                &nbsp;&nbsp;
                                                {coin.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 right-4 flex items-center pl-3 text-btnColor-900">
                                                    <HiOutlineCheck className='h-6 w-6' />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
