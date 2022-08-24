import { legacy_createStore as createStore } from "redux";
import React from "react";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reseted":
      return 0;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// actions
const actionIncremented = {
  type: "@counter/incremented",
};
const actionDecremented = {
  type: "@counter/decremented",
};
const actionReset = {
  type: "counter/reseted",
};

store.subscribe( () => {
    //console.log(store.getState())
    document.body.innerHTML = store.getState();
}); // permite actualizar la UI cada vez que encontremos un cambio en el estado

store.dispatch(actionIncremented);
store.getState();

function GlobalRedux() {
  return (
    <>
      <br />
      <div>{store.getState()}</div>
      <br />
      <div>
        <button onClick={() => store.dispatch(actionIncremented)}>+</button>
        <button onClick={() => store.dispatch(actionDecremented)}>-</button>
      </div>
      <br />
      <button onClick={() => store.dispatch(actionReset)}>Reset</button>
    </>
  );
}

export default GlobalRedux;
