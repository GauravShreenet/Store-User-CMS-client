import React from 'react'

export const CustomInputs = ({ label, forwardRef, ...rest }) => {
    return (
        <form className="max-w-2xl mx-auto sm: w-sm">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input className="border border-gray-400 bg-white text-gray-900 text-sm rounded-lg shadow-sm  placeholder:text-gray-300 focus:ring-2 focus:border-gray-300 block w-full p-2.5" ref={forwardRef} {...rest} />
            </div>
        </form>
    )
}
