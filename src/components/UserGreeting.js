import React, { Component } from 'react'

class UserGreeting extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          isLoggedIn: true
      }
   }
   
   render() {

      return this.state.isLoggedIn && <div>Welcome Emma</div>
      // return (
      //    this.state.isLoggedIn ?
      //    <div>Welcome Emma</div> :
      //    <dv>Welcome Guest</dv>
      // )

      // let message
      // if (this.state.isLoggedIn) {
      //    message = <div>Welcome Emma</div>
      // }
      // else {
      //    message = <div>Welcome Guest</div>
      // }

      // return <div>{message}</div>

      // if (this.state.isLoggedIn) {
      //    return (
      //       <div> Welcome Emma </div>
      //    )
      // }
      // else {
      //    return (
      //       <div>Welcome Guest </div>
      //    )
      // }

      // return (
      //    <div>
      //       <div>Welcome Emma</div>
      //       <div>Welcome Guest</div>
      //    </div>  
      // )
   }
}

export default UserGreeting
