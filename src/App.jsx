import React, { useState, useMemo } from "react";
import "./components/style.css"
import {
  useTable
} from "react-table";

import { v4 as uuidv4 } from 'uuid';


const Columns = [
  {

    Header: 'Id',
    accessor: "id"
  },
  {
    Header: 'Description',
    accessor: "text"
  },
  
]

import TodoList from "./components/TodoList/TodoList";


function App() {
  const [todoListItems, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItemToList = () => {
    if (newItem.trim())

      setList([...todoListItems, { id: uuidv4(), text: newItem }]);
    setNewItem('');
  }

  function deleteItemFunctiom(id) {
    var newList = todoListItems.filter((item) => item.id !== id);
    setList(newList);

  }


  return (
    <div id="todo-list-container">
      <h1>TO DO LIST</h1>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItemToList}>Add </button>
      <TodoList todoListItems={todoListItems} deleteFunc={deleteItemFunctiom} ></TodoList>
      <BasicTable todoListItems={todoListItems} ></BasicTable>
    </div>
  )
}

export  function BasicTable ({todoListItems})  {
debugger;
  const columnsMemo = useMemo(() => Columns, []);
  const dummyMemo = useMemo(() => todoListItems, []);

  const tableInst = useTable({
    columns: columnsMemo,
    data: todoListItems
  });

  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
  } = tableInst;


  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (<th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}


          </tr>
        ))}

      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            prepareRow(row)

            return (
              <tr{...row.getRowProps()}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }

              </tr>)

          })

        }

      </tbody>
    </table>
  )
}

export default App
