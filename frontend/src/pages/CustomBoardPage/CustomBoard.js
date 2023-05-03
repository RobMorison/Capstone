import React, {useState, useEffect}from 'react';
import axios from "axios"
import CustomBoardComponent from '../../components/CustomBoardComponent/CustomBoardComponent';

const CustomBoard = () => {

    const[board_options, setBoard_Options] = useState([]);
    const[selected_board, setSelected_Board] = useState([]);
    console.log('custom page board options', board_options)
    console.log('custom page', selected_board)

    useEffect(() => {
        getProducts();
      }, []);
    
      async function getProducts() {
        await axios
          .get("http://127.0.0.1:8000/product")
          .then((response) => setBoard_Options(response.data))
          .catch((error) => console.error(error))
      }

    // if (selected_board == "Basic Board"){
    //   return( 
    //     <>
    //         {board_options[0].name}
    //     </>
    //   );
    // }

    // if (selected_board == "Three Wood Basic Board"){
    //     return(
    //         <>
    //             {board_options[1].name}
    //         </>
    //     );
    //     }
    
    //another variable to contain the object using the find method
    //then setSelected_Board to that object
    

    function handleChange(event){
        event.preventDefault();
        const selected_value = event.target.value
        console.log('handle change', event.target.value)
        const result = board_options.find(({name}) => name === selected_value)
        console.log('result', result)
        setSelected_Board(result)
        };

    return ( 
        <>
        <h1>{board_options[4].name}</h1>
        <img src={board_options[4].image}></img>
        
        <div className="select-container">
            <label>Select Your Cutting Board to Customize:
                <select onChange={handleChange}>
                    {board_options.map((el, index) => {
                        return(
                            <option key={index} value={el.name}>{el.name}</option>)}  
                        )
                    }
                </select>
            </label>
        </div>
        <div>
            <CustomBoardComponent selected_board={selected_board}/>

        </div>
        </>
     );
}
 
export default CustomBoard;