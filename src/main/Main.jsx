import React from 'react';
import CrudPage from '../CrudPage'
 
import Navbar from '../Navbar';

const Main = () => {
    return (
        <div>
             <Navbar></Navbar>
               <CrudPage></CrudPage>
               {/* <UpdatePost></UpdatePost> */}
        </div>
    );
};

export default Main;