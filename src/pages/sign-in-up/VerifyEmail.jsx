import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { postVerifyUser } from '../../helper/axiosHelper';

const VerifyEmail = () => {

  const [searchParams] = useSearchParams();
  const [showSpinner, setShowSpinner] = useState(true)
  const [resp, setResp] = useState({})
  const associate = searchParams.get('email')
  const token = searchParams.get('c')

  useEffect(() => {
    userEmailVerification();
  }, [])

  const userEmailVerification = async () => {
    const response = await postVerifyUser({ associate, token })
    setShowSpinner(false)
    setResp(response)
  }

  return (
    <div className='h-full py-12 px-5 text-center'>
      <h1 className='text-4xl font-bold text-center mb-5'>Account Verified</h1>
      <hr />
      <div className="text-center mt-10">
        {
          showSpinner && <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" />
        }
      </div>
      {
        resp.message && <div className={`w-auto p-5 m-auto text-3xl ${resp.status === 'success' ? 'text-green-500 border border-green-500 rounded-lg' : 'text-red-500 border border-red-500 rounded-lg'}`}>{resp.message}</div>
      }
      {
        resp.status === "success" && <a href='/'>Login Now</a>
      }
    </div>
  )
}

export default VerifyEmail