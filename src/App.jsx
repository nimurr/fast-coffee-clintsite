
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const loadCoffees = useLoaderData();
  // console.log(coffees)
  const [coffees , setCoffees ] =useState(loadCoffees)

  return (
    <>
      
      <Header></Header>
      <h1 className='text-center my-10'>Total Coffee : {coffees.length}</h1>
      <div className='w-10/12 mx-auto grid grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
      
    </>
  )
}

export default App
