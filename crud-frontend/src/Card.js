import React, {useState} from 'react'

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Popup from './Popup';

const Card = ({ type }) => {

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
                        <strong>Debjit Pramanick</strong>
                        <p>Added on: 6 Feb, 2021</p>
                        <p className="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="phone">+91 93303 48081</p>
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
