import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)

  pigAlert(){
    if(this.props.environment === "inhospitable"){
      return this.panic()
    }
  }

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.pigAlert()}
      </div>
    )
  }
}
