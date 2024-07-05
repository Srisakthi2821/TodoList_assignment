import './index.css'

const TaskItem = props => {
  const {eachItem, onCompletedTask, onEdittask} = props
  const {id, time, content} = eachItem
  const completedTask = () => {
    onCompletedTask(id)
  }
  const editTask = () => {
    onEdittask(id)
  }
  return (
    <div className="itemTaskCont">
      <div className="part1_taskItem">
        <p className="timetask">
          <i className="far fa-clock" /> {time}
        </p>
        <p className="descriptiontask">{content}</p>
      </div>

      <div className="icons_item">
        <button
          onClick={completedTask}
          className="icon-button-edit-taskitem"
          aria-label="Mark as Completed"
        >
          <i className="fas fa-check" />
        </button>

        <button
          onClick={editTask}
          className="icon-button-edit-taskitem"
          aria-label="Mark as Edited"
        >
          <i className="fas fa-edit" />
        </button>
      </div>
    </div>
  )
}
export default TaskItem
