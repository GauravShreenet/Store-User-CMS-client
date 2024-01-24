import React from 'react'
import { CustomInputs } from '../../custom-inputs/CustomInputs'
import { Link } from 'react-router-dom'

const Login = () => {

    const inputs = [
        {
            label: 'Email',
            name: 'email',
            required: true,
            type: 'email',
            placeholder: "user@email.com",
        },
        {
            label: 'Password',
            name: 'password',
            required: true,
            type: 'password',
            placeholder: "XXXXXXXXX",
        },
    ]

    return (
        <div className='h-dvh bg-zinc-100 py-12 px-5'>
            <h1 className='text-4xl font-bold text-center'>Sign in to your account</h1>
            <form className="max-w-lg p-8 h-auto mx-auto my-12 rounded-2xl shadow-lg sm: w-sm">
                <div className="mb-5">
                    {
                        inputs.map((item, i) => (<CustomInputs key={i} {...item} />))
                    }
                </div>
                <div className='text-end font-bold mb-5'>
                    <Link to="/sign-up"><span className='text-blue-700 hover:text-blue-800'>Forget password?</span></Link>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">Login</button>
                </div>
                <div class="inline-flex items-center justify-center w-full mb-5">
                    <hr class="w-full h-px my-8 bg-gray-100 border-0 dark:bg-gray-300" />
                    <span class="absolute px-6 font-medium  -translate-x-1/2 bg-white left-1/2 ">Or Continue with</span>
                </div>
                <div>
                    <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mx-5 mb-2">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg>
                        Sign in with Facebook
                    </button>
                    <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                        </svg>
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Login