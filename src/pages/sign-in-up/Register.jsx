import React, { useState } from 'react'
import { CustomInputs } from '../../custom-inputs/CustomInputs'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { postNewUser } from '../../helper/axiosHelper';

const Register = () => {

    const [form, setForm] = useState({});
    const [passwordValidation, setPasswordValidation] = useState("")

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        
        const { confirmPassword, ...rest } = form
        if (confirmPassword !== rest.password) {
            toast.error("Password do not match");
            return;
        }
        const pending = postNewUser(rest)
        
        toast.promise( pending, {
            pending: "Please Wait..."
        })

        const { status, message } = await pending
        console.log(pending)
        toast[status](message);

        
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setPasswordValidation("");
        if (name === "password") {
            value.lenth < 6 && setPasswordValidation("Must be longer than 6 character");

            !/[A-Z]/.test(value) && setPasswordValidation("Must include uppercase")
            !/[a-z]/.test(value) && setPasswordValidation("Must include lowercase")
            !/[0-9]/.test(value) && setPasswordValidation("Must include number")

        }

        if(name === "confirmPassword"){
            form.password !== value && setPasswordValidation("Password doesn't match")
        }

        setForm({
            ...form,
            [name]: value,
        })
        
    }

    const inputs = [
        {
            label: 'First Name',
            name: 'fName',
            required: true,
            type: 'text',
            placeholder: "John",
        },
        {
            label: 'Last Name',
            name: 'lName',
            required: true,
            type: 'text',
            placeholder: "Cena",
        },
        {
            label: 'Email',
            name: 'email',
            required: true,
            type: 'email',
            placeholder: "user@email.com",
        },
        {
            label: 'Phone',
            name: 'phone',
            required: true,
            type: 'number',
            placeholder: "04XXXXXX",
        },
        {
            label: 'Address',
            name: 'address',
            required: true,
            type: 'text',
            placeholder: "1 sydney, NSW",
        },
        {
            label: 'Password',
            name: 'password',
            required: true,
            type: 'password',
            placeholder: "XXXXXXXXX",
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            required: true,
            type: 'password',
            placeholder: "XXXXXXXXX",
        },
    ]

    return (
        <div className='h-full bg-zinc-100 py-12 px-5'>
            <h1 className='text-4xl font-bold text-center'>Register</h1>
            <form 
            onSubmit={handleOnSubmit}
            className="max-w-2xl p-8 h-auto mx-auto my-12 rounded-2xl shadow-lg sm: w-sm">
                <div className="mb-5">
                    {
                        inputs.map((item, i) => (<CustomInputs key={i} {...item} onChange={handleOnChange} />))
                    }
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">Register</button>
                </div>
                <Link to="/"><div className='text-blue-700 hover:text-blue-800 text-center'>Already have a Account?</div></Link>
            </form>
        </div>
    )
}

export default Register