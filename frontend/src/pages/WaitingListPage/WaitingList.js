import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"

const WaitingList = () => {

    const{productId} = useParams()
    const[first_name, setFirst_Name] = useState('');
    const[last_name, setLast_Name] = useState('');
    const[email, setEmail] = useState('');
    console.log('waiting list', productId)



    async function handleSubmit(event){
        event.preventDefault();
        const newEntry =await axios
            .post('http://127.0.0.1:8000/waitlist/',{
            first_name: first_name,
            last_name: last_name,
            email: email,
            product_id: productId
        });
        console.log('waiting list', newEntry)
    }

    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <ul>
                <label>First Name: </label>
                <input type='text' value={first_name} onChange={(event) => setFirst_Name(event.target.value)}/>
            </ul>
            <ul>
                <label>Last Name: </label>
                <input type='text' value={last_name} onChange={(event) => setLast_Name(event.target.value)}/>
            </ul>
            <ul>
                <label>E-mail: </label>
                <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </ul>
            <ul>
                <label>Product ID: </label>
                <input  value={productId} />
            </ul>
            <button type='submit'>Join Waiting List</button>
        </form>
        </>
     );
}
 
export default WaitingList;