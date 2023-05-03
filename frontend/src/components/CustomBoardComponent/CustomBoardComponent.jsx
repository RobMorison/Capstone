import React, { useState, useEffect } from 'react';
import CartButton from '../../components/CartButton/CartButton';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const CustomBoardComponent = ({selected_board}) => {
     console.log('custom board component', selected_board.name)
    const[custom_width, setCustom_Width] = useState([selected_board.width])
    const[custom_length, setCustom_Length] = useState([selected_board.length])
    const[custom_board, setCustom_Board] = useState([]) 
    const[user, token] = useAuth()
    console.log('custom width', custom_width)
    console.log('custom length', custom_length)
    console.log('custom board', custom_board)

    useEffect(() => {
        getCustomBoard();
      }, []);
    
      async function getCustomBoard() {
        await axios
          .get("http://127.0.0.1:8000/product/6/")
          .then((response) => setCustom_Board(response.data))
          .catch((error) => console.error(error))
      }
    
    
    return ( 
        <>
        <h1>{selected_board.name}</h1>
        <img src={selected_board.image}></img>
        <form>
            <label>
                Board Width:
                <input type="text" value={custom_width} onChange={(event) => setCustom_Width(event.target.value)}/>
            </label>
            <label>
                Board Length:
                <input type="text" value={custom_length} onChange={(event) => setCustom_Length(event.target.value)}/>
            </label>
        </form>
        <CartButton product={custom_board}/>
        </>
     );
}
 
export default CustomBoardComponent;