import { useRecoilState } from 'recoil'
import { counterState } from './counter'

const Button = ({children, method}) => {
  const [counter, setCounter] = useRecoilState(counterState)

  return (
    <div>
      <button onClick={method}>{children}</button>
    </div>
  )
}

export default Button