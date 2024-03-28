import React from 'react'
import { Link } from 'react-router-dom'
import { TiTick } from "react-icons/ti";

const OrderSuccess = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center text-center'>
            <div>
                <div className='flex justify-center'>
                    <div className='text-9xl bg-green-500 rounded-full text-white p-5'>
                        <TiTick />
                    </div>
                </div>
                <h1 className='font-bold text-5xl mt-10'>Your Payment is Successful!</h1>
                <div className='mt-10 text-2xl w-[95vh]'>
                    Thank you for your payment. An automated payment receipt will be sent to your registered e-mail.
                </div>
                <div className='flex justify-center'>
                    <Link to="/"><button className='h-10 px-10 mt-8 py-7 border flex items-center justify-center text-xl font-semibold border-blue-600 bg-blue-600 dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-500 uppercase'>Back to home</button></Link>
                </div>
            </div>

        </div>
    )
}

export default OrderSuccess