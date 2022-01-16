import React from "react";
import Adapter from "./Adapter";

// console.log("The React in Host app is ", React)
// console.log("The NewReact is ", React)

class Host extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: 'green', padding: 24, }}>
        {/* <span>This is a Host App</span> */}
        <Adapter name={"micro-app-header"} importer={
          () => import("app2/Header")
        } count={this.state.count} />
        {/* <Button/> */}
      </div>
    )
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState((prevState)=>{
        return {
          count: prevState.count + 1
        }
      })
    }, 5000)
  }
}

export default Host;
