import React, { Component } from 'react'

// rce shortcut
class Counter extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          count: 0
      }
   }

   increment() {
      // this.setState(
      //    {
      //    count: this.state.count + 1
      // }, () => {console.log('Callback value', this.state.count)})

      this.setState((cat) => ({
         count: cat.count + 1
      }))
      console.log(this.state.count)
   }

   incrementFive() {
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
   }
   

   render() {
      return (
         <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.incrementFive()}>Increment</button>        
         </div>
      )
   }
}

export default Counter
