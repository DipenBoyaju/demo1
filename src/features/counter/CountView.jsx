import { Button } from "@material-tailwind/react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "./counterSlice";
import { decre, incre, reset } from "./Counter1Slice";

const CountView = () => {

  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counterSlice);
  const { count1 } = useSelector((state) => state.counterSlice1)
  console.log(count);
  console.log(count1);
  return (
    <div>
      <div className="p-4">
        <h1 className="uppercase text-center p-4 font-bold">Counter</h1>
        <Button ripple={true} onClick={() => dispatch(reset())}>Reset</Button>
        <h1>This is count State</h1>
        <h2>{count}</h2>
        <Button ripple="true" size="sm" className="bg-green-400" onClick={() => dispatch(increment())}>Increment</Button>
        <Button ripple={true} size="sm" className="bg-red-400" onClick={() => dispatch(decrement())}>Decrement</Button>
        <h1>This is Count1 State</h1>
        <h2>{count1}</h2>
        <Button ripple={true} size="sm" className="bg-indigo-400" onClick={() => dispatch(incre())}>Increment</Button>
        <Button ripple={true} size="sm" className="bg-pink-300" onClick={() => dispatch(decre())}>Decrement</Button>
      </div>
    </div>
  )
}
export default CountView