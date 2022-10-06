import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from './counterSlice'
import styles from './Counter.module.css'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Learn Redux</h1>
      <div>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className={styles.asyncButton}
          aria-label="Increment value"
          onClick={() => dispatch(incrementAsync())}
        >
          Increment Async
        </button>
        <span>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter