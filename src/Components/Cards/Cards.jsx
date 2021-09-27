import React from 'react'
import './cards-styles.css'

export const Cards = ({id, img, Title, shortDescription, longDescription}) => {
    return (
        <div className='card' id={id}>
           <img src={img}/>
           {/* <div className='descriptions'> */}
            <h1>{Title}</h1>
            <p>{shortDescription}</p>
            <p>{longDescription}</p>
           {/* </div> */}


           
          
        </div>
    )
}
