import {Component} from 'react'

import './index.css'

class EditableUserInput extends Component {
  state = {userInput: '', active: true}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  changeActive = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }))
  }

  render() {
    const {userInput, active} = this.state
    const buttonText = active ? 'save' : 'edit'
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="head">Editable Text Input</h1>
          {active ? (
            <input
              type="text"
              onChange={this.onChangeInput}
              value={userInput}
            />
          ) : (
            <p>{userInput}</p>
          )}
          <button className="btn" onClick={this.changeActive} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default EditableUserInput
