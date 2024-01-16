import { TableItem } from "./TableItem";

export const StepsTable = ({workoutList, workoutRemove}) => {
  return (
    <div className='steps-table'>
      <div className="table-headers">
        <h3 className="table-header">Дата (гг.мм.дд)</h3>
        <h3 className="table-header">Пройдено, км</h3>
        <h3 className="table-header">Действия</h3>
      </div>
      <div className='table-body'>
      {workoutList.map(workout => <TableItem 
        key={workout.id} 
        workout={workout}
        workoutRemove={workoutRemove} 
      />)}
      </div>
    </div>
  )
}