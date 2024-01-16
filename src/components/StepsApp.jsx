import { useState } from "react";
import { StepsForm } from "./StepsForm";
import { StepsTable } from "./StepsTable/StepsTable";
import uuid from 'react-uuid';

export const StepsApp = () => {
  const [workoutList, setWorkoutList] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    let data = {
      date: e.target.date.value,
      distance: Number(e.target.distance.value),
    }
    
    let workoutByDate = workoutList.findIndex((workout) => workout.date === data.date);

    if(workoutByDate > -1) {
      let newWorkoutList = workoutList;
      newWorkoutList[workoutByDate].distance += data.distance;
      setWorkoutList([...newWorkoutList]);
    } else {
      setWorkoutList([{...data, id: uuid()}, ...workoutList]);
    }
  }

  function sortworkoutList(workoutList) {
    return [...workoutList].sort((a,b) => new Date(b.date) - new Date(a.date));
  }

  function workoutRemove(id) {
    setWorkoutList(workoutList.filter(workout => workout.id !== id));
  }

  return (
    <div className="steps-container">
      <StepsForm
      submitForm={submitForm} 
      />
      <StepsTable 
      workoutList={sortworkoutList(workoutList)}
      workoutRemove={workoutRemove}
      />
    </div>
  )
}