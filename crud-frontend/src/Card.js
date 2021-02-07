import React, {useState, useEffect} from 'react'

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Popup from './Popup';
import axios from 'axios';


// For real time
import io from 'socket.io-client'
const socket = io('http://localhost:5000/');

const Card = ({ type, user, setUsers, allusers }) => {

    const [popup, setPopup] = useState(false);

    const [update, setUpdate] = useState();

    const handleUpdate = () => {
        setUpdate(user);
        setPopup(true);
    }

    // useEffect(() => {
    //     socket.on('user-deleted', 1)
    // }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/delete/${id}`)
        socket.on('user-deleted', user._id)

        const newUsers = allusers.filter(user => {
            return user._id !== id
        })

        console.log(newUsers)
    }

    return (
        <div>
            {
                popup && <Popup setPopup={setPopup} user={user} setUsers={setUsers}/>
            }
            {(type === 'card') ? (
            <div className="cards">
                <div className="display">
                    <div className="content">
                        <strong>{user.name}</strong>
                        <p>Added on: {user.dateAdded}</p>
                        <p className="about">{user.desc}</p>
                        <p className="phone">{user.phone}</p>
                    </div>

                </div>
                <div className="btn-container">
                    <div onClick={handleUpdate}>
                        <CreateIcon />
                    </div>
                    <div onClick={() => handleDelete(user._id)}>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            ) : (
                    <div className="addcards"
                    onClick={() => setPopup(true)}>
                        <AddCircleOutlineIcon/> 
                    </div>
            )}


        </div>

    )
}

export default Card
