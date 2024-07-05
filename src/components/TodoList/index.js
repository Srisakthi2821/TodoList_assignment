import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Sidebar from '../Sidebar'
import Collection from '../Collections'
import Login from '../Login'
import AddTask from '../AddTask'
import EditTask from '../EditTask'
import ViewAllLists from '../ViewAllLists'
import './index.css'
import Progress from '../Progress'

class TodoApp extends Component {
  state = {
    isDashboardActive: true,
    progressBarstate: {'--value': '60'},
    progressCompleted: {'--value': '40'},
    completedTaskList: [
      {id: uuidv4(), time: '02:15', content: 'Learning html, css and js'},
      {id: uuidv4(), time: '02:15', content: 'Learning react js'},
    ],
    userName: '',
    onChangeUName: '',
    isLoginSuccess: false,
    isaddTaskBarShown: false,
    newTaskDesc: '',
    newTaskTimer: '00:00',
    currentLists: [
      {id: uuidv4(), time: '11', content: 'Take a sun Bath'},
      {id: uuidv4(), time: '05', content: 'Video call with family'},
      {id: uuidv4(), time: '06', content: 'Take Lunch'},
    ],
    originalLists: [
      {id: uuidv4(), time: '11', content: 'Take a sun Bath'},
      {id: uuidv4(), time: '05', content: 'Video call with family'},
      {id: uuidv4(), time: '06', content: 'Take Lunch'},
    ],
    totalTask: 5,
    completedTaskCount: 2,
    inProgressTasksListCount: 3,
    searchbarMain: '',
    isEditBarShown: false,
    parsingEditTaskItem: [],
    onChangingstateContentInTodo: '',
    isCollectionsShows: true,
    onChangingTimeStateInEdit: '',
  }

  sidebarChanging = () => {
    this.setState(prevState => ({
      isDashboardActive: !prevState.isDashboardActive,
      isCollectionsShows: !prevState.isCollectionsShows,
    }))
  }

  updateUname = () => {
    const {onChangeUName} = this.state
    const checkName =
      onChangeUName.length < 1
        ? window.alert('Please Enter Some Name !')
        : this.setState({userName: onChangeUName, isLoginSuccess: true})
  }

  onLogout = () => {
    this.setState(prevState => ({
      userName: '',
      isLoginSuccess: !prevState.isLoginSuccess,
    }))
  }

  gettingUserName = event => {
    this.setState({onChangeUName: event.target.value})
  }

  getTaskDesc = event => {
    this.setState({newTaskDesc: event.target.value})
  }

  getTimeINput = event => {
    this.setState({newTaskTimer: event.target.value})
  }

  onAddingTask = () => {
    const {newTaskTimer, newTaskDesc} = this.state
    const {completedTaskCount, totalTask, inProgressTasksListCount} = this.state
    const newTask = {
      id: uuidv4(),
      time: newTaskTimer,
      content: newTaskDesc,
    }

    const completedPercentage = Math.round(
      (completedTaskCount / totalTask) * 100,
    )
    const inProgressPercentage = 100 - completedPercentage

    this.setState(prevState => ({
      progressBarstate: {'--value': `${inProgressPercentage}`},
      progressCompleted: {'--value': `${completedPercentage}`},
      currentLists: [...prevState.currentLists, newTask],
      originalLists: [...prevState.originalLists, newTask],
      newTaskTimer: '00:00',
      newTaskDesc: '',
      isaddTaskBarShown: !prevState.isaddTaskBarShown,
      totalTask: prevState.totalTask + 1,
      inProgressTasksListCount: prevState.inProgressTasksListCount + 1,
    }))
  }

  enablingTaskBar = () => {
    this.setState(prevState => ({
      isaddTaskBarShown: !prevState.isaddTaskBarShown,
    }))
  }

  onCompletedTask = id => {
    this.setState(
      prevState => {
        const completedTask = prevState.currentLists.find(
          eachItem => eachItem.id === id,
        )

        return {
          currentLists: prevState.currentLists.filter(
            eachItem => eachItem.id !== id,
          ),
          completedTaskList: [...prevState.completedTaskList, completedTask],
          completedTaskCount: prevState.completedTaskCount + 1,
          inProgressTasksListCount: prevState.inProgressTasksListCount - 1,
        }
      },
      () => {
        const {completedTaskCount, totalTask} = this.state
        const completedPercentage = Math.round(
          (completedTaskCount / totalTask) * 100,
        )
        const inProgressPercentage = 100 - completedPercentage

        this.setState({
          progressBarstate: {'--value': `${inProgressPercentage}`},
          progressCompleted: {'--value': `${completedPercentage}`},
        })
      },
    )
  }

