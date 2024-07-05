import './index.css'

const ViewAllLists = props => {
  const {currentContent, currenttiming} = props
  console.log(currentContent, currenttiming)
  return (
    <div className="listitem_all_items">
      <p className="para_content_all_tasks">Content: {currentContent}</p>
      <p className="time_all_tasks">Time: {currenttiming}</p>
    </div>
  )
}

export default ViewAllLists
