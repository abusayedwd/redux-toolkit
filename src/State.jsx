import React from 'react';

const State = ({totalCount}) => {
    return (
        <div>
             <h1 className=' bg-white shadow-xl w-[30%] mx-auto text-center mt-5 py-10 font-bold'>TotalCount: {totalCount}</h1>
        </div>
    );
};

export default State;