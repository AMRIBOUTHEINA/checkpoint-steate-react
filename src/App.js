import React  from 'react';
import './App.css';
import myWonderfulImage from "./developpeuse.jpg";
class App extends React.Component  {
  constructor(props){
    super(props)
this.state = {
  fullname:"Amri Boutheina",
  Profession:" I'M a texile Engineer and a future Fullstack Js Developer.",
  bio:"I'm a textile Engineer with four years of experience.I enjoy development because it is usable art,so I follow now an intensive formation that will allow me to beguin a career as a Full Stack JS developer . ",
  imgSrc:<img  style={{width:200 ,height:200 ,borderRadius:100 }} src={myWonderfulImage} alt ='developpeuse'/>,
  show: false,
  time:0,
};
}
componentDidMount() {
  setInterval(() => {
    this.setState((prevState) => ({
    time: prevState.time + 1,
    }));
  }, 1000);
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
       {this.state.show && (
         <>
     <h1 style={{color:"brown" }}> {this.state.fullname}</h1>
     <h3 style={{color:"rgb(39, 6, 70)" ,}}> {this.state.Profession}</h3>
     <div> {this.state.imgSrc}</div>       
     <p  style={{textAlign:"center" }}>{this.state.bio}</p>
     </>
    )}
     <button onClick={this.handleClick}> show profile</button>
     <p style={{color:"blue"}}>The last component was mounted since: {this.state.time} seconds</p>
 
  </div>  
  );
  }     
}
export default App;
