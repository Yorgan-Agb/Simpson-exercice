import React from 'react'

function SimpsonCitation({ simpson }) {
    return (
      simpson && (
        <div className='SimpsonCitation'>
          <ul>
            <li>Name: {simpson.character}</li>
            <img src={simpson.image} alt={simpson.characters}/>
            <li>Quote: {simpson.quote}</li>
          </ul>
        </div>
      )
    );
  }

  export default SimpsonCitation;