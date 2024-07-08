import React from 'react';
import CardModal from './CardModal';

const AddblogModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
            <CardModal isOpen={isOpen} setIsOpen={setIsOpen} title="AddBlog Post">
                <p>ducimus incidunt, nesciunt dicta deleniti delectus enim aliquid!</p>
            </CardModal>
         </div>
    );
};

export default AddblogModal;