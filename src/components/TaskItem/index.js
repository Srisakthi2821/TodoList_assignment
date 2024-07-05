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
          <i className="far fa-clock"></i> {time}
        </p>
        <p className="descriptiontask">{content}</p>
      </div>

      <div className="icons_item">
        <i onClick={completedTask} className="fas fa-check"></i>
        <i className="fas fa-edit" onClick={editTask}></i>
      </div>
    </div>
  )
}
export default TaskItem
