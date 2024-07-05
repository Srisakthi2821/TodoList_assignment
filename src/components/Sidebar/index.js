import './index.css'

const Sidebar = props => {
  const {isDashboardActive, sidebarChanging, onLogout} = props
  const changeBar = () => {
    sidebarChanging()
  }
  const logout = () => {
    onLogout()
  }
  return (
    <div className="container-sideBar">
      <div>
        <img
          src="https://res.cloudinary.com/dnklin54k/image/upload/v1720067510/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview_lh2uwe.png"
          alt="logo-todo-app"
          className="logo-todo"
        />
        <ul className="container-list-items">
          <li
            onClick={changeBar}
            className={`listItem-sidebar ${
              isDashboardActive ? 'active_sidebar' : ''
            }`}
          >
            <i className="fas fa-columns"></i> Dashboard
          </li>
          <li
            onClick={changeBar}
            className={`listItem-sidebar ${
              isDashboardActive ? '' : 'active_sidebar'
            }`}
          >
            <i className="fas fa-flag-checkered"></i> View All Lists
          </li>
        </ul>
      </div>
      <button className="logoutBuutton" onClick={logout}>
        <div className="signLogout">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="logOuttext">Logout</div>
      </button>
    </div>
  )
}

export default Sidebar
