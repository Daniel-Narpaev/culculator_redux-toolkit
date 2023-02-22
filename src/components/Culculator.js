import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { culculatorActions } from '../store/slice/culculatorSlice';

const Culculator = () => {
const result = useSelector((state)=>state.culculator.result)
const dispatch = useDispatch()
console.log(result);
const addHanler = () => {
  dispatch(culculatorActions.add(5))
}
const subtrctHanler = () => {
  dispatch(culculatorActions.subtract(10))
}
const myltiplyHanler = () => {
  dispatch(culculatorActions.multiply(2))
}
const divideHanler = () => {
  dispatch(culculatorActions.divide(4))
}
  return (
    <main className={classes.counter}>
      <h1>Redux Culculator</h1>
      <div className={classes.value}>Result:{result}</div>
      <button onClick={addHanler}>+5</button>
      <button onClick={subtrctHanler}>-10</button>
      <button onClick={myltiplyHanler}>*2</button>
      <button onClick={divideHanler}>/4</button>
    </main>
  );
};

export default Culculator;
