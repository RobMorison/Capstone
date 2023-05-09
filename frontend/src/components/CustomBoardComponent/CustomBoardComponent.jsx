import React, { useState, useEffect } from 'react';
import CartButton from '../../components/CartButton/CartButton';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'


const CustomBoardComponent = ({selected_board}) => {
     console.log('custom board component', selected_board.name)
    const[custom_width, setCustom_Width] = useState([selected_board.width])
    const[custom_length, setCustom_Length] = useState([selected_board.length])
    const[custom_board, setCustom_Board] = useState([])
    const[user_board, setUser_board] = useState([])
    const[first_wood, setFirst_Wood] = useState(['Maple'])
    const[second_wood, setSecond_Wood] = useState(['Maple']) 
    const[user, token] = useAuth()
    console.log('custom width', custom_width)
    console.log('custom length', custom_length)
    console.log('custom board', custom_board)

    const notify = ()=> toast(`Excellent! The king has recieved your order for a ${custom_width} x ${custom_length} ${selected_board.name}
    made out of ${first_wood} and ${second_wood}`)

    useEffect(() => {
        getCustomBoard();
      }, []);
    
      async function getCustomBoard() {
        await axios
          .get("http://127.0.0.1:8000/product/6/")
          .then((response) => setCustom_Board(response.data))
          .catch((error) => console.error(error))
      }

      console.log('first wood before post', first_wood)
      console.log('second wood before post', second_wood)

      async function postCustom() {
        let newCustom = {
            name: selected_board.name,
            description: first_wood + second_wood,
            length: custom_length,
            width: custom_width,
            user_id: user.id
        }
        await axios
            .post('http://127.0.0.1:8000/products/custom/', newCustom, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => setUser_board([response.data]))
            .catch((error) => console.error(error));

      }

      function onClick(event){
        postCustom();
        notify();
      };
    
    
    return ( 
        <>
        <h1>{selected_board.name}</h1>
        <img src={selected_board.image}></img>
        <form>
            <label>
                Board Width:
                <input type="text" placeholder='0' value={custom_width} onChange={(event) => setCustom_Width(event.target.value)}/>
            </label>
            <label>
                Board Length:
                <input type="text" placeholder='0' value={custom_length} onChange={(event) => setCustom_Length(event.target.value)}/>
            </label>
        </form>
        <form>
            <label>
                Select Primary Wood:
                <select onChange={(event) => setFirst_Wood(event.target.value)}>
                    <option value="Maple">Maple</option>
                    <option value="Cherry">Cherry</option>
                    <option value="Walnut">Walnut</option>
                </select>
            </label>
            <label>
                Select Secondary Wood:
                <select onChange={(event) => setSecond_Wood(event.target.value)}>
                    <option value="Maple">Maple</option>
                    <option value="Cherry">Cherry</option>
                    <option value="Walnut">Walnut</option>
                </select>
            </label>
        </form>
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
        <button onClick={onClick}>Create My Cutting Board</button>
        <CartButton product={custom_board}/>
        </>
     );
}
 
export default CustomBoardComponent;