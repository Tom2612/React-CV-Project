import React, { Component } from 'react';
import './App.css';
import GeneralForm from './components/GeneralForm';
import General from './components/General';
import Education from './components/education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phone: '',
        done: false
      },
      schoolInfo: {
        schoolName: '',
        degree: '',
        startYear: '',
        endYear: ''
      }
    }

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleSubmitGeneral = this.handleSubmitGeneral.bind(this);
    this.buttonControl = this.buttonControl.bind(this);
  }
  handleChangeGeneral(e) {
    const value = e.target.value;
    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [e.target.name]: value
        }
      }
    )
  }
  handleChangeEducation(e) {
    const value = e.target.value;
    this.setState({
      schoolInfo: {
        ...this.state.schoolInfo,
        [e.target.name]: value
        }
      }
    )
  }
  handleSubmitGeneral(e) {
    e.preventDefault();
    this.setState(({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone,
        done: !this.state.generalInfo.done
      }
    }))
      console.log("state:", this.state)
  }
  handleSubmitEducation(e) {
    e.preventDefault();
    this.setState({
      ...this.state.generalInfo,
      schoolInfo: {
        schoolName: this.state.schoolInfo.schoolName,
        degree: this.state.schoolInfo.degree,
        startYear: this.state.schoolInfo.startYear,
        endYear: this.state.schoolInfo.endYear
      }
    })
  }
  buttonControl(value) {
    if (value) {
      return <button>Edit</button>
    } else {
      return <button type="submit">Submit</button>
    }
  }
  render() {
    return (
      <div>
        <h1>Enter your information</h1>
        {this.state.generalInfo.done ? <General /> : 
          <form onSubmit={this.handleSubmitGeneral}>
          <GeneralForm handleChangeGeneral={this.handleChangeGeneral}/>
          {!this.state.generalInfo.done ? this.buttonControl(false) : this.buttonControl(true)}
        </form>
        }
        
        <form onSubmit={this.handleSubmitEducation}>
          <Education handleChangeEducation={this.handleChangeEducation}/>
          {!this.state.schoolInfo.done ? this.buttonControl(false) : this.buttonControl(true)}
        </form>
      </div>
    )
  }
}


export default App;
