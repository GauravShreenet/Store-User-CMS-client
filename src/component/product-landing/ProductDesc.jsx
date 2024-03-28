import React from 'react'
import { useSelector } from 'react-redux'
import descr from '../../assets/desc.jpg'

export const ProductDesc = () => {

    const { selectedProduct } = useSelector((state) => state.productInfo)

    return (
        <div className='m-20 grid grid-cols-2 gap-4 bg-gray-200'>
            <div className='flex justify-center items-center mx-10'>
                <ul className='accordion'>
                    <li>
                        <input type="radio" name='accordion' id='first' />
                        <label htmlFor="first" className='uppercase'>Description</label>
                        <div className='content mx-14'>
                            {selectedProduct?.description?.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}<br />
                                </React.Fragment>
                            ))}
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordion' id='second' />
                        <label htmlFor="second" className='uppercase'>Sizing</label>
                        <div className='content uppercase'>
                            <table className='text-sm text-left rtl:text-right text-gray-500 text-xl'>
                                <tbody>
                                    <tr>
                                        <td className="px-10 py-4 text-center">size</td>
                                        <td className="px-10 py-4 text-center">bust</td>
                                        <td className="px-10 py-4 text-center">waist</td>
                                        <td className="px-10 py-4 text-center">hip</td>
                                        <td className="px-10 py-4 text-center">inside leg</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-4 text-center">8 - xs</td>
                                        <td className="px-10 py-4 text-center">84-88</td>
                                        <td className="px-10 py-4 text-center">65-69</td>
                                        <td className="px-10 py-4 text-center">92-96</td>
                                        <td className="px-10 py-4 text-center">78-82</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-4 text-center">10 - s</td>
                                        <td className="px-10 py-4 text-center">89-93</td>
                                        <td className="px-10 py-4 text-center">70-74</td>
                                        <td className="px-10 py-4 text-center">97-101</td>
                                        <td className="px-10 py-4 text-center">82</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-4 text-center">12 - M</td>
                                        <td className="px-10 py-4 text-center">94-98</td>
                                        <td className="px-10 py-4 text-center">75-79</td>
                                        <td className="px-10 py-4 text-center">102-106</td>
                                        <td className="px-10 py-4 text-center">83</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-4 text-center">14 - L</td>
                                        <td className="px-10 py-4 text-center">99-103</td>
                                        <td className="px-10 py-4 text-center">80-84</td>
                                        <td className="px-10 py-4 text-center">107-111</td>
                                        <td className="px-10 py-4 text-center">83</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className='bg-blue-500'>
                    <img src={descr} alt="" className='object-cover h-[90vh] w-full'/>
                </div>
            </div>
        </div>
    )
}