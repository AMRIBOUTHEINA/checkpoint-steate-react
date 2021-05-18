import React  from 'react';
import './App.css';
import myWonderfulImage from "./developpeuse.jpg";
import Profile from './Profile';


class App extends React.Component  {
  constructor(props){
    super(props)
this.state = {
  fullname:"Amri Boutheina",
  profession:" I'M a texile Engineer and a future Fullstack Js Developer.",
  bio:"I'm a textile Engineer with 2 years of experience.I enjoy development because it is usable art,so I follow now an intensive formation that will allow me to beguin a career as a Full Stack JS developer . ",
  imgSrc:<img  style={{width:200 ,height:200 ,borderRadius:100 }} src={myWonderfulImage} alt ='developpeuse'/>,
  show: false,
  time:0,
};
}
handleClick = () => {
  this.setState({
    ...this.state,
    show: !this.state.show
  });
};

render() {  
  return (
    <div className="app">
    <button onClick={this.handleClick}> {this.state.show? 'hide profile' : ' show profile '} </button>
       {this.state.show && < Profile fullname={this.state.fullname} profession={this.state.profession} bio={this.state.bio}  imgSrc={this.state.imgSrc}/> 
}
  </div> 
  );
  }     
}
export default App;
