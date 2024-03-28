import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { setUser } from '../../pages/profile/userSlice';
import { updateProfile } from '../../helper/axiosHelper';
import { CustomInputs } from '../../custom-inputs/CustomInputs';

export const UpdateProfile = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.userInfo);

    const [form, setForm] = useState({});

    useEffect(() => {
        setForm({ ...user, userPassword: "" })
    }, [user])

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { email, ...rest } = form;
        const pending = updateProfile(rest);
        toast.promise(pending, {
            pending: "Please Wait..."
        })

        const { status, message } = await pending
        toast[status](message)
        if (status === "success") {

            dispatch(setUser(form))
            
            setForm({
                ...form,
                userPassword: "",
            })
        }

        
    }

    const inputs = [
        {
            label: 'First Name',
            name: 'fName',
            required: true,
            placeholder: 'John',
            type: "text",
            value: form.fName,
        },
        {
            label: 'Last Name',
            name: 'lName',
            required: true,
            placeholder: 'Wick',
            type: "text",
            value: form.lName,
        },
        {
            label: 'Email',
            name: 'email',
            required: true,
            disabled: true,
            placeholder: 'John@email.com',
            type: "text",
            value: form.email,
        },
        {
            label: 'Phone',
            name: 'phone',
            placeholder: '040989087',
            type: "text",
            value: form.phone,
        },
        {
            label: 'Address',
            name: 'address',
            placeholder: '1 george st, Sydney',
            type: "text",
            value: form.address,
        },
        {
            label: 'Password',
            name: 'userPassword',
            placeholder: 'XXXXXXXXXX',
            type: "password",
            required: true,
            value: form.userPassword,
        }
    ]

    return (
        <div className='w-[70vh]'>
            <form
                onSubmit={handleOnSubmit}
                className="w-full p-8 h-auto mx-auto my-12 rounded-2xl shadow-lg">
                {
                    inputs.map((item, i) => (<CustomInputs key={i} {...item} onChange={handleOnChange} />))
                }
                <div className="grid">
                    <button type="submit" className="w-full flex items-center justify-center px-20 h-10 p-3 mt-5 border border-blue-600 bg-blue-600 dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-500 uppercase">
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    )
}
