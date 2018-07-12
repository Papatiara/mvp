import React from 'react';
import axios from 'axios';
import Graph from './Graph'


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          click: false,
          indico: 0,
      }
    }

  handleChange(event){
    this.setState({
      value: event.target.value,
      });
  }

  submit(text) {
    axios.post('http://localhost:3003/sentimentanalysis', {
      text: text,
    })
  .then((response) => {
    this.setState({
      indico: Math.round(Number(response.data) * 100),
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
        <Graph indico={this.state.indico}/>
     )};
    return (
      <div>
      <div className="title"> <h1 >Sentiment Analysis </h1>
       <h4> Takes a sample of text and returns the positivity. </h4> 
      <h3> Insert your text </h3>
      <form type="text"  value={this.state.value} onChange={(e) => this.handleChange(e)} >
      <textarea>  </textarea>
      </form>
    <button onClick={() => this.submit(this.state.value)}> submit </button>
    </div>
    </div>
    )
  }
}

export default Form;