 

const Count = ({onIncrement, onDecrement, count}) => {
    
    return (
        <div className=' bg-slate-200 text-center mt-8 shadow-lg w-[500px] mx-auto'> 
            <h1>{count}</h1>
                   <div className='py-8 flex items-center gap-3 justify-center'>
                   <button onClick={onIncrement} className=' bg-green-500 px-2 py-1'>
                    Increment
                   </button>
                   <button onClick={onDecrement} className=' bg-red-500 px-2 py-1'>
                    Decrement
                   </button>
                   </div>
        </div>
    );
};

export default Count;