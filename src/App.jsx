import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Card from './components/card/card'
import Navbar from './components/navbar/navbar'
import Premium from './components/premium/premium'
import Rating from './components/rating/rating'
import StepSection from './components/stepSection/stepSection'

// const fetchData = async() =>{
//   const res = await fetch('/data.json');
//   return res.json();
// }

const fetchData = fetch('/data.json')
                         .then(res => res.json())

function App() {
  const DataPromise =fetchData;
console.log(fetchData);

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Rating></Rating>
    <Premium></Premium>
     <Card DataPromise={DataPromise}></Card>
    {/* <Suspense fallback=
           { <span className="loading loading-dots loading-md"></span>}>
     <Card DataPromise={DataPromise}></Card>
  </Suspense> */}
<StepSection></StepSection>

    </>

  )
}

export default App
