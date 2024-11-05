import { useEffect, useState } from 'react';
import { decrement, increment } from '../redux/feature/CounterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const Reducer = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.count);

  useEffect(() => {
    // Show the box if the count is a multiple of 5
    if (count > 0 && count % 5 === 0) {
      setIsBoxVisible(true);
    } else {
      setIsBoxVisible(false);
    }
  }, [count]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div className="text-center">
      <h1>{count}</h1>
      <div className="text-center m-3">
        <button
          onClick={handleIncrement}
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
      {/* Show the box only if count is 5 or more */}
      {isBoxVisible && <div className="m-3 p-3 bg-gray-300">Box Created!</div>}
    </div>
  );
};

export default Reducer;
