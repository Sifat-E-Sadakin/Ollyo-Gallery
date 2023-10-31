import React, { useEffect } from 'react';
import img from '../../../public/data/img.json'
import SingleImage from '../SingleImage/SingleImage';
const Images = () => {

    useEffect(() => {
        // fetch('/data/img.jsons')
        //     .then(data => data.json())
        //     .then(img => console.log(img))
    }, [])


    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    img.map(item => <SingleImage img={item.img}></SingleImage>)
                }

            </div>
        </div>
    );
};

export default Images;