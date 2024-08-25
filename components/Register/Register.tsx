
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '../../Schemas';

import useAuth from "../../AuthContext/AuthProvider";

import { FcGoogle } from 'react-icons/fc'
import { Dispatch, SetStateAction } from "react";

interface FormValues {
  name: string
  email: string
  password: string
  confirm_password: string
}
interface Props {
  setLoginState: Dispatch<SetStateAction<boolean>>
  setShowModal: Dispatch<SetStateAction<boolean>>
}
const Register = ({ setLoginState, setShowModal }: Props) => {

  const { signUpEP, signUpGoogle } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const { name, email, password } = data;
    // console.log(dbRef);
    const dataTosend = {
      name,
      email,
      password
    }

    try {
      let result = await signUpEP(dataTosend);

      console.log(result)
      // setShowModal(false)
      // toast.success("User signup successful");
    } catch (error) {
      console.log(error)
    }
  };

  const handleSignupGoogle = async () => {
    try {
      await signUpGoogle();
    } catch (error) {
      console.log(error)
    } finally {
      setShowModal(false)
      toast.success("User signup successful");
    }
  }

  return (
    <section className="bg-footerBg-900 pb-2">
      <div className="lg:grid lg:min-h-screen ">

        <main aria-label="Main" className="flex items-center justify-center px-8 py-8 sm:px-12 lg:px-16 ">
          <div className="md:w-full xl:px-36 lg:px-20 w-fit">

            <h1 className="mt-2 text-2xl text-center font-bold text-white sm:text-3xl md:text-4xl">
              Sign Up for A Wallet
            </h1>
            <p className="mt-4 leading-relaxed md:text-xl text-gray-500 text-center">
              Provide neccessary details
            </p>

            <div className="col-span-6 mt-4">
              <button className="text-2xl col-span-4 mx-auto flex items-center justify-center space-x-2 shadow-md p-2 rounded-lg border-2 border-white" onClick={() => handleSignupGoogle()}>
                <FcGoogle className="text-3xl" />
                <span className="md:text-1xl text-lg text-white">
                  SignIn with Google Account
                </span>
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">

              <div className="col-span-6 h-[4rem]">
                <label htmlFor="Name" className="block text-sm font-semibold text-white">
                  Full Name
                </label>
                <input type="text" id="Name" {...register('name')} name="name" className="mt-1 w-full rounded-md border-gray-500 bg-white text-lg text-gray-700 shadow-md p-1" />

                {errors.name && <span className={`text-red-600 md:text-[15px] text-sm`}>{errors.name.message}</span>}
              </div>

              <div className="col-span-6 h-[4rem]">
                <label htmlFor="Email" className="block text-sm font-semibold text-white">
                  Email
                </label>
                <input type="email" id="Email" {...register('email')} name="email" className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-md p-1" />
                {errors.email && <span className="text-red-600 md:text-[15px] text-sm">{errors.email.message}</span>}
              </div>

              <div className="col-span-6 h-[4rem]">
                <label htmlFor="Password" className="block text-sm font-semibold text-white">
                  Password
                </label>
                <input type="password" {...register('password')} id="Password" name="password" className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-md p-1" />
                {errors.password && <span className="text-red-600 md:text-[15px] text-sm">{errors.password.message}</span>}
              </div>

              <div className="col-span-6 h-[4rem]">
                <label htmlFor="confirm_password" className="block text-sm font-semibold text-white">
                  Password Confirmation
                </label>
                <input type="password" id="confirm_password" {...register('confirm_password')} name="confirm_password" className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg text-gray-700 shadow-md p-1" />
                {errors.confirm_password && <span className="text-red-600 md:text-[15px] text-sm">{errors.confirm_password.message}</span>}
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-600 underline">
                    {" "}terms and conditions
                  </a>
                  {" "}and {" "}
                  <a href="#" className="text-gray-600 underline">privacy policy</a>.
                </p>
              </div>
              <div className="col-span-6 mt-2  flex flex-col md:flex-row sm:flex sm:items-center sm:gap-4 gap-2">
                <button type="submit" className="inline-block shrink-0 rounded-md w-full md:w-auto border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Sign up
                </button>
                <p className="mt-4 text-[12px] text-gray-500 sm:mt-0">
                  Already have an account? {" "}
                  <span className="text-orange-600 underline cursor-pointer" onClick={() => { setLoginState(true) }}>Login</span>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Register