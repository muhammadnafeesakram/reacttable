
import { useState } from 'react';
import './App.css'
import {data} from './assets/data';
import DataTable from 'react-data-table-component'
function App() {
  
  const columns =[
    {
      name : " title",
      selector: row => row.title
    },
    {
      name : " director",
      selector: row => row.director
    },
    {
      name : " year",
      selector: row => row. year,
      sortable: true
    },
    {
      name : "action",
      selector: row => row.action
    },
  ];

  const customStyles={
    headCells: {
		style: {
			backgroundColor : "black",
      color : "white",
      fontSize: "17px",
      fontWeight:"bolder"
		},
  }
}
 const [records, setRecords] = useState(data);

const handleChange = (e) => {
  let query = e.target.value;
  const newrecords = data.filter(item => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  setRecords(newrecords)
}
  return (
    <div className='homeDiv'>
    <div className='search'>
      <h1> Emploies list</h1>
      <input type="text " placeholder='search by title'  onChange={handleChange}/>
    </div>
      <DataTable columns={columns} data={records} customStyles={customStyles} pagination/>
    </div>
  )
}

export default App
