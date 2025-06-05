import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch';
import CustomForm from './CustomForm/customForm';
const url="https://example.com/data";

interface Data {
  name: string;
  lastName: string;
  age: number;

}

function App() {
  /*
  const {data, loading, error}=useFetch<Data>(url)
  if(loading) return  <div>...cargando</div>
  if(error) return  <div>{error.message}</div>
*/

  return (
    <>
      <div>
        <CustomForm/>
     
      </div>
    </>
  )
}

export default App
