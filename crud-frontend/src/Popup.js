import React, { useState } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';


// For uploading data
import axios from 'axios'

const Popup = ({ setPopup }) => {

    const [data, setData] = useState({
        name: '',
        dateAdded: '',
        desc: '',
        phone: ''
    });
    const date = new Date();
    const storeDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`


    const addUser = () => {
        const uData = {
            name: data.name,
            dateAdded: storeDate,
            desc: data.desc,
            phone: data.phone
        }

        console.log(uData);

        // Now add user data using axios


        axios.post("http://localhost:5000/users/add", uData)

        setPopup(false)
    }

    return (
        <div className="pop-up">
            <div className="input-box">
                <CancelIcon onClick={() => setPopup(false)} />
                <input type="text"
                    value={data.name}
                    onChange={(e) => setData( prevstate => ({
                        ...prevstate,
                        name: e.target.value
                    }))}
                />
                <input type="text"
                    value={data.desc}
                    onChange={(e) => setData(prevstate => ({
                        ...prevstate,
                        desc: e.target.value
                    }))}
                />
                <input type="number"
                    value={data.phone}
                    onChange={(e) => setData(prevstate => ({
                        ...prevstate,
                        phone: e.target.value
                    }))}
                />
                <button onClick={addUser}>
                    Add User
                </button>
            </div>
        </div>
    )
}

export default Popup
