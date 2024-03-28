import React, { useState } from 'react'
import { updatePassword } from '../../helper/axiosHelper';
import { toast } from 'react-toastify';
import { CustomInputs } from '../../custom-inputs/CustomInputs';

const initialState = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
}

export const UpdatePassword = () => {

    const [form, setForm] = useState(initialState)
    const [passwordValidationError, setpasswordValidationErrorForm] = useState("");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        //apply strong password

        setpasswordValidationErrorForm("")
        if (name === "newPassword") {
            value.length < 6 && setpasswordValidationErrorForm("Must be longer than 6 characters");

            !/[A-Z]/.test(value) && setpasswordValidationErrorForm("Must include uppcase")
            !/[a-z]/.test(value) && setpasswordValidationErrorForm("Must include lowercase")
            !/[0-9]/.test(value) && setpasswordValidationErrorForm("Must include number")
        }

        if (name === "confirmPassword") {
            form.password !== value && setpasswordValidationErrorForm("Password doesn't match")
        }
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnPasswordUpdate = async (e) => {
        e.preventDefault();
        const { confirmPassword, ...rest } = form;
        if (confirmPassword !== rest.newPassword) {
            return toast.error("Password doesnt match")
        }

        //call api
        const pending = updatePassword(rest)
        toast.promise(pending, {
            pending: "Please wait..."
        })

        const { status, message } = await pending
        toast[status](message) && setForm(initialState);

    }

    const inputs = [
        {
            label: 'Current Password',
            name: 'oldPassword',
            required: true,
            type: "password",
            placeholder: 'XXXXXXXXXXX',

        },
        {
            label: 'New Password',
            name: 'newPassword',
            required: true,
            type: "password",
            placeholder: 'XXXXXXXXXXX',

        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            required: true,
            type: "password",
            placeholder: 'XXXXXXXXXXX',

        },
    ]

    return (
        <div className='w-[70vh]'>
            <form
                onSubmit={handleOnPasswordUpdate}
                className="w-full p-8 h-auto mx-auto my-12 rounded-2xl shadow-lg">
                {
                    inputs.map((item, i) => (<CustomInputs key={i} {...item} onChange={handleOnChange} />))
                }
                <div className="">
                    {passwordValidationError && <div className="text-danger fw-bold p-2">{passwordValidationError}</div>}
                </div>

                <div className="d-grid">
                    <button type="submit" className="w-full flex items-center justify-center px-20 h-10 p-3 mt-5 border border-blue-600 bg-blue-600 dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-500 uppercase" disabled={passwordValidationError}>Update password</button>
                </div>
            </form>
        </div>
    )
}
