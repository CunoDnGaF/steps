export const TableItem = ({workout, workoutRemove}) => {
  const {date, distance, id} = workout;

    if(date === '' || distance === '') return;

    return (
      <div className="table-item">
          <p>{date}</p>
          <p>{distance}</p>
          <button 
            type='button' 
            onClick={() => workoutRemove(id)}
            className="table-item-btn"
          >
          </button>
      </div>
    )
  }