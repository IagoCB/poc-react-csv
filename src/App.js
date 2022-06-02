import React, { useEffect } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import {
  Box,
  Button,
} from '@mui/material';


const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" }
];

const data = [
  { firstName: "Warren", lastName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
  { firstName: "Gwendolyn", lastName: "Galloway", email: "weciz@mailinator.com", age: "76" },
  { firstName: "Astra", lastName: "Wyatt", email: "quvyn@mailinator.com", age: "57" },
  { firstName: "Jasmine", lastName: "Wong", email: "toxazoc@mailinator.com", age: "42" },
  { firstName: "Brooke", lastName: "Mcconnell", email: "vyry@mailinator.com", age: "56" },
  { firstName: "Christen", lastName: "Haney", email: "pagevolal@mailinator.com", age: "23" },
  { firstName: "Tate", lastName: "Vega", email: "dycubo@mailinator.com", age: "87" },
  { firstName: "Amber", lastName: "Brady", email: "vyconixy@mailinator.com", age: "78" },
  { firstName: "Philip", lastName: "Whitfield", email: "velyfi@mailinator.com", age: "22" },
  { firstName: "Kitra", lastName: "Hammond", email: "fiwiloqu@mailinator.com", age: "35" },
  { firstName: "Charity", lastName: "Mathews", email: "fubigonero@mailinator.com", age: "63" }
];

const csvReport = {
  data: data,
  headers: headers,
  filename: 'teste.csv'
};

function App() {

  const styles = {
    buttonStyle:{
      backgroundColor: 'black',
      borderRadius: '10px',   
      '&:hover': { 
        backgroundColor: '#6c788e' 
      },
    },
  }

  useEffect(() => { <CSVDownload data={csvReport} filename={"my-file-test.csv"} /> })
  return (
    <Box classname="App">
      <h3>Export data to CSV in React, document: <a href='https://www.npmjs.com/package/react-csv'>npmjs</a>, 
      <a href='https://stackoverflow.com/questions/53504924/reactjs-download-csv-file-on-button-click'> stackoverflow</a>  </h3>
      <Button sx={styles.buttonStyle}>
        <CSVLink {...csvReport} target='_blank' style={
            {
              color:'white', 
              textDecoration: 'none' 
            }
          }>
          Export to CSVLink
        </CSVLink>
      </Button>
      
    </Box>
  );
}

export default App;
