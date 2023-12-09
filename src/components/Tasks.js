import Task from "./Task";

// const tasks = [
//   {
//     id: 1,
//     text: "Doctor's appointment",
//     day: "Feb 5th at 2:30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Meeting at school",
//     day: "Feb 6th at 1:30pm",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Food Shopping",
//     day: "Feb 5th at 2:30pm",
//     reminder: false,
//   },
// ];

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;


// useState - returns a stateful value and a function to update it
// useEffects - performs aside effects in function components
// useContext, useReducer, useRef - beyond the scope of this course