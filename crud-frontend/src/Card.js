import React, {useState} from 'react'

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Popup from './Popup';
import axios from 'axios';

const Card = ({ type,user }) => {

    const [popup, setPopup] = useState(false);

    const [update, setUpdate] = useState();

    const handleUpdate = () => {
        setUpdate(user);
        setPopup(true);
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/delete/${id}`)
    }

    return (
        <div>
            {
                popup && <Popup setPopup={setPopup} user={user}/>
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
