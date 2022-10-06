const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter(val => val.id !== tweet.id))
  }
  
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{tweet.message}</p>
      <div>
        <button onClick={deleteTweet}>Delete</button>
        <button>Like</button>
      </div>
    </div>
  )
}

export default Tweet