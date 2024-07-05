import { useState } from 'react'
import './index.css'
import Count from './Count'
import State from './State'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/countersSlice'

 
function App() {

const counters = useSelector( (state) => (state.counter))
const disPatch = useDispatch()

   
  const totalCount = counters.reduce((sum, current) => sum + current.value , 0) 

 

  const  handaleIncrement = (counterId) => {
    disPatch(increment(counterId))
    // const updatedValue = counters.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value - 1,
    //     }
    //   }
    //   return counter
    // })
    // setCounters(updatedValue)
  
  }
  const handleDecrement = (counterId) => {
   disPatch(decrement(counterId))
    // const updatedValue = counters.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value + 1,
    //     }
    //   }
    //   return counter
    // })
    // setCounters(updatedValue)
  }


  return (
    <>
      <div>
        <h1 className=' bg-slate-500 w-60 text-center mt-10 mx-auto text-2xl'>React simple app</h1>
        <div>
          {
            counters.map((counter) => <Count count={counter.value} 
             key={counter.id}
              onDecrement={()=> handleDecrement(counter.id)}
               onIncrement={() => handaleIncrement(counter.id)} />)
          }

          <State totalCount={totalCount} />
        </div>
      </div>
    </>
  )
}

export default App
