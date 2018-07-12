import React from 'react';
import axios from 'axios';

class PersonaForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          click: false,
          indico: [],
      }
    }

  handleChange(event){
    this.setState({
      value: event.target.value,
      });
  }

  submit(text) {
    axios.post('http://localhost:3003/personaalignment', {
      text: text,
    })
  .then((response) => {
    var count = 1;
    var personality = [];
    var arr = Object.values(response.data);
    const newArr = arr.map(elem => Math.round(Number(elem) * 1000)) 
      newArr.sort(function(a,b){
          return b-a;
       });
    for (var count = 0; count < 3; count++) {
    for (var key in response.data) {
       if (Math.round(Number(response.data[key]) * 1000) === newArr[count]) {
         personality.push(key.toUpperCase());
       }
    }
}
    this.setState({
      indico: personality
    });
  })
  .catch((error) => {
    console.log(error);
  })
  this.setState({
      click: true,
  });
}

render () {
    if (this.state.click === true) {
     return (
      <div>
        <h1 className="personality"> {this.state.indico[0]} </h1>
        <h2 className="personality"> {this.state.indico[1]} </h2>
        <h3 className="personality"> {this.state.indico[2]} </h3>
      </div>
     )
    }
    return (
    <div  className="container2">
     <div> <h4> Predicts the Myers Briggs persona of an author.</h4> </div>
      <h3> Insert your text </h3>
      <form type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} >
      <textarea>  </textarea>
      </form>
    <button onClick={() => this.submit(this.state.value)}> submit </button>
    </div>
    )
  }
}

export default PersonaForm;