import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changename, increase } from "../../Redux/counterSlice";
import { addToDo, removeTODo } from "../../Redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  let { counter, todo } = useSelector((data) => data); // inside reducer
  let dispush = useDispatch(); // to return reduce fun
  return (
    <div>
      <p>Home</p>
      <h1>counter {counter.value}</h1>
      <h1> {counter.name}</h1>
      <button className="btn btn-primary" onClick={() => dispush(increase())}>
        increase
      </button>
      <button className="btn btn-warning" onClick={() => dispush(changename())}>
        change
      </button>
      <hr />
      <input
        type="text"
        className="from-control w-50"
        onKeyDown={(e) =>
          (e.key === "Enter") &&
          dispush(addToDo({ id: uuidv4(), type: e.target.value }))
        }
      />
      <ul>
        {todo.fruits.map((fruit) => (
          <>
          <li key={fruit.id}>{fruit.type}</li>
          <button className="btn btn-danger" onClick={()=>dispush(removeTODo(fruit.id))}>-</button>
          </>
        ))}
      </ul>
    </div>
  );
}
