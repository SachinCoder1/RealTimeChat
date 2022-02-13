import React, {useContext} from 'react'
import { BiSearch } from 'react-icons/bi';
import {AccountContext} from '../../../../context/AccountProvider'



function Search() {
    const {input, setinput} = useContext(AccountContext)
    return (
        <div className='px-3 py-2 bg-gray-200'>
            <div className='flex items-center bg-white rounded-full'>
                <span className='px-2'>
                    <BiSearch className='text-gray-500' />
                </span> <input value={input} onChange={(e)=> setinput(e.target.value)} className='bg-transparent outline-none text-gray-500 py-[3px]' type="text" name="search" id="search" placeholder='Search' />
            </div>
        </div>
    )
}

export default Search
