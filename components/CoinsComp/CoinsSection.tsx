
import Image, { StaticImageData } from "next/image"
// import useSound from 'use-sound';
import { useState, useEffect, useLayoutEffect, useRef, SetStateAction, Dispatch } from "react"
// import clickSound from '../../public/assests/sounds/click.mp3';

interface coinsType {
  filteredCoins: StaticImageData[]
  setfilteredCoins: Dispatch<SetStateAction<StaticImageData[]>>
  setCenterCoinVal: Dispatch<SetStateAction<String>>
}

const CoinsSection = ({ filteredCoins, setfilteredCoins, setCenterCoinVal }: coinsType) => {

  // console.log(filteredCoins)
  const [isMidscreen, setIsMidscreen] = useState(false);
  let [render, setrender] = useState(false);

  const RearrangeCoins = (index: number, src: string) => {

    if (src.includes("Heads")) {
      setCenterCoinVal("Heads")
    } else if (src.includes("Random")) {
      setCenterCoinVal("Random")
    } else if (src.includes("Tails")) {
      setCenterCoinVal("Tails")
    }

    let IndexValue = filteredCoins[index];

    if (index == 0 || index == 2) {
      filteredCoins[index] = filteredCoins[1]
      filteredCoins[1] = IndexValue;
      render = !render;
    }
    setrender(render)
    filteredCoins = filteredCoins;
    setfilteredCoins(filteredCoins)
    // console.log(filteredCoins);
  }

  const handleSize = () => {
    if (typeof window !== 'undefined') {
      const { innerWidth } = window;
      setIsMidscreen(innerWidth <= 768);
    }
  };
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      handleSize()
    }
  }, [])

  // const playSound = () => {
  //   clickSound.play();
  // }

  useEffect(() => {

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleSize);
    }
  }, [])

  return (
    <div className="flex justify-around h-full items-center p-5">
      {
        filteredCoins.map((coin, id) => {

          return <div key={id} className={`${id !== 1 ? "col-span-3 lg:col-span-4" : "col-span-6 lg:col-span-4"} text-center focus:outline-none ${id !== 1 ? "cursor-pointer" : "pointer-events-none cursor-none"}`} onClick={() => {
            // playSound()
            RearrangeCoins(id, coin.src)
          }}>
            {/* <Image src={logo} alt="icon" width={200} height={200}/> */}

            <img src={coin.src} alt="icon" className={`${id === 1 ? "mx-auto md:w-[12rem] lg:w-[18rem] w-[8rem]" : "md:w-[6rem] lg:w-[8rem] w-[4rem]"}`} />
            {
              isMidscreen ? <h2 className={`md:text-[15px] text-[10px] px-4 py-1 rounded-full text-gray-300 inline-block ${id === 1 && isMidscreen ? "bg-yellow-600 hidden" : "bg-navbg-800"}`}>

                {
                  coin.src.includes("Heads") ? "Heads" : coin.src.includes("Random") ? "Random" : "Tails"
                }
              </h2>
                :
                <h2 className={`md:text-[15px] text-[10px] px-4 py-1 rounded-full text-gray-300 inline-block ${id === 1 ? "bg-yellow-600" : "bg-navbg-800"}`}>
                  {
                    coin.src.includes("Heads") ? "Heads" : coin.src.includes("Random") ? "Random" : "Tails"
                  }
                </h2>
            }
          </div>
        })
      }
    </div>
  )
}

export default CoinsSection