import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({ tweets, newTweet, setNewTweet, setTweets }) => {
  const onCreateTweet = () => {
    setTweets([...tweets, { message: newTweet, id: uuidv4()}])
    setNewTweet('')
  }
  return (
    <div>
      <h2>Form binding</h2>
      <input type="text" value={newTweet} onChange={(e) => setNewTweet(e.target.value)} />
      <button onClick={onCreateTweet}>Tweet</button>
    </div>
  )
}

export default CreateTweet