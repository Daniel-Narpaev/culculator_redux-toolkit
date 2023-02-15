import { culculattorActionTypes, } from '../store/culculator/culculatorReduser';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'

const Culculator = () => {
const result = useSelector((state)=>state.culculator.result)
const dispatch = useDispatch()

const addHanler = () => {
  dispatch({type: culculattorActionTypes.ADD, payload: 5 })
}
const subtrctHanler = () => {
  dispatch({type: culculattorActionTypes.SUBTRACT, payload: 10 })
}
const myltiplyHanler = () => {
  dispatch({type: culculattorActionTypes.MULTIPLY, payload: 2 })
}
const divideHanler = () => {
  dispatch({type: culculattorActionTypes.DIVIDE, payload: 4 })
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
