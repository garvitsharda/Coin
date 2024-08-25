
import Login from '../Login/Login'
import { useState, useEffect, Fragment, Dispatch, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Register from '../Register/Register';


interface PropTypes {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}
const Modal = ({ showModal, setShowModal }: PropTypes) => {

  const [LoginState, setLoginState] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      !showModal && setLoginState(true)
    }, 500);
  }, [showModal])

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-screen h-full md:h-4/6 md:w-3/4 overflow-hidden p-5 text-left align-middle shadow-xl transition relative top-16">
                <div className="text-1xl md:text-2xl textShadow bg-navbg-900 ">
                  <div className="text-navbg-800 flex items-center justify-start space-x-2 pl-4">
                    <button className={`p-2 ${LoginState && "border-b-4 text-white"} outline-0 rounded-sm `} onClick={() => { setLoginState(true) }}>Login</button>
                    <button className={`p-2 ${!LoginState && "border-b-4 text-white"} outline-0 rounded-sm `} onClick={() => { setLoginState(false) }}>Sign Up</button>
                  </div>

                  <div className="pl-1">
                    {
                      LoginState ? <Login setLoginState={setLoginState} setShowModal={setShowModal}/> : <Register setLoginState={setLoginState} setShowModal={setShowModal}/>
                    }
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
