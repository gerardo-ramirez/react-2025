import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch';
const url="https://example.com/data";

interface Data {
  name: string;
  lastName: string;
  age: number;

}

function App() {
  const {data, loading, error}=useFetch<Data>(url)
  if(loading) return  <div>...cargando</div>
  if(error) return  <div>{error.message}</div>


  return (
    <>
      <div>
        {JSON.stringify(data)}
     
      </div>
    </>
  )
}

export default App
