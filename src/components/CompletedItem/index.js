import './index.css'

const CompletedItem = props => {
  const {eachitem} = props
  const {content} = eachitem
  return (
    <div className="container_completedItem">
      <p className="para_completedItemTask">{content}</p>
    </div>
  )
}

export default CompletedItem
