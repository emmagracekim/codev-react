import React from 'react'

const Hello = () => {
   // return (
   //    <div className='dummyClass'>
   //       <h1>Hello Emma</h1>
   //    </div>
   // )

   // same as above but without using JSX
   return React.createElement(
      'div', 
      {id: 'hello', className: 'dummyClass'}, 
      React.createElement('h1', null, 'Hello Emma')
   )
}

export default Hello