import React, { useState, useEffect, useContext } from 'react'
import { createConversation, getUsers } from '../../../../apis/api'
import PeopleBody from './PeopleBody'
import { AccountContext } from '../../../../context/AccountProvider'
import { UserContext } from '../../../../context/UserProvider'

function Peoples() {
    // console.log(input.length)

    const [peoples, setpeoples] = useState([])
    const { account, socket, setActiveUsers } = useContext(AccountContext)
    const { input, setinput } = useContext(AccountContext)
    // const { person, setPerson } = useContext(UserContext)
    useEffect(() => {
        const getResults = async () => {
            let allUsers = await getUsers()
            const filterData = allUsers.filter(allUser => allUser.name.toLowerCase().includes(input.toLowerCase()))
            console.log(filterData)
            setpeoples(filterData)

        }
        console.log(peoples)
        getResults()
    }, [input])



    useEffect(() => {
        socket.current.emit('addUser', account.googleId);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])
    
    return (
        <>
            <div>
                {
                    peoples && peoples.map((people) => {
                        return (
                            account.googleId !== people.googleId &&
                            <PeopleBody key={people._id} imageUrl={people.imageUrl} name={people.name} googleId={people.googleId} people={people} />
                        )
                    })

                }
            </div>
        </>
    )
}

export default Peoples
