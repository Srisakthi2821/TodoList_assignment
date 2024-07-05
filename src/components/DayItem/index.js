import './index.css'

const Dayitem = props => {
  const {dateItem, todaysDayNumber} = props
  const {secondDayShorthand, dayNum} = dateItem
  const currentDayStyling = todaysDayNumber === dayNum ? 'active_day' : ''
  return (
    <div className={`container_dateitem_at ${currentDayStyling}`}>
      <h2 className="day_at">{secondDayShorthand}</h2>
      <p className="date_at">{dayNum}</p>
    </div>
  )
}

export default Dayitem
