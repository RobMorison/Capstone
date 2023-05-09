import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import "./MyWaitingList.css"


const MyWaitingList = () => {

    const[list, setList] = useState([])
    const[input, setInput] = useState([])

    async function getWaitingList() {
        await axios
            .get(`http://127.0.0.1:8000/?email=${input}`)
            .then((response) => setList(response.data))
            .catch((error) => console.error(error));
            console.log("waiting list", list);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        getWaitingList()
    }
    return ( 
        <>
        <form className="waiting_form">
            <label className="waiting_label">
                Enter your email:  
                <input className="waiting_input" type='text' value={input} onChange={(event) => setInput(event.target.value)}/>
            </label>
        
        <button className="waiting_form_button" onClick={handleSubmit}>Search my waiting list</button>
        </form>
        <div className="waiting_list">
            <p>The King is working on the following for you:</p>
            {list.map((el, index) => {
                return(
                    <tr key={index}>
                    <td>{el.product.name}</td>
                    <td><img src={el.product.image}/></td>  
                    </tr>
                )
            })}
        </div>

        </>
     );
}
 
export default MyWaitingList;