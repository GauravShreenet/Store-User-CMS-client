import React from 'react'

export const CustomInputs = ({ label, ...rest }) => {
    return (
        <form className="max-w-2xl mx-auto sm: w-sm">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input className="border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-400 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...rest} />
            </div>
        </form>
    )
}