  onSearched = event => {
    const searchContains = event.target.value.toUpperCase()
    this.setState(prevState => ({
      searchbarMain: event.target.value,
      currentLists: searchContains
        ? prevState.originalLists.filter(eachItem =>
            eachItem.content.toUpperCase().includes(searchContains),
          )
        : prevState.originalLists,
    }))
  }

  editingTask = id => {
    const {currentLists} = this.state
    const editingTaskItem = currentLists.filter(eachItem => id === eachItem.id)
    this.setState(prevState => ({
      isEditBarShown: !prevState.isEditBarShown,
      parsingEditTaskItem: [editingTaskItem],
    }))
  }

  onEditSuccess = id => {
    const {
      onChangingstateContentInTodo,
      currentLists,
      onChangingTimeStateInEdit,
    } = this.state

    const editingTaskIndex = currentLists.findIndex(item => item.id === id)

    if (editingTaskIndex !== -1) {
      // Update the content or perform other modifications here
      const updatedTask = {
        ...currentLists[editingTaskIndex],
        content: onChangingstateContentInTodo, // Example: Replace with new content
        time: onChangingTimeStateInEdit, // Example: Replace with new time
      }

      const updatedCurrentLists = [
        ...currentLists.slice(0, editingTaskIndex),
        updatedTask,
        ...currentLists.slice(editingTaskIndex + 1),
      ]

      this.setState({
        currentLists: updatedCurrentLists,
        isEditBarShown: false, // Optionally close the edit bar after editing
      })
    } else {
      console.error(`Task with id ${id} not found.`)
    }
  }

  onChangeContentInTodo = event => {
    this.setState({onChangingstateContentInTodo: event.target.value})
  }

  onChangingFunctinoTimeInEdit = event => {
    this.setState({onChangingTimeStateInEdit: event.target.value})
  }

  render() {
    const {
      isDashboardActive,
      progressBarstate,
      progressCompleted,
      completedTaskList,
      userName,
      isLoginSuccess,
      totalTask,
      isaddTaskBarShown,
      newTaskTimer,
      currentLists,
      completedTaskCount,
      inProgressTasksListCount,
      searchbarMain,
      isEditBarShown,
      parsingEditTaskItem,
      onChangingstateContentInTodo,
      onChangingTimeStateInEdit,
      isCollectionsShows,
    } = this.state

    return (
      <div className="background-Todo">
        <div className="card-todo">
          <Sidebar
            isDashboardActive={isDashboardActive}
            sidebarChanging={this.sidebarChanging}
            onLogout={this.onLogout}
          />
          {isCollectionsShows ? (
            <Collection
              listDefaults={currentLists}
              enablingTaskBar={this.enablingTaskBar}
              onCompletedTask={this.onCompletedTask}
              onSearched={this.onSearched}
              editingTask={this.editingTask}
            />
          ) : (
            <div className="containerviewAllLists">
              <h1 className="heading_viewAllTasks">InProgress Tasks list</h1>
              {currentLists.map(eachItem => (
                <ViewAllLists
                  currentContent={eachItem.content}
                  currenttiming={eachItem.time}
                />
              ))}
              <h1 className="heading_viewAllTasks">Completed Tasks list</h1>
              {completedTaskList.map(eachItem => (
                <ViewAllLists
                  currentContent={eachItem.content}
                  currenttiming={eachItem.time}
                />
              ))}
            </div>
          )}

          <Progress
            progressBarstate={progressBarstate}
            progressCompleted={progressCompleted}
            completedTaskList={completedTaskList}
            userName={userName}
            totalTask={totalTask}
            completedTaskCount={completedTaskCount}
            inProgressTasksListCount={inProgressTasksListCount}
          />
        </div>
        <Login
          gettingUserName={this.gettingUserName}
          updateUname={this.updateUname}
          isLoginSuccess={isLoginSuccess}
        />
        <AddTask
          isaddTaskBarShown={isaddTaskBarShown}
          getTimeINput={this.getTimeINput}
          newTaskTimer={newTaskTimer}
          getTaskDesc={this.getTaskDesc}
          onAddingTask={this.onAddingTask}
        />
        <EditTask
          isEditBarShown={isEditBarShown}
          parsingEditTaskItem={parsingEditTaskItem}
          onEditSuccess={this.onEditSuccess}
          onChangeContentInTodo={this.onChangeContentInTodo}
          onChangingstateContentInTodo={onChangingstateContentInTodo}
          onChangingFunctinoTimeInEdit={this.onChangingFunctinoTimeInEdit}
        />
      </div>
    )
  }
}

export default TodoApp
