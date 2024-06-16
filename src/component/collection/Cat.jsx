import React from 'react'
import { Link } from 'react-router-dom'

export const Cat = ({categories, handleCatToggle}) => {
  return (
    <div className='bg-white flex flex-col gap-3 text-black px-3 rounded-lg'>
            {
                categories.map((item, i) => (
                    <Link to={`/collections/${item?.slug}`} key={i} onClick={handleCatToggle}>
                        <div className='w-full hover:text-blue-500 cursor-pointer'>
                            <div>
                                {item?.title}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
  )
}
