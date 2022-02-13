import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider';

import { IoLogoWhatsapp } from 'react-icons/io';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { GrFan } from 'react-icons/gr';
import { MdOutlineQrCode2 } from 'react-icons/md';
import GoogleLogin from 'react-google-login';
import { createUser } from '../../apis/api';



    

function Login() {
    const { account, setAccount } = useContext(AccountContext)
    const onSuccess = async (response) => {
        console.log(response);
        console.log('login success')
        setAccount(response.profileObj)
        await createUser(response.profileObj)
    }
    const onFailure = (response) => {
        console.log(response);
        console.log('login failed')
    }


    return (
        <>
          
            <div className='flex w-[60vw] justify-center items-center bg-white absolute top-40 left-[300px] shadow-xl'>
                <div className='text-gray-600 px-5 py-2'>
                    <h2 className='text-[25px] mb-5'>To use WhatsApp on your Computer:</h2>
                    <ul>
                        <li className='py-2'>1. Open whatsapp on your phone</li>
                        <li className='flex items-center py-2'>
                            2. Tap <span className='font-bold px-1'> Menu </span> <span className='bg-gray-300 px-1 py-1 mx-1'> <HiOutlineDotsVertical /> </span> or <span className='font-bold px-1'> settings </span><span className='bg-gray-300 px-1 py-1 mx-1'>  <GrFan /> </span> and select <span className='font-bold px-1'>Linked devices</span>
                        </li>
                        <li className='py-2'>
                            3. Point your phone to this screen to capture the code
                        </li>
                    </ul>
                </div>
                <div>
                    <MdOutlineQrCode2 className='text-[300px]' />
                </div>
                <div className='absolute bottom-4 bg-[#00bfa5]'>
                    <GoogleLogin
                        clientId="--"
                        buttonText="Login with google"
                        isSignedIn={true}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>


        </>
    )
}

export default Login
