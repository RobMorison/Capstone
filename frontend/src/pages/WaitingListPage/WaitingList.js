import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'


const WaitingList = () => {

    const{productId} = useParams()
    const[first_name, setFirst_Name] = useState('');
    const[last_name, setLast_Name] = useState('');
    const[email, setEmail] = useState('');
    console.log('waiting list', productId)

    const notify = ()=> toast('Thank you, you have been added to the waiting list!')



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
        <form className="form" onSubmit={handleSubmit}>
            <ul>
                <label>First Name: </label>
                <input type='text' value={first_name} onChange={(event) => setFirst_Name(event.target.value)}/>
            </ul>
            <ul>
                <label>Last Name: </label>
                <input type='text' value={last_name} onChange={(event) => setLast_Name(event.target.value)}/>
            </ul>
            <ul>
                <label>Email: </label>
                <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </ul>
            <Toaster
                containerStyle={{
                    position: 'relative',
                }}
                toastOptions= {{
                    className: '',
                    style: {
                        border: '4px solid #ff0000',
                        padding: '16px',
                        color: '#ff0000',
                    },
                }}/>
            <button type='submit' onClick={notify}>Join Waiting List</button>
        
        <Link to={'/products'}>
            <button>Return to Products Page</button>
        </Link>
        </form>
        </>
     );
}
 
export default WaitingList;