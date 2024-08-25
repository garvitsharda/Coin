import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

import logo from '/public/assests/images/JCF_LOGO.png'
import { HiX } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setShowModal }: Props) => {

  let [innerNav, setInnerNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setInnerNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-navbg-900 py-2 shadow-lg">
      <div className="flex justify-between items-center px-6 py-2 cursor-pointer">
        <Image src={logo} width={200} height={100} alt="logo" />

        {/* Nav Icons */}
        <span className="p-2 rounded-md hover:bg-navbg-800 cursor-pointer md:hidden">
          {
            innerNav ? <HiX className="text-white text-2xl" onClick={() => { setInnerNav(false) }} />
              :
              <FaBars onClick={() => { setInnerNav(true) }} className="block h-6 w-6 text-white" />
          }
        </span>

        <span className="text-[#e9cb70] text-lg py-2 px-4 rounded-lg font-semibold hover:bg-navbg-800 hidden md:block" onClick={() => {
          setShowModal(true);
        }}>
          <h3>Connect</h3>
        </span>
      </div>

      {
        innerNav && <div className="w-fit mx-auto text-[#e9cb70] text-lg py-2 px-3 rounded-lg font-semibold hover:bg-navbg-800">
<button onClick={() => {
    window.open('https://coinflip-eth.vercel.app/', '_blank');
}}>
    Connect Wallet
</button>
        </div>
      }
    </nav>
  );
};

export default Navbar;
