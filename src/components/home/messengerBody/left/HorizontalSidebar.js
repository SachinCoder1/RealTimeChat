import React, { useContext } from 'react'
import { GoogleLogout } from 'react-google-login';
import { AccountContext } from '../../../../context/AccountProvider'


function HorizontalSidebar({setisOpenHorizontal}) {
    const { account, setAccount } = useContext(AccountContext)
    const {openIt, setopenIt} = useContext(AccountContext)


    const logout = () => {
        alert("Logout")
        setAccount(null)
    }

    return (


        <div class='absolute top-[58px] left-[175px] w-fit max-w-lg px-10 py-1 mx-auto'>

            <div class='max-w-md mx-auto space-y-6'>

                <div class="dropdown-menu">



                    <div class="bg-white rounded-lg shadow-xl relative mt-0">

                        <svg class="absolute bottom-full right-4" width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
                        </svg>

                        <div onClick={()=> {setopenIt(true); setisOpenHorizontal(false)}} class="py-6 px-3 cursor-pointer flex items-center w-full hover:bg-gray-50">
                            <a href="#" class="flex-1">
                                <div class="text-gray-400 text-base">Profile</div>
                            </a>
                            <div>
                                <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                                </svg>
                            </div>
                        </div>

                        <div class="py-6 flex px-3 cursor-pointer items-center w-full border-t border-gray-200 hover:bg-gray-50">
                            <a href="#" class="flex-1">
                                <div class="text-gray-400 text-base">Status (Online)</div>
                            </a>
                            <div>
                                <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                                </svg>
                            </div>
                        </div>

                        <div class="py-6 flex px-3 cursor-pointer items-center w-full border-t border-gray-200 hover:bg-gray-50">
                            <a href="#" class="flex-1">
                                <div class="text-gray-400 text-base">Notifications</div>
                            </a>
                            <div>
                                <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                                </svg>
                            </div>
                        </div>

                        <div class="py-6 flex px-3 cursor-pointer items-center w-full hover:bg-gray-50 border-t border-gray-200">
                            <a href="#" class="flex-1">
                                <div class="text-gray-400 text-base">
                                    <GoogleLogout
                                        clientId="861349657304-hla76f4lneoea6tpntsjlfhpl28q1pv4.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                                        )}
                                        onLogoutSuccess={logout}
                                    >
                                    </GoogleLogout>
                                </div>
                            </a>
                            <div>
                                <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                    <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default HorizontalSidebar
