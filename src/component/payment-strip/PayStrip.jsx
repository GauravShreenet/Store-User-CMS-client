import React, { useEffect, useState } from 'react'
import { CustomInputs } from '../../custom-inputs/CustomInputs'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { addOrder, paySuccess } from '../../helper/axiosHelper'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllCartItems } from '../../pages/product-landing/cartItemAction'
import { VscLoading } from "react-icons/vsc";

export const PayStrip = ({ totalPrice, user, userCart }) => {
  const stripe = useStripe()
  const element = useElements()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { products } = useSelector(state => state.productInfo)
  const [form, setForm] = useState({})
  const [resp, setResp] = useState(false)

  const cartItem = userCart.map(item => {
    const productInfo = products.find(product => product._id === item.productId);
    const variation = productInfo?.variations.find(variation => variation.color === item.color);
    const sizeInfo = variation?.sizes.find(sizeObj => sizeObj.size === item.size);
    const currentDate = new Date();

    // Check if the sales price is available and the current date is within the sales period
    const price = sizeInfo?.salesPrice && new Date(sizeInfo.salesStartDate) <= currentDate && new Date(sizeInfo.salesEndDate) >= currentDate
      ? sizeInfo.salesPrice
      : productInfo.price;

    return {
      name: item.name,
      productId: item.productId,
      slug: item.slug,
      size: item.size,
      color: item.color,
      qty: item.qty,
      thumbnail: item.thumbnail,
      price
    };
  });

  useEffect(() => {
    setForm(user)
  }, [setForm, user])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setResp(true)

    if (!stripe || !element) {
      return alert("Not ready to proccess the payment")
    }

    const filteredForm = {
      fName: form.fName,
      lName: form.lName,
      address: form.address,
      phone: form.phone,
      email: form.email,
    }

    const response = await paySuccess({
      amount: totalPrice,
      currency: "aud",
      paymentMethodType: "card"
    })

    const { paymentIntent } = await stripe.confirmCardPayment(response.clientSecret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: form.fName,
          email: form.email,
        }
      }
    })
    if (paymentIntent.status === "succeeded") {
      const createOrder = await addOrder({
        ...filteredForm,
        userId: user._id,
        cartItem: cartItem,
        orderTotal: totalPrice
      })

      if (createOrder.status === "error") {
        return toast.error(createOrder.message)
      }

      if (createOrder.status === "success") {
        setResp(false)
        dispatch(deleteAllCartItems())
        return navigate("/payment-success")
      }

    } else {
      toast.error("Unable to process the order try again later")
    }

  }

  const input = [
    {
      label: 'First Name',
      name: 'fName',
      required: true,
      type: 'text',
      placeholder: "Robert",
      value: form.fName,
    },
    {
      label: 'Last Name',
      name: 'lName',
      required: true,
      type: 'text',
      placeholder: "Parker",
      value: form.lName,
    },
    {
      label: 'Address',
      name: 'address',
      required: true,
      type: 'text',
      placeholder: "Unit, street no., street name, Suburb, post code and state",
      value: form.address,
    },
    {
      label: 'Email',
      name: 'email',
      required: true,
      type: 'email',
      placeholder: "email address",
      value: form.email,
    },
    {
      label: 'Phone',
      name: 'phone',
      required: true,
      type: 'number',
      placeholder: "Phone Number",
      value: form.phone,
    },
  ]

  return (
    <div className='bg-white w-full h-[100vh]'>
      <form
        onSubmit={handleOnSubmit}
        className='w-[70vh] p-8 h-auto ms-20 sm: w-sm'
      >
        <h4 className='mb-5 text-4xl font-semibold'>Billing Info</h4>
        <hr className='border border-gray-300' />
        <div className='my-5'>
          {
            input.map((item, i) => (
              <CustomInputs key={i} {...item} onChange={handleOnChange} />
            ))
          }
        </div>
        <label className='block mb-2 text-sm font-medium text-gray-900'>Card Detail</label>
        <CardElement
          className='mt-2 border border-gray-400 bg-white text-gray-900 text-sm rounded-lg shadow-sm  placeholder:text-gray-300 focus:ring-2 focus:border-gray-300 block w-full p-2.5'
          options={{
            style: {
              base: {
                fontSize: '17px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
            hidePostalCode: true, // Example: Hides the postal code field
          }} />
        <div className='flex justify-center'>
          {
            resp
              ?
              (<button className='w-full h-10 mt-8 py-7 border flex items-center justify-center text-xl border-blue-600 bg-blue-600 dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-500 uppercase' type='submit'><VscLoading className='animate-spin rounded-full' /></button>)
              :
              (<button className='w-full h-10 mt-8 py-7 border flex items-center justify-center text-xl border-blue-600 bg-blue-600 dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-500 uppercase' type='submit'>AUD ${totalPrice}</button>)
          }

        </div>
      </form>
    </div>
  )
}
