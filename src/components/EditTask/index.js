import './index.css'

const EditTask = props => {
  const {
    isEditBarShown,
    parsingEditTaskItem,
    onEditSuccess,
    onChangingstateContentInTodo,
    onChangeContentInTodo,
    onChangingFunctinoTimeInEdit,
    onChangingTimeStateInEdit,
  } = props
  if (!isEditBarShown || parsingEditTaskItem.length === 0) {
    return null
  }
  const lastTaskItem = parsingEditTaskItem[parsingEditTaskItem.length - 1]
  const {id, content, time} = lastTaskItem[0]
  const editIsShown = isEditBarShown ? '' : 'editorHide'
  let editedContent = content
  let editedTiming = ''
  const onChangeEditionContent = () => {
    onChangeContentInTodo(event)
  }
  const onEditButtonPress = () => {
    onEditSuccess(id)
  }
  const onChangeEditTiming = () => {
    onChangingFunctinoTimeInEdit(event)
  }
  return (
    <div className={`container_task_edit ${editIsShown}`}>
      <h1 className="edit Heading">Task Editor :</h1>
      <p className="paraShown">Your Content : {content} </p>
      <input
        value={onChangingstateContentInTodo}
        type="search"
        className="editTask_input"
        placeholder="Enter Edit Task Here !"
        onChange={onChangeEditionContent}
      />
      <br />
      <input
        type="time"
        value={onChangingTimeStateInEdit}
        className="timeEditor"
        onChange={onChangeEditTiming}
      />
      <button
        type="button"
        className="button_edit_task"
        onClick={onEditButtonPress}
      >
        Edit
      </button>
    </div>
  )
}

export default EditTask
