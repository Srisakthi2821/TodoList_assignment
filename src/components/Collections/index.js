import React, {Component} from 'react'
import Dayitem from '../DayItem'
import TaskItem from '../TaskItem'
import './index.css'

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function getDayItem(offset) {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + offset)
  const dayName = dayNames[currentDate.getDay()]
  const dayNum = currentDate.getDate()
  const monthName = monthNames[currentDate.getMonth()]
  const yearNum = currentDate.getFullYear()
  const secondDayShorthand = dayName.slice(0, 3)

  return {
    dayName,
    dayNum,
    monthName,
    yearNum,
    secondDayShorthand,
  }
}
// Predefined list of the next seven days
const nextSevenDays = [
  getDayItem(0),
  getDayItem(1),
  getDayItem(2),
  getDayItem(3),
  getDayItem(4),
  getDayItem(5),
  getDayItem(6),
]
class Collection extends Component {
  constructor(props) {
    super(props)
    const date = new Date()
    this.state = {
      todaysDayNumber: date.getDate(),
      todaysMonth: monthNames[date.getMonth()],
      todaysDay: dayNames[date.getDay()],
      todaysYear: date.getFullYear(),
    }
  }

  onEdittask = id => {
    const {editingTask} = this.props
    editingTask(id)
  }

  onAddTaskEnable = () => {
    const {enablingTaskBar} = this.props
    enablingTaskBar()
  }

  searchList = event => {
    const {onSearched} = this.props
    onSearched(event)
  }

  deleteThetaskRt = id => {
    const {detegingTaskItem} = this.props
    detegingTaskItem(id)
  }

  render() {
    const {todaysDayNumber, todaysMonth, todaysDay, todaysYear} = this.state

    const {listDefaults, onCompletedTask} = this.props

    return (
      <div className="container-collections">
        <div className="container_searches">
          <input
            onChange={this.searchList}
            type="search"
            className="searchbar"
            placeholder="Search Task . . . ."
          />
          <i className="far fa-bell" />
        </div>
        <div className="container_todo_intro">
          <div className="todoIntro_part1">
            <h1 className="intro_todo">
              Organize your tasks More <br />
              Easily With
              <span className="logoName"> ListFly</span>
            </h1>
            <button className="addTaskButton" onClick={this.onAddTaskEnable}>
              Add task
            </button>
          </div>
          <div className="todoIntro_part2">
            <div className="todayDate_card">
              <p className="date_todointro">
                <i className="far fa-calendar-alt" /> {todaysDayNumber}th{' '}
                {todaysMonth} {todaysYear}
              </p>
              <h1 className="day_todoIntro">{todaysDay}</h1>
            </div>
          </div>
        </div>
        <div className="main_container_todoItems">
          <h1 className="mytaskHeading">My Tasks :</h1>
          <div className="card_my_tasks">
            <div className="alltasks_dateContainer">
              <div className="dateallContainer_at">
                <ul className="list_date_all_tasks">
                  {nextSevenDays.map((dateItem, index) => (
                    <Dayitem
                      dateItem={dateItem}
                      todaysDayNumber={todaysDayNumber}
                    />
                  ))}
                </ul>
              </div>
              <div className="taskscollection">
                {listDefaults.map((eachitem, index) => (
                  <TaskItem
                    eachItem={eachitem}
                    onEdittask={this.onEdittask}
                    onCompletedTask={onCompletedTask}
                    deleteThetaskRt={this.deleteThetaskRt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collection
