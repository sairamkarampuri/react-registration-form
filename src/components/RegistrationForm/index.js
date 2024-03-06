import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    inputFirstName: '',
    inputLastName: '',
    isErrorFirstName: false,
    isErrorLastName: false,
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  submitForm = event => {
    event.preventDefault()

    const {inputFirstName, inputLastName} = this.state
    if (inputFirstName !== '' && inputLastName !== '') {
      this.setState({
        isSubmitted: true,
        inputFirstName: '',
        inputLastName: '',
      })
    }
    if (inputFirstName === '') {
      this.setState({isErrorFirstName: true})
    }
    if (inputLastName === '') {
      this.setState({isErrorLastName: true})
    }
  }

  onBlurFirstname = event => {
    if (event.target.value === '') {
      this.setState({isErrorFirstName: true})
    } else {
      this.setState({isErrorFirstName: false})
    }
  }

  onBlurLastname = event => {
    if (event.target.value === '') {
      this.setState({isErrorLastName: true})
    } else {
      this.setState({isErrorLastName: false})
    }
  }

  onFirstNameChange = event => {
    this.setState({inputFirstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({inputLastName: event.target.value})
  }

  render() {
    const {
      isSubmitted,
      isErrorFirstName,
      isErrorLastName,
      inputFirstName,
      inputLastName,
    } = this.state
    const errorFirstNameBgClassName = isErrorFirstName
      ? 'error-bg-input-first'
      : ''
    const errorLastNameBgClassName = isErrorLastName
      ? 'error-bg-input-last'
      : ''
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="registration-heading">Registration</h1>
          <div className="form-box-container">
            {isSubmitted ? (
              <div className="submitted-container">
                <img
                  className="tick-mark-img"
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  alt="success"
                />
                <p className="successfull-text">Submitted Successfully</p>
                <div className="button-container">
                  <button
                    className="button"
                    type="button"
                    onClick={this.submitAnotherResponse}
                  >
                    Submit Another Response
                  </button>
                </div>
              </div>
            ) : (
              <form className="form-container" onSubmit={this.submitForm}>
                <div className="form-section">
                  <label className="label-element" htmlFor="firstName">
                    FIRST NAME
                  </label>
                  <br />
                  <input
                    className={`input-text ${errorFirstNameBgClassName}`}
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={this.onFirstNameChange}
                    value={inputFirstName}
                    onBlur={this.onBlurFirstname}
                  />
                  {isErrorFirstName ? (
                    <p className="error-msg">Required</p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="form-section">
                  <label className="label-element" htmlFor="lastName">
                    LAST NAME
                  </label>
                  <br />
                  <input
                    className={`input-text ${errorLastNameBgClassName}`}
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={this.onLastNameChange}
                    value={inputLastName}
                    onBlur={this.onBlurLastname}
                  />
                  {isErrorLastName ? <p className="error-msg">Required</p> : ''}
                </div>
                <div className="button-container">
                  <button className="button" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
