import { Dispatch, ReactNode, SetStateAction } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: ReactNode
  setShowModal: Dispatch<SetStateAction<boolean>>
}


const Layout = ({ children, setShowModal }: Props) => {
  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <div className="conatiner mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
