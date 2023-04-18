import React, {useState}from 'react';
import { Link } from 'react-router-dom'

const CustomBoard = () => {
    const woodData = [
        {
            name: "Walnut",
            color: "#4B351A",
        },
        {
            name: "Maple",
            color: "#FDE96D",
        },
        {
            name: "Cherry",
            color: "#6F0011",
        },
        {
            name: "Ebony",
            color: "#292117",
        },
    ]
    const [length, setLength] = useState()
    const [width, setWidth] = useState()

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 
        <>
        <h1>Hello</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={length} onChange={(event) =>setLength(event.target.value)} />
                 :Board Length
            </label>
            <label>
                <input type="text" value={width} onChange={(event) =>setWidth(event.target.value)} />
                 :Board Width
            </label>
            {/* <button type='submit'>Change Dimensions</button> */}
        </form>
        <label>Select Your Wood Options:
            <select
                name="selectedWood"
                defaultValue={[]}
                multiple={true}
            >
                <option value="Maple">Maple</option>
                <option value="Walnut">Walnut</option>
                <option value="Cherry">Cherry</option>
                <option value="Ebony">Ebony</option>
            </select>
        </label>
        {/* <label>Wood Option #2
            <select>
                {woodData.map(product => {
                    return <option value={product.name}>{product.name}</option>
                })}
            </select>
        </label>
        <label>Wood Option #3
            <select>
                {woodData.map(product => {
                    return <option value={product.name}>{product.name}</option>
                })}
            </select>
        </label> */}

        <svg>
            <rect width={width * 50} height={length *50}/>
        </svg>
        </>
     );
}
 
export default CustomBoard;