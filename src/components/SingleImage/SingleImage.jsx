import React from 'react';

const SingleImage = ({ img }) => {
    console.log(img)
    return (
        <div>

            <img className='w-40' src={img} alt="" />
        </div>
    );
};

export default SingleImage;