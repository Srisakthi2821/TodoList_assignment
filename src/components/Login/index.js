import './index.css'

const Login = props => {
  const {gettingUserName, updateUname, isLoginSuccess} = props
  const namegetteingfunction = event => {
    gettingUserName(event)
  }
  const submitName = () => {
    updateUname()
  }
  const loginStatus = isLoginSuccess ? 'hideLogin' : ''

  return (
    <div className={`container_login ${loginStatus}`}>
      <div className="container_Logo" />
      <input
        type="text"
        placeholder="Enter Your Name"
        className="nameInput"
        onChange={namegetteingfunction}
      />
      <button className="addTaskButton" onClick={submitName}>
        Start
      </button>
    </div>
  )
}
export default Login
