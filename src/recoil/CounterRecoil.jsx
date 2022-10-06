import { useRecoilState, useRecoilValue } from 'recoil'
import { counterState, userSetter } from './counter'
import Button from './Button'

const CounterRecoil = () => {
  const [counter, setCounter] = useRecoilState(counterState)
  const { user } = useRecoilValue(userSetter)

  return (
    <div>
      <h2>Learn Recoil</h2>
      <div>
        { user.name }
      </div>
      <Button method={() => setCounter(counter + 1)}>Tambah</Button>
      <span>{counter}</span>
      <Button method={() => setCounter(counter - 1)}>Kurang</Button>
    </div>
  )
}

export default CounterRecoil