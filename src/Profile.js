import React, {Component}  from 'react';
import myWonderfulImage from "./developpeuse.jpg";
export default class Profile extends Component {
    state={
        time:0
    }
    componentDidMount() {
        setInterval(() => {
          this.setState((prevState) => ({
          time: prevState.time + 1,
          }));
        }, 1000);
      }
    render() {
        const {fullname,profession,bio, imgSrc}=this.props
        return (
            <>
            <p style={{fontFamily:"cursive" }}>The last component was mounted since :{this.state.time} seconds</p>
            <div className="pic" > {this.props.imgSrc} </div> 
          <h1 > {fullname} </h1>  
          <p style={{fontFamily:"cursive"}}> {profession} </p>  
          <h2 style={{fontFamily:"cursive" }}> {bio} </h2> 
          </>
        )
    }
}