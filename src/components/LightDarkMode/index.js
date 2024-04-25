// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {btnName: 'Light Mode', bgClass: 'Dark-mode'}

  toogleBgAndBtnName = () => {
    this.setState(prevState => ({
      btnName: prevState.btnName === 'Light Mode' ? 'Dark Mode' : 'Light Mode',
      bgClass: prevState.bgClass === 'Dark-mode' ? 'Light-mode' : 'Dark-mode',
    }))
  }

  render() {
    const {btnName, bgClass} = this.state
    return (
      <div className="app-container">
        <div className={`card-container ${bgClass}`}>
          <h1 className="description">Click To Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.toogleBgAndBtnName}
          >
            {btnName}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
