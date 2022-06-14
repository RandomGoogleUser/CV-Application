import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      name: '', 
      email: '', 
      phoneNumber: 0,
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      company: '',
      position: '',
      tasks: '',
      date: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this)
    this.handleTitleOfStudyChange = this.handleTitleOfStudyChange.bind(this)
    this.handleDateOfStudyChange = this.handleDateOfStudyChange.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handlePositionChange = this.handlePositionChange.bind(this)
    this.handleTasksChange = this.handleTasksChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value})
  }

  handleSchoolNameChange(event) {
    this.setState({schoolName: event.target.value})
  }

  handleTitleOfStudyChange(event) {
    this.setState({titleOfStudy: event.target.value})
  }

  handleDateOfStudyChange(event) {
    this.setState({dateOfStudy: event.target.value})
  }

  handleCompanyChange(event) {
    this.setState({company: event.target.value})
  }

  handlePositionChange(event) {
    this.setState({position: event.target.value})
  }

  handleTasksChange(event) {
    this.setState({tasks: event.target.value})
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handleOnSubmit(event) {
    event.preventDefault()

    alert(`Results\n\nYour name is ${this.state.name}.\nYour email is ${this.state.email}.\nYour phone number is ${this.state.phoneNumber}.\nYour school name is ${this.state.schoolName}.\nYour title of study is ${this.state.titleOfStudy}.\nYour date of study is ${this.state.dateOfStudy}.\nYour company name is ${this.state.company}.\nYour position title is ${this.state.position}.\nYour main tasks of your job is ${this.state.tasks}.\nYour Date from and until you worked for that company is ${this.state.date}. `)
  }
  
  render() {
    return (
      <form id="CV" onSubmit={this.handleOnSubmit}>
        <section className="container">
          <h3 className="header">Personal Information</h3>
          <input type="text" placeholder="Your name" 
className="form-input" onChange={this.handleNameChange} required />
          <input type="email" placeholder="Your email" 
className="form-input" onChange={this.handleEmailChange} required />
          <input type="number" placeholder="Your phone number (optional)" className="form-input" onChange={this.handlePhoneNumberChange} />
        </section>
        <section className="container">
          <h3 className="header">Education</h3>
          <input type="text" placeholder="School name" className="form-input" onChange={this.handleSchoolNameChange} />
          <input type="text" placeholder="Title of study" className="form-input" onChange={this.handleTitleOfStudyChange} />
          <input type="text" placeholder="Date of study" 
className="form-input" onChange={this.handleDateOfStudyChange} />
        </section>
        <section className="container">
          <h3 className="header">Experience</h3>
          <input type="text" placeholder="Company name" className="form-input" onChange={this.handleCompanyChange} />
          <input type="text" placeholder="Position title" className="form-input" onChange={this.handlePositionChange} />
          <input type="text" placeholder="Main tasks of your job" className="form-input" onChange={this.handleTasksChange} />
          <input type="text" placeholder="Date from and until you worked for that company" className="form-input" onChange={this.handleDateChange} />
        </section>
        <section id="submit-cv">
          <button type="submit" className="submit">Submit</button>
        </section>
      </form>
    )
  }
}

export { App }