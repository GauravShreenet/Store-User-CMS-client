import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAOrder } from '../../pages/order/orderAction'
import { Link, useParams } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import useFormattedDate from '../../customHook/useFormatted'
import { OrderProgression } from './OrderProgression'
import { FaChevronLeft } from "react-icons/fa";
import orderDetail from '../../assets/orderHistory.jpg'

export const OrderDetail = () => {

    const dispatch = useDispatch()

    const { _id } = useParams()

    const { selectedOrder } = useSelector(state => state.orderInfo)

    useEffect(() => {
        dispatch(getAOrder(_id))
    }, [dispatch])

    return (
        <MainLayout heroImage={orderDetail} title='Order Detail'>
            <div className='p-10'>
                <div className='border border-gray-300 rounded-2xl'>
                    <div className='p-4 flex justify-between'>
                        <div className='flex justify-between gap-8 mx-5'>
                            <div className='flex justify-center items-center text-4xl border-e-4 border-gray-400 pe-5'>
                                <Link to="/orders">
                                    {" "}
                                    <button><FaChevronLeft /></button>{" "}
                                </Link>
                            </div>

                            <div>
                                <span className='font-semibold text-xl'>Order Number</span><br />
                                <span>{selectedOrder?._id?.slice(3, 7)}</span>
                            </div>
                            <div>
                                <span className='font-semibold text-xl'>Date Placed</span><br />
                                <span>{useFormattedDate(selectedOrder?.createdAt)}</span>
                            </div>
                            <div>
                                <span className='font-semibold text-xl'>Total Amount</span><br />
                                <span>${selectedOrder?.payReceive?.orderTotal}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className="w-full border-y border-gray-300 text-sm text-left rtl:text-right text-gray-500">
                            <tbody>
                                {
                                    selectedOrder?.cartItem?.map(({ thumbnail, name, qty, _id, size, price, slug }, i) => (
                                        <tr className="border-b text-gray-900"
                                            key={i}
                                        >
                                            <td className="px-6 py-5">
                                                <div className='flex gap-5'>
                                                    <img width="120px" height="150px" src={thumbnail} className='rounded-4' />
                                                    <div>
                                                        <span className='text-lg font-semibold'>{name}</span><br />
                                                        <span className='font-medium'>Quantity: {qty}</span><br />
                                                        <span className='font-medium'>Size: {size}</span><br />
                                                        <span className='font-medium'>Order id: {_id}</span><br /><br /><br />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-lg font-semibold">
                                                ${price}
                                            </td>
                                            <td className="px-6 py-4 text-lg font-semibold">
                                                ${price * qty}
                                            </td>
                                            <td className="px-6 py-4 text-lg font-semibold hover:text-blue-400">
                                                <Link to={`/products/${slug}`}>View Product</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='m-5 '>
                            <h3 className='text-xl font-semibold'>Order Progression</h3>
                            <div className='m-5'>
                                <OrderProgression selectedOrder={selectedOrder} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>

    )
}
