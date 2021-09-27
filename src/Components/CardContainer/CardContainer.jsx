import React, { Component } from 'react'

import { Cards } from '../Cards/Cards'
// import Data from '../../Data/tarotCardDB.json'
import './cardcontainer-styles.css'




// export class CardContainer extends Component {
   


//     render() {
//         return (
//             <div className='cardContainer'>
          
        
//            {Data.filter(data => +data.id >=1).map((data, index) => <Cards key={index} {...data} /> )
           
           
//            }

//         </div>
//         )
//     }
// }

// export default CardContainer


export const CardContainer = ({Data}) => {
     
    
    // const filterTypes = Data.filter(data => data.type == type)

    // const clicked = () => setType()
    return (
        
        <div className='cardContainer'>
         
        
        {Data.filter(data => +data.id >=1).map((data, index) => <Cards key={index} {...data} /> )
        }

        </div>
    )
}
