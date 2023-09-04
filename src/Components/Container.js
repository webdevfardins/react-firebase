import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'
 class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:null,
        email:null,
        question:{
          q1:null,
          q2:null,
          q3:null,
          other:null,
        },
        isSubmitte:false,
         
      }
    }
    detailsubmit =(event) =>{
     const name= event.target.name.value;
     const email= event.target.email.value;
     this.setState({name,email})
      event.preventDefault();
      
    }
    questionsubmit =(event)=>{
      const questions={}
      questions.q1= event.target.q1.value;
      questions.q2= event.target.q2.value;
      questions.q3= event.target.q3.value;
      questions.other= event.target.other.value;
      this.setState({questions})
      
      event.preventDefault();

    }

  render() {
    return (
      <>
        <div className='container-fluid'>
            <div className='cntainer card mt-2'>
                <h1 className='text-center text-primary'> fs survey</h1>
            </div>
        </div>
      {
        this.state.name === null && this.state.email === null ?(<Details submit={this.detailsubmit} />):(
          <Question submit={this.questionsubmit}/>
        )
      }
        
        
        
      </>
    )
  }
}

export default Container
