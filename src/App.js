import React, { Component } from 'react';
import './App.css';
import GeneralForm from './components/GeneralForm';
import General from './components/General';
import Education from './components/Education';
import EducationForm from './components/EducationForm';

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
        endYear: '',
        done: false
      }
    }

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleSubmitGeneral = this.handleSubmitGeneral.bind(this);
    this.handleSubmitEducation = this.handleSubmitEducation.bind(this);
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
  }
  handleSubmitEducation(e) {
    e.preventDefault();
    this.setState({
      schoolInfo: {
        schoolName: this.state.schoolInfo.schoolName,
        degree: this.state.schoolInfo.degree,
        startYear: this.state.schoolInfo.startYear,
        endYear: this.state.schoolInfo.endYear,
        done: !this.state.schoolInfo.done
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
      const { name, email, phone } = this.state.generalInfo;
      const { schoolName, degree, startYear, endYear } = this.state.schoolInfo;
    return (
      <div className="main">
        <h1>Enter your information</h1>
        <form onSubmit={this.handleSubmitGeneral} className="general--form">
          {this.state.generalInfo.done ? <General name={name} email={email} phone={phone}/> :
            <GeneralForm handleChangeGeneral={this.handleChangeGeneral}/>
          }
          {!this.state.generalInfo.done ? this.buttonControl(false) : this.buttonControl(true)}
        </form>
        
        <form onSubmit={this.handleSubmitEducation} className="education--form">
          {this.state.schoolInfo.done ? 
          <Education schoolName={schoolName} degree={degree} startYear={startYear} endYear={endYear}/> 
          : <EducationForm handleChangeEducation={this.handleChangeEducation}/>}
          {!this.state.schoolInfo.done ? this.buttonControl(false) : this.buttonControl(true)}
        </form>
      </div>
    )
  }
}


export default App;
