import React, { useState } from "react";
import './Table.css'


function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { wood, width } = rowsData;
    return (
      <tr key={index}>
        <td>
            <select
                name="selectedWood"
                defaultValue={[]}
               
            >
                <option value="Maple">Maple</option>
                <option value="Walnut">Walnut</option>
                <option value="Cherry">Cherry</option>
                <option value="Ebony">Ebony</option>
            </select>
        </td>
        <td>
            <select
                name="layerWidth"
                defaultValue={[]}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>          
            </select>
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Delete Row
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      wood: "",
      width: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { wood, value } = event.target;
    const data = [...rows];
    data[i][wood] = value;
    initRow(data);
  };
  return (
    <>
      <h2 className='header'>React JS Add / Delete Table Rows Example</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Wood</th>
            <th>Width</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Insert Row
              </button>
            </th>
          </tr>
        </thead>
        <tbody className='table'>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Table;