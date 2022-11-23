import { useState, useEffect, useReducer } from "react";
import "./index.css";

export function NavigationArrows({ props }) {
  //function
  //get week id
  //change week by +1 or -1
  //set state to new week Id
  // render page with new url (changed weekId)
  //const[weekId, setWeekId] =useState(count)
  const initialState = 1;

  const [count, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state <= 1) {
          return initialState;
        } else {
          return state - 1;
        }
      default:
        return state;
    }
  }

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>Previous </button>
      <button onClick={() => dispatch({ type: "increment" })}> Next</button>
      <p>{count}</p>
    </div>
  );
}

// async function getWeekById (){

// }

// http:localhost/week{id}/wedn (+1/-1)

//var Prectdate = new Date();
//date.setDate(date.getDate() - 7);
//<p>{DayOfWeek}<p/>

// async function NextWeek() {}
//onClick={props.PreviousWeek}>Previous
//onClick={props.NextWeek}>Next
