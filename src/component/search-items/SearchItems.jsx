import React from 'react'
import { Link } from 'react-router-dom'

export const SearchItems = ({ searchItem, clearSearch }) => {

    const limitedSearch = searchItem.slice(0, 5)

    return (
        <div className='bg-white flex flex-col gap-2 text-black mx-20 my-3'>
            {
                limitedSearch.map((item, i) => (
                    <Link to={`/products/${item?.slug}`} key={i} onClick={clearSearch}>
                        <div className='flex gap-3 p-3 w-full hover:bg-blue-100 cursor-pointer'>
                            <div className='h-[8vh] w-[8vh] bg-blue-500'>
                                <img src={item?.variations[0]?.thumbnail} alt="itemImage" className='object-fill h-[8vh] w-[8vh]' />
                            </div>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
