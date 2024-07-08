import './index.css'
import Count from './Count'
import State from './State'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/countersSlice' 
 
import Tabs from './Tabs'
import CardModal from './CardModal'
import { useState } from 'react'
import AddblogModal from './AddblogModal'
 
 

 
function App() {
  
const [isOpen, setIsOpen] = useState(false)

const counters = useSelector( (state) => (state.counters))
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
        <h1 className=' bg-slate-500 w-60 text-center mt-10 mx-auto text-2xl'>Redux Toolkit..</h1>
        <div className=' text-right mr-32'> 
        <button onClick={() => setIsOpen(!isOpen)} className=' bg-blue-600 text-white font-semibold py-2 px-3 rounded text-right'>Add Blog</button>
         
        </div>
        {/* <CardModal isOpen={isOpen} setIsOpen={setIsOpen} title = "Add blog post">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ipsa laborum non, temporibus recusandae, hic sunt cumque vel odit labore impedit? Odit vitae beatae nam suscipit nisi. Harum, vitae rem?</p>
        </CardModal> */}
        <AddblogModal isOpen={isOpen} setIsOpen={setIsOpen}></AddblogModal>

        
        <State totalCount={totalCount} /> 
        <div className='flex items-center w-[450px] mx-auto gap-4'>
          {
            counters.map((counter) => <Count count={counter.value} 
             key={counter.id}
              onDecrement={()=> handleDecrement(counter.id)}
               onIncrement={() => handaleIncrement(counter.id)} />)
          }
 
        </div> 
      <Tabs /> 
      </div>
    </>
  )
}

export default App
