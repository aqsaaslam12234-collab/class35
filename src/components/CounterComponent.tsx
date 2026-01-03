import { useCounterStore } from "../store/UseCounterStore"

const CounterComponent = () => {
    const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button className="increment-btn" onClick={increment}>Increment</button>
      <button className="decrement-btn" onClick={decrement}>Decrement</button>
      <button className="reset-btn" onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComponent
