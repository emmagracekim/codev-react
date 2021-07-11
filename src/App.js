import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import FocusInput from "./components/FocusInput";
// import FRParentInput from "./components/FRParentInput";
// import Hero from "./components/Hero";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Person from "./components/Person";
// import Stylesheet from "./components/Stylesheet";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import LifecycleB from "./components/LifecycleB";
// import Fragment from "./components/Fragment";
// import Table from "./components/Table";
// import PureComp from "./components/PureComp";
// import ParentComp from "./components/ParentComp";
// import PortalDemo from "./components/PortalDemo";
// import RefsDemo from "./components/RefsDemo";
// import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="Emma" />
        <HoverCounter />
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* < Fragment /> */}
        {/* <LifecycleA /> */}
        {/* < Form /> */}
        {/* <Stylesheet /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message></Message> */}
        {/* <Greet name="Diana"heroName="Wonder Woman"/> */}
        {/* <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Greet name="Bruce" heroName="Batman">
               <p>This is children props</p>
            </Greet>
            <Greet name="Clark" heroName="Superman">
               <button>Action</button>
            </Greet>
     <Greet name="Diana"heroName="Wonder Woman"/> */}
        {/* <Welcome name="Bruce" heroName="Batman"/>
            <Welcome name="Clark" heroName="Superman"/>
            <Welcome name="Diana"heroName="Wonder Woman"/>  */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
