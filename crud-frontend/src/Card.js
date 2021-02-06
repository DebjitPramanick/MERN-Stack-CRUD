import React, {useState} from 'react'

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Popup from './Popup';

const Card = ({ type,user }) => {

    const [popup, setPopup] = useState(false);

    return (
        <div>
            {
                popup && <Popup setPopup={setPopup}/>
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
                    <div>
                        <CreateIcon />
                    </div>
                    <div>
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
