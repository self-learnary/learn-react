import { useState, Suspense, lazy } from 'react'
import CreateTweet from './components/CreateTweet'
import Tweets from './components/Tweets'
import CounterRecoil from './recoil/CounterRecoil'
import { RecoilRoot } from 'recoil'

const Counter = lazy(() => import('./features/counter/Counter'))

const App = () => {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([])
  const name = 'RSurya99'

  return (
    <div>
      <h1>Learn React</h1>
      <CreateTweet newTweet={newTweet} setNewTweet={setNewTweet} setTweets={setTweets} tweets={tweets} />
      <Tweets tweets={tweets} name={name} setTweets={setTweets} />
      <Suspense fallback={<div>loading...</div>}>
        <Counter />
      </Suspense>
      <div>
        <RecoilRoot>
          <Suspense fallback={<div>loading</div>}>
            <CounterRecoil />
          </Suspense>
        </RecoilRoot>
      </div>
    </div>
  )
}

export default App
