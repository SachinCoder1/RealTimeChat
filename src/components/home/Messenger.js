import React from 'react'
import { GrCaretRightFill } from 'react-icons/gr'
import Left from './messengerBody/left/Left'
import Right from './messengerBody/right/Right'

function Messenger() {
    return (
        <>
            <div className='h-[90vh] w-[95vw] bg-white absolute top-10 shadow-3xl left-8 flex'>
                <div className='w-[30%] border-r-[1px] border-gray-400'>
                    <Left />
                </div>
                <div className='w-[70%]'>
                    <Right />
                </div>
            </div>
        </>
    )
}

export default Messenger
