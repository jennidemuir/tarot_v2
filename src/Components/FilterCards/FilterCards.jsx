import React from 'react'
import './filtercards-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FilterCards({handleClick}) {
    
   

    return (
        <div className='filter'>
            <div onClick={handleClick }  id='MajorArcana' className='container'>
                Major Arcana
                <div className='background' id='arcana' ></div> 
            </div>
           
            <div onClick={handleClick} id='Cups' className='container'>
                Cups
                <div className='background' id='cup'>
    
                </div>
                
            </div>
            
            <div onClick={handleClick} id='Swords' className='container'>
                Swords
                <div className='background' id='sword'></div>
            </div>
            
            <div onClick={handleClick} id='Wands' className='container'>
                Wands
                <div className='background' id='wand'></div>
                </div>
           
            <div onClick={handleClick} id='Pentacles' className='container'>
                Pentacles
                <div className='background' id='pentacle'></div>
            </div>

            <div onClick={handleClick} id='Reset' className='container'>
                View All
                <div className='background' id='all'></div>
            </div>
            
            
         </div>
    )
}
