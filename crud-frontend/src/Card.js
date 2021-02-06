import React from 'react'

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Card = ({ type }) => {
    return (
        <div>
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
                    <div className="addcards">
                        <AddCircleOutlineIcon /> 
                    </div>
            )}


        </div>

    )
}

export default Card
