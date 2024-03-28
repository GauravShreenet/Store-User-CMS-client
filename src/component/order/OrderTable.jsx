import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../pages/order/orderAction'
import { Link } from 'react-router-dom'

export const OrderTable = () => {

    const dispatch = useDispatch()
    const { order } = useSelector(state => state.orderInfo)

    useEffect(() => {
        dispatch(getAllOrder())
    }, [dispatch])

    return (
        <div className="relative overflow-x-auto my-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-800 bg-gray-300 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date Placed
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No. of Item
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(({ _id, createdAt, payReceive, cartItem, status }, i) => (
                            <tr className="border-b text-gray-900"
                                key={i}
                            >
                                <td className="px-6 py-4">
                                    {createdAt.slice(0, 10)}
                                </td>
                                <td className="px-6 py-4">
                                    ${payReceive.orderTotal}
                                </td>
                                <td className="px-6 py-4">
                                    {cartItem.length}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`capitalize ${status === "order placed" ? "font-semibold text-red-500 bg-red-100 px-3 py-2" :
                                            status === "processing" ? "font-semibold text-yellow-500 bg-yellow-100 px-3 py-2" :
                                                status === "out for delivery" ? "font-semibold text-green-700 bg-green-300 px-3 py-2" :
                                                    status === "on the way" ? "font-semibold text-green-500 bg-green-200 px-3 py-2" :
                                                        status === "delivered" ? "font-semibold text-green-300 bg-green-100 px-3 py-2" :
                                                            ""
                                        }`}>{status}</span>
                                </td>
                                <td className="px-6 py-4">
                                <Link to={`/orders/${_id}`}><button className='border border-yellow-500 p-3 rounded-xl hover:bg-gray-200'>View Order</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
