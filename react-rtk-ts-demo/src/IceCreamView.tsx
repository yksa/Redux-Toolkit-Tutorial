import React, { useState } from "react";
import { ordered, restocked } from "./app/features/icecream/iceCreamSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { useSelector, useDispatch } from "react-redux";

function IceCreamView() {
  // local state
  const [value, setValue] = useState(1);
  // global state or redux state
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock IceCreams
      </button>
    </div>
  );
}

export default IceCreamView;
