import React, { useContext } from 'react'
import Login from '../login/Login'
import { IoLogoWhatsapp } from 'react-icons/io';

import { AccountContext } from '../../context/AccountProvider';
import Messenger from './Messenger';

function Home() {

    const { account, setAccount } = useContext(AccountContext)


    return (
        <div>
            <div className={`${account ? 'h-[11vh]' : 'h-[40vh]'} w-full bg-[#00bfa5] px-5`}>
                <p className={`text-white flex items-center text-[30px] ${!account && 'px-10 py-3'} `}> <span className='px-3'> <IoLogoWhatsapp className='text-white text-[30px]' /> </span> Whatsapp</p>
            </div>
            {
                account ? <Messenger /> :
                    <Login />

            }
        </div>
    )
}

export default Home
