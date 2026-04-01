

import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Card from './components/card/card'
import Navbar from './components/navbar/navbar'
import Premium from './components/premium/premium'
import Rating from './components/rating/rating'
import StepSection from './components/stepSection/stepSection'
import Pricing from './components/pricing/pricing'
import Workflow from './components/workflow/workflow'
import Footer from './components/footer/footer'

const fetchData = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

// const fetchData = fetch('/data.json')
//                          .then(res => res.json())

function App() {
  const DataPromise =fetchData();
   const [cartValue, setCartValue] = useState();
   console.log(cartValue);
   
  

  return (
    <>
    <Navbar cartValue={cartValue}></Navbar>
    <Banner></Banner>
    <Rating></Rating>
    <Premium DataPromise={DataPromise} cartValue={cartValue} setCartValue={setCartValue}></Premium>
     {/* <Card DataPromise={DataPromise}></Card> */}
   
<StepSection></StepSection>
<Pricing></Pricing>
<Workflow></Workflow>
<Footer></Footer>
    </>

  )
}

export default App
