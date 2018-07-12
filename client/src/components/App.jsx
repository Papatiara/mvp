import React from 'react';
import Form from './Form.jsx';
import PersonaForm from './PersonaForm.jsx'
import EmotionForm from './EmotionForm.jsx'
import LogIn from './LogIn'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        button1: false,
        button2: false,
        button3: false,
        sign: false,
      }
    }
changeAllStates() {
  this.setState({
    button1: false,
  });
  this.setState({
    button2: false ,
  });
  this.setState({
    button3: false,
  });
}
changeStateButton1() {
  this.setState({
    button1: true,
  });
}

changeStateButton2() {
  this.setState({
    button2: true,
  });
}

changeStateButton3() {
  this.setState({
    button3: true,
  });
}

logIn() {
  this.setState({
    sign: true,
  });
}

render () {
  if (this.state.button1 === false && this.state.button2 === false && this.state.button3 === false && this.state.sign === false) {
    return (
      <div>
        <div className="header">
        <a href="#default" className="logo">Moody</a>
        <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
         <a onClick={() => this.logIn()} href="#about">Log in</a>
      </div>
   </div>
  <div  className="explanation">
    <img className="img"src="https://preview.ibb.co/ejw9ro/Crafting_ideas_into_reality.png" alt="img" />
      </div>
      <div id="container">
        <div>
        <button className="button1" onClick={() => this.changeStateButton1()}> Sentiment Analysis </button>
        </div>
        <div>
        <button className="button2" onClick={() => this.changeStateButton2()}> Persona Alignment </button>
        </div>
        <button className="button3" onClick={() => this.changeStateButton3()}> Emotions </button>
        {/* <div> <h4 className="container1"> Takes a sample of text and returns the positivity. </h4> </div>
        <div> <h4 className="container2"> Predicts the Myers Briggs persona of an author.</h4> </div>
        <div> <h4 className="container3"> Predicts the alignment of a sample of text with each of 5 emotions (anger, fear, joy, sadness, and surprise). </h4> </div> */}
      </div>
     </div>
    )

  } if (this.state.button1 === true) {
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
        <Form />
      </div>
    )
  } if (this.state.button2 === true) {
    return (
      <div>
          <div className="header">
  <a href="#default" className="logo">Moody</a>
  <div className="header-right">
  <a onClick= {() => this.changeAllStates()} className="active" href="#home">Home</a>
  <a href="#contact">Contact</a>
   <a onClick={() => this.logIn()} href="#about"> Log in</a>
  </div>
 </div>
        <PersonaForm />
      </div>
    )
  } if (this.state.button3 === true) {
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
      <EmotionForm />
    </div>
  )
} else if (this.state.sign === true) {
    return (
      <LogIn func={this.changeAllStates.bind(this)}/>
    )
}
  }
}


export default App;