import {Component} from 'react'
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

const date = new Date()
const day = dayNames[date.getDay()]
const dayNumber = date.getDate()
const dayShortHand = day.slice(0, 3)
const month = monthNames[date.getMonth()]
const year = date.getFullYear()

class Collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todaysDayNumber: dayNumber,
      todaysMonth: month,
      todaysDay: day,
      todaysYear: year,
      todayShortHand: dayShortHand,
      nextSevenDays: [],
    }
  }

  componentDidMount() {
    this.generateNextSevenDays()
  }

  onEdittask = id => {
    const {editingTask} = this.props
    editingTask(id)
  }

  generateNextSevenDays = () => {
    const nextSevenDays = []
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date()
      currentDate.setDate(currentDate.getDate() + i)
      const dayName = dayNames[currentDate.getDay()]
      const dayNum = currentDate.getDate()
      const monthName = monthNames[currentDate.getMonth()]
      const secondDayShorthand = dayName.slice(0, 3)
      const yearNum = currentDate.getFullYear()
      nextSevenDays.push({
        dayName,
        dayNum,
        monthName,
        yearNum,
        secondDayShorthand,
      })
    }
    this.setState({nextSevenDays})
  }

  onAddTaskEnable = () => {
    const {enablingTaskBar} = this.props
    enablingTaskBar()
  }

  searchList = () => {
    const {onSearched} = this.props
    const onChangingSearch = onSearched
    onChangingSearch(event)
  }

  render() {
    const {
      todaysDayNumber,
      todaysMonth,
      todaysDay,
      todaysYear,
      todayShortHand,
      nextSevenDays,
      tasksList,
    } = this.state
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
          <i className="far fa-bell"></i>
        </div>
        <div className="container_todo_intro">
          <div className="todoIntro_part1">
            <h1 className="intro_todo">
              Organize your task More <br />
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
                <i className="far fa-calendar-alt"></i> {todaysDayNumber}th{' '}
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
                {listDefaults.map(eachitem => (
                  <TaskItem
                    eachItem={eachitem}
                    onEdittask={this.onEdittask}
                    onCompletedTask={onCompletedTask}
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
