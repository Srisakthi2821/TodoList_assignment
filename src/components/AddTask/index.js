import './index.css'

const AddTask = props => {
  const {
    getTimeINput,
    newTaskTimer,
    getTaskDesc,
    onAddingTask,
    isaddTaskBarShown,
  } = props
  const inputTimeChanging = event => {
    getTimeINput(event)
  }
  const changingTaskDesc = event => {
    getTaskDesc(event)
  }
  const addingTaskButton = () => {
    onAddingTask()
  }
  return (
    <div
      className={`container_main_addTask ${
        isaddTaskBarShown ? '' : 'hideAddTask'
      }`}
    >
      <h1 className="AddTask_heading">Add Task :</h1>
      <input
        placeholder="Enter your Task !"
        className="taskInput"
        onChange={changingTaskDesc}
      />
      <br />
      <label htmlFor="inputTime" className="inputTimeLabel">
        Enter Timing :
      </label>
      <input
        placeholder="timer"
        type="time"
        id="inputTime"
        value={newTaskTimer}
        onChange={inputTimeChanging}
        className="timing_item_input"
      />
      <div className="buttonContainer_add">
        <button className="buttonBuy" type="button" onClick={addingTaskButton}>
          <img
            className="imageButton"
            src="http://www.pngplay.com/wp-content/uploads/2/Truck-PNG-Pic-Background.png"
          />
          <p className="para">ADD TASK</p>
          <hr className="hrl" />
          <img
            className="boxes"
            src="https://www.freeiconspng.com/thumbs/courses-icon/courses-icon-4.png"
          />
          <p className="completedtxt">
            Ready,Click <i className="fas fa-check-circle" />
            <br />
          </p>
        </button>
      </div>
    </div>
  )
}

export default AddTask
