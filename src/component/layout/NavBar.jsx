import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../helper/axiosHelper';
import { setUser } from '../../pages/profile/userSlice';
import useDebounce from '../../customHook/useDebounce';
import { RxCross1 } from "react-icons/rx";
import { SearchItems } from '../search-items/SearchItems';
import { Cat } from '../collection/Cat';

export const NavBar = () => {
  const { user } = useSelector((state) => state.userInfo)
  const { userCart } = useSelector((state) => state.userCartInfo)
  const { products } = useSelector((state) => state.productInfo)
  const { categories } = useSelector(state => state.categoryInfo)

  const dispatch = useDispatch()

  const [colorChnage, setColorChange] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [showCat, setShowCat] = useState(false)

  //Search states
  const [form, setForm] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [searchItem, setSearchItem] = useState([])

  const [searchBar, setSearchBar] = useState(false)
  const debounceSearch = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debounceSearch.length > 1) {
      const searchQuery = debounceSearch.toLowerCase()
      const filterItem = products.filter((item) => item.name.toLowerCase().includes(searchQuery))
      setSearchItem(filterItem)
    }
  }, [debounceSearch, products])

  const handleDropdownToggle = () => {
    setSearchBar(false)
    setShowCat(false)
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const { cartItems } = useSelector(state => state.cartInfo)

  const handleOnLogOut = () => {
    logoutUser(user._id)

    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");

    dispatch(setUser({}));
    window.location.reload();
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })

    if (value.length > 1) {
      setSearchTerm(value)
    } else {
      setSearchTerm('')
      setSearchItem([])
    }
  }

  const handleSearchBar = () => {
    setShowCat(false)
    setIsDropdownOpen(false)
    setSearchBar(!searchBar)
    setColorChange(true)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSearchItem([])
    setSearchBar(false)
    setColorChange(false)
  }

  const handleCatToggle = () => {
    setSearchBar(false)
    setIsDropdownOpen(false)
    setShowCat(!showCat)
  }

  return (
    <div className={`text-white text-xl px-12 py-5 fixed top-0 left-0 right-0 z-20 ${colorChnage ? 'bg-gray-900 transition-all duration-800' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className='w-32 sm:w-32 md:w-32 lg:w-36 xl:w-40 2xl:w-48'>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className='mx-10'>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
            </li>
            <li>
              <div className='relative'>
                <button href="#" className={`hover:text-blue-500 ${showCat ? "text-blue-500" : ""}`} onClick={handleCatToggle}>
                  Collection</button>
                {showCat && (
                  <ul className="absolute top-full left-0 mt-3 w-[35vh] bg-white border border-gray-200 rounded-lg py-2 shadow-md">
                    <Cat categories={categories} handleCatToggle={handleCatToggle}/>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-3'>
          <button className={`hover:bg-blue-500 p-3 rounded-lg ${searchBar ? "bg-blue-500" : ""}`}
            onClick={handleSearchBar}
          >
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search icon</span>
          </button>
          {
            user?._id ? (
              <div className='flex items-center gap-3'>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center border-2 gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:border-blue-400 hover:ring-blue-500"
                    onClick={handleDropdownToggle}
                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                  >
                    {user?.fName}
                    <svg
                      className="-mr-1 h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                      <div className="" role="none">
                        <Link to="/edit-profile" className="text-gray-700 rounded-t-md block px-4 py-2 text-sm hover:bg-blue-100" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</Link>
                        <Link to="/orders" className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-100" role="menuitem" tabIndex="-1" id="menu-item-2">Orders</Link>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-100" role="menuitem" tabIndex="-1" id="menu-item-2">Support</a>
                        <button
                          onClick={handleOnLogOut}
                          type="submit"
                          className="text-gray-700 rounded-b-md block w-full px-4 py-2 text-left text-sm hover:bg-blue-100" role="menuitem" tabIndex="-1" id="menu-item-3">Logout</button>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/mycart">
                  <div>
                    <button className='relative inline-flex items-center'>
                      <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-600 bg-white border-2 border-white rounded-full -top-2 -end-2">{userCart.length}</div>
                      <AiOutlineShoppingCart className='text-[4vh] hover:text-blue-500' />
                    </button>
                  </div>
                </Link>

              </div>
            )
              : (
                <div className='flex items-center gap-3'>
                  <Link to='/sign-in'><button type="button" className="text-white text-[2vh] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button></Link>
                  <Link to="/mycart">
                    <div>
                      <button className='relative inline-flex items-center'>
                        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-600 bg-white border-2 border-white rounded-full -top-2 -end-2">{cartItems.length}</div>
                        <AiOutlineShoppingCart className='text-[4vh] hover:text-blue-500' />
                      </button>
                    </div>
                  </Link>

                </div>
              )
          }
        </div>
      </div>
      {
        searchBar ? (<div className="flex justify-center w-full mt-7">
          <form className='bg-transparent ms-20 me-11 w-full'>
            <input type="text" id="search-navbar" name='search' className="block w-full p-3 text-sm text-gray-900 border bg-gray-50  border-gray-400 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." onChange={handleOnChange} />
          </form>
          <div>

          </div>
          <button className='text-4xl' onClick={() => clearSearch()}><RxCross1 /></button>
        </div>) : ""
      }
      {
        searchItem.length > 0 ? <SearchItems searchItem={searchItem} clearSearch={clearSearch} /> : ""
      }
    </div>

  )
}
