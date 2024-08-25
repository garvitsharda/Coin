import Image from "next/image"
import logo from '/public/assests/images/JCF_LOGO.png'
import { useEffect, useState } from "react"

// Icons
import { IoLogoTwitter } from "react-icons/io"
import { FaDiscord } from "react-icons/fa"

const Footer = () => {

  const [solanaRate, setsolanaRate] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/solanaRate")
      const data = await response.json();
      // console.log(data);
      setsolanaRate(data)
    })()
  }, [])

  return (
    <footer className="bg-footerBg-900 md:py-3 py-0">
      <div className="flex items-center justify-between flex-col md:flex-row p-6 md:p-5 space-y-2">
        <Image src={logo} width={200} height={100} alt="logo" className="h-10 w-1/2 md:w-[250px] mb-2 md:mb-0" />

        <div className="flex items-center justify-center flex-col md:flex-row space-x-2 space-y-2 md:space-y-0">
          <h3 className="text-[#c1cccf] font-bold text-[1.2rem] md:text-1xl text-center">&copy; 2022 coinflip.com | All Rights Reserved.</h3>

          <h3 className="bg-gradient-to-tr from-[#594ff5] to-[#2aa4f4] text-transparent bg-clip-text font-bold text-[1.4rem] md:text-1xl">
            1 SOL = ${solanaRate}
          </h3>
        </div>

        <div className="flex items-center justify-center space-x-4 bg-[#586c8d] rounded-full px-4 py-2">
          <IoLogoTwitter className="w-[2rem] h-[1.5rem] text-[#2aa4f4]" />
          <FaDiscord className="w-[2rem] h-[1.5rem] text-[#9ca3af]" />
        </div>
      </div>
    </footer>
  )
}

export default Footer