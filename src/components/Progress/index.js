import CompletedItem from '../CompletedItem'
import './index.css'

const Progress = props => {
  const {
    progressBarstate,
    progressCompleted,
    completedTaskList,
    userName,
    totalTask,
    completedTaskCount,
    inProgressTasksListCount,
  } = props
  return (
    <div className="contaiener_progress">
      <div className="userContainer">
        <div className="profileUser"></div>
        <h1 className="userNameText">Hi {userName} !</h1>
      </div>
      <div className="PerformanceContainer">
        <h1 className="heading_performance">My Performance :</h1>
        <div className="card_performance">
          <p className="text_date_totalTasks">
            April 2024
            <span className="tTaskText">
              (Total tasks <span className="totalTasks">{totalTask}</span>)
            </span>
          </p>
          <div className="item_performance_container">
            <div className="item_part1_performance">
              <p className="progress_completed">
                <span className="completedCount">{completedTaskCount}</span>
                Completed
              </p>
            </div>
            <div className="item_part2_performance">
              <div
                className="progressbarStyling"
                role="progressbar"
                aria-valuenow="67"
                aria-valuemin="0"
                aria-valuemax="100"
                style={progressCompleted}
              ></div>
            </div>
          </div>
          <div className="item_performance_container">
            <div className="item_part1_performance">
              <p className="progress_completed">
                <span className="completedCount">
                  {inProgressTasksListCount}
                </span>
                In Progress
              </p>
            </div>
            <div className="item_part2_performance">
              <div
                className="progressbarStyling"
                role="progressbar"
                aria-valuenow="67"
                aria-valuemin="0"
                aria-valuemax="100"
                style={progressBarstate}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="completedTasks_heading">Completed Tasks :</h1>
      <ul className="completetItemsContaner">
        {completedTaskList.map(eachitem => (
          <CompletedItem eachitem={eachitem} />
        ))}
      </ul>
    </div>
  )
}
export default Progress
