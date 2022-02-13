import React, {useState} from 'react'
import Peoples from './Peoples'
import Profile from './Profile'
import Search from './Search'

function Left() {
    // const [input, setinput] = useState("")
    return (
        <div>
            <Profile />
            <Search />
            <Peoples />

        </div>
    )
}

export default Left
