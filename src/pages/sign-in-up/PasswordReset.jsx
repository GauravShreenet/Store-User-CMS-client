import React, { useRef, useState } from 'react'
import { CustomInputs } from '../../custom-inputs/CustomInputs'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { requestOtp, resetPass } from '../../helper/axiosHelper'

const PasswordReset = () => {

    const emailRef = useRef("")

    const [showOtp, setShowOtp] = useState(true);
    const [resp, setResp] = useState({})

    const [form, setForm] = useState({})

    const handleOnOtpRequest = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value
        if (!email) {
            return toast.error("Email is required")
        }

        const pending = requestOtp(email);
        toast.promise(pending, {
            pending: 'Please Wait...'
        })

        const resp = await pending
        setResp(resp)

        setForm({ email })

        resp.status === "success" && setShowOtp(false)

    }

    const handleOnPasswordChange = async (e) => {
        e.preventDefault();
        const { confirmPassword, ...rest } = form;
        if (!form.email || form.password !== confirmPassword) {
            return toast.error("Password doesn't match or email not provided")
        }
        const pending = resetPass(rest)
        toast.promise(pending, {
            pending: 'Please Wait...'
        })

        const resp = await pending
        setResp(resp)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        //password validation

        setForm({
            ...form,
            [name]: value,
        })
    }


    const inputReq = [
        {
            label: 'Email',
            name: 'email',
            required: true,
            type: 'email',
            placeholder: "user@email.com",
            forwardRef: emailRef,
        }
    ]

    const inputReset = [
        {
            label: 'OTP',
            name: 'otp',
            required: true,
            placeholder: "451214",
        },
        {
            label: 'New Password',
            name: 'password',
            required: true,
            placeholder: "XXXXXXXXXX"
        },
        {
            label: "Confirm Password",
            name: 'confirmPassword',
            required: true,
            placeholder: "XXXXXXXXXX"
        }
    ]

    return (
        <div className='h-full py-12 px-5'>
            <h1 className='text-4xl font-bold text-center mb-5'>Reset Password</h1>
            <hr />
            {
                 resp.message && <div className={`w-auto p-5 m-auto text-3xl ${resp.status === 'success' ? 'text-green-500 border border-green-500 rounded-lg' : 'text-red-500 border border-red-500 rounded-lg'}`}>{resp.message}</div>
            }
            {
                showOtp ? (<form
                    onSubmit={handleOnOtpRequest}
                    className="max-w-2xl bg-white-100 p-8 h-auto mx-auto my-12 rounded-2xl shadow-lg sm: w-sm">
                    <div className="mb-5">
                        {
                            inputReq.map((item, i) => (<CustomInputs key={i} {...item} />))
                        }
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">Request OTP</button>
                    </div>
                    <Link to="/"><div className='text-blue-700 hover:text-blue-800 text-center'>Go back</div></Link>
                </form>) : (
                    <form
                        onSubmit={handleOnPasswordChange}
                        className="max-w-2xl p-8 h-auto mx-auto my-12 rounded-2xl shadow-lg sm: w-sm">
                        <div className="mb-5">
                            {
                                inputReset.map((item, i) => (<CustomInputs key={i} {...item} onChange={handleOnChange}/>))
                            }
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">Reset Password</button>
                        </div>
                    </form>
                )
            }
        </div>
    )
}

export default PasswordReset