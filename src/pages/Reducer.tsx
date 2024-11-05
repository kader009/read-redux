import { decrement, increment } from '../redux/feature/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const Reducer = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.count);

  return (
    <div className="text-center">
      <h1>{count}</h1>
      <div className="text-center m-3">
        <button
          onClick={() => dispatch(increment())}
          className="bg-black text-white p-2 rounded m-1"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-black text-white p-2 rounded m-1"
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Reducer;
