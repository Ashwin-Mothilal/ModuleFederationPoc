import React from "react";
import Adapter from "./Adapter";

// console.log("The React in Host app is ", React)
// console.log("The NewReact is ", React)

class Host extends React.Component {
  render(){
    return (
      <div style={{ height: 50, width: '100%', backgroundColor: 'red' }}>
        <span>This is a Host App</span>
          <Adapter importer={
            ()=> import("app2/Header")
          }/>
          {/* <BaseCounter/> */}
          {/* <Button/> */}
      </div>
    )
  }
}

export default Host;
