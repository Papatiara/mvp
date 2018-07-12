import React from 'react';


class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          click: false,
          indico: 0,
      }
    }

render () {
    return (
      <div>
      <div className="header">
      <a href="#default" className="logo">Moody</a>
      <div className="header-right">
      <a onClick= {() => this.changeAllStates()} className="active" href="#home">Home</a>
      <a href="#contact">Contact</a>
       <a onClick={() => this.logIn()} href="#about">Log in</a>
      </div>
     </div>
    <div>
      <h4> First Name <input className="sign" /> </h4>
      <h4> Username <input className="sign" /> </h4>
      <h4> Last Name <input className="sign" /> </h4>
      <h4> Email <input className="sign" /> </h4>
      <button> submit </button>
    </div>
    </div>
    )
  }
}

export default LogIn;