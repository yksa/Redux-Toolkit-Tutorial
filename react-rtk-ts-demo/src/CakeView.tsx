import { ordered, restocked } from "./app/features/cake/cakeSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { useSelector, useDispatch } from "react-redux";

function CakeView() {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
    </div>
  );
}

export default CakeView;
