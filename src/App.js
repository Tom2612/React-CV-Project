import React, { Component } from 'react';
import './App.css';
import GeneralForm from './components/GeneralForm';
import General from './components/General';
import Education from './components/Education';
import EducationForm from './components/EducationForm';
import WorkContainer from './components/WorkContainer';
import WorkForm from './components/WorkForm';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

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
        dateTo: '',
        done: false
      },
      allWork: [],
      addWork: true
    }

    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangeWork = this.handleChangeWork.bind(this);
    this.handleSubmitGeneral = this.handleSubmitGeneral.bind(this);
    this.handleSubmitEducation = this.handleSubmitEducation.bind(this);
    this.handleSubmitWork = this.handleSubmitWork.bind(this);
    this.handleEditWork = this.handleEditWork.bind(this);
    this.buttonControl = this.buttonControl.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this)
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
    const newWork = {
      ...this.state.work,
      id: uuidv4()
    }
    this.setState({
      allWork: this.state.allWork.concat(newWork),
      work: {
        companyName: '', 
        position: '', 
        mainTasks:'', 
        dateFrom: '', 
        dateTo: '',
        done: !this.state.work.done
      }
    })
  }
  handleEditWork = (e, elementId) => {
    const { name, value } = e.target;
    this.setState({
      allWork: this.state.allWork.map(work => {
        if (work.id===elementId) {
          work[name.toString()]= value
        }
        return work
      })
    })
  }
  buttonControl(value) {
    if (value) {
      return <button>Edit</button>
    } else {
      return <button type="submit">Submit</button>
    }
  }
  onSubmitClick() {
    this.setState(prevState => ({
     addWork: !prevState.addWork,
    }))
  }
  
  render() {
      const { name, email, phone } = this.state.generalInfo;
      const { schoolName, degree, startYear, endYear } = this.state.schoolInfo;
      const { companyName, position, mainTasks, dateFrom, dateTo } = this.state.work;
      let addMode = {}
      if (this.state.addWork) {
        addMode.display = 'visible';
      } else {
        addMode.display = 'none'
      }
    return (
      <div className='body'>
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
            
            {this.state.allWork.length > 0 ? 
              <WorkContainer 
                allWork={this.state.allWork}
                handleEditWork={this.handleEditWork}
              /> : 
              <></>
            }
            
            {!this.state.addWork ? 
            <></> : 
              <WorkForm 
                addMode={addMode}
                handleChangeWork={this.handleChangeWork}
                onSubmitWork={this.handleSubmitWork}
                companyName={companyName}
                position={position}
                mainTasks={mainTasks}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
            }
            <div className="submit-cv">
              <button className="finish-btn" onClick={this.onSubmitClick}>
                {this.state.addWork? 'Submit all work' : 'Add more work'}
              </button>
            </div>
        </div>
        <Footer className="footer"/>
      </div>
      
    )
  }
}


export default App;
