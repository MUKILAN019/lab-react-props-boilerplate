import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  
constructor(props){
  super(props)
}
  render(){
    return(
    <div>
          <h1 className='text'>Kalvium Gallary</h1>
          <div className="main-container">
            {this.props.name.map(function(element,index,out){
              return(
                <div key={element.id}>
                  <img src={element.img} />
                  </div>
              )


})
  }

          </div>

    </div>)
  }

  // code here

}