import React from 'react'
import { Link } from 'react-router-dom'

export const Cat = ({categories, handleCatToggle}) => {
  return (
    <div className='bg-white flex flex-wrap gap-3 text-black p-3 rounded-lg'>
            {
                categories.map((item, i) => (
                    <Link to={`/collections/${item?.slug}`} key={i} onClick={handleCatToggle}>
                        <div className='w-full hover:text-blue-500 text-center cursor-pointer'>
                            <div className='h-[13vh] w-[15vh] bg-blue-500'>
                                <img src={item?.thumbnail} alt="itemImage" className='object-fill h-full w-full' />
                            </div>
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
