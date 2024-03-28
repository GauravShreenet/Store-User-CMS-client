import React, { useEffect } from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { OrderTable } from '../../component/order/OrderTable'
import orderHistory from '../../assets/orderHistoryDetail.jpg'

const Orders = () => {
    return (
        <MainLayout heroImage={orderHistory} title='Order History'>
            <div className='mt-10 mx-12 h-[80vh]'>
                <h3 className='text-3xl font-semibold'>Orders</h3>
                <OrderTable />
            </div>
        </MainLayout>
    )
}

export default Orders