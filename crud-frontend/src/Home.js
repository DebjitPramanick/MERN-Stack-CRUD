import React, {useEffect, useState} from 'react'
import "./Home.css"

// For fetching data
import axios from 'axios'

import Card from './Card';

const Home = () => {

    const [users, setUsers] = useState()

    useEffect(()=>{
        axios.get('http://localhost:5000/users/read')
        .then(res => {
            setUsers(res.data)
        })
    },[])


    console.log(users)

    return (
        <div>
            <div className="container">
                {users && users.map(user => (
                    <Card type="card" key={user._id} 
                    user={user} allusers={users} 
                    setUsers={setUsers}/>
                ))}
                
                <Card type="add" setUsers={setUsers}/>
            </div>
        </div>
    )
}

export default Home
