import React from 'react';
import axios from 'axios';
import EmotionGraph from './EmotionGraph';

class EmotionForm extends React.Component {
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
    axios.post('http://localhost:3003/emotions', {
      text: text,
    })
  .then((response) => {
    this.setState({
      indico: response.data
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
    if (this.state.click === true)  {
        return(
        <EmotionGraph data={this.state.indico} />
        )
    }
    return (
    <div className="container3">
      <div> <h4> Predicts the alignment of a sample of text with each of 5 emotions (anger, fear, joy, sadness, and surprise). </h4> </div> 
      <h3> Insert your text </h3>
      <form type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} >
      <textarea>  </textarea>
      </form>
    <button onClick={() => this.submit(this.state.value)}> submit </button>
    </div>
    )
  }
}

export default EmotionForm;