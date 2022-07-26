import React, { Component } from 'react';
import './App.css';
import GeneralForm from './components/GeneralForm';
import General from './components/General';
import Education from './components/Education';
import EducationForm from './components/EducationForm';
import Work from './components/Work';
import WorkForm from './components/WorkForm';

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
      },
      work: {
        companyName: '', 
        position: '', 
        mainTasks:'', 
        dateFrom: '', 
        dateTo: ''
      },
      allWork: []
    }

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangeWork = this.handleChangeWork.bind(this);
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
  handleChangeWork(e) {
    const value = e.target.value;
    this.setState({
      work: {
        ...this.state.work,
        [e.target.name]: value
        }
      }
    )
    console.log(this.state.work)
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
  handleSubmitWork(e) {
    e.preventDefault();
    this.setState({
      allWork: this.state.allWork.concat(this.state.work),
      work: {
        companyName: '', 
        position: '', 
        mainTasks:'', 
        dateFrom: '', 
        dateTo: ''
      }
    })
    console.log(this.state.allWork)
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
      const { companyName, position, mainTasks, dateFrom, dateTo } = this.state.work;
    return (
      <div className="main">
        <h1>CV Maker</h1>
        <h2>Enter your information below</h2>
        
          {this.state.generalInfo.done ? 
            <General 
              className="cv" 
              name={name} 
              email={email} 
              phone={phone}
              onSubmitGeneral={this.handleSubmitGeneral}
            /> :
            <GeneralForm 
              handleChangeGeneral={this.handleChangeGeneral} 
              onSubmitGeneral={this.handleSubmitGeneral} 
              name={name} 
              email={email} 
              phone={phone}
            />
          }
        
          {this.state.schoolInfo.done ? 
            <Education 
              className="cv" 
              onSubmitEducation={this.handleSubmitEducation}
              schoolName={schoolName} 
              degree={degree} 
              startYear={startYear} 
              endYear={endYear}
            /> : 
            <EducationForm 
              handleChangeEducation={this.handleChangeEducation}  
              onSubmitEducation={this.handleSubmitEducation}
              schoolName={schoolName} 
              degree={degree} 
              startYear={startYear} 
              endYear={endYear}
            />
          }
        
        <Work />
        <WorkForm />
      </div>
    )
  }
}


export default App;
