import React, { useState } from 'react';
import CardFilter from '../../Components/CardFilter/CardFilter';
import tarotCards from '../../Assets/tarotCardDB.json'
import { TarotCardContainer } from '../../Components/TarotCardContainer/TarotCardContainer';



const TarotLibrary = () => {
    const [suit, setFilterSuit] = useState(tarotCards)

    const handleClick = (e) => {
            if (e.target.id === "Reset") {
            setFilterSuit( tarotCards );
            } else {
              let updatedSuit = tarotCards.filter(
                (data) => data.type === e.target.id
              );
            setFilterSuit(updatedSuit,
              );

      }

    };

    return (
      <div className='tarotLibraryMain'>
        <CardFilter Data={suit} handleClick={handleClick} />
        <TarotCardContainer Data={suit} />
      </div>
    );
}

export default TarotLibrary
