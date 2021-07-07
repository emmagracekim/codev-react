import React from 'react'

// function Greet() {
//    return <h1>Hello Emma!</h1>
// }

// same as above but using arrow functions ES6
const Greet = ({name, heroName}) => {
   return (
      <div>
         <h1>Hello {name}! a.k.a. {heroName}</h1>
      </div> 
   )
}

export default Greet


