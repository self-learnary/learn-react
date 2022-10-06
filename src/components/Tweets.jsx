import Tweet from './Tweet'

const Tweets = ({ name, tweets, setTweets }) => {
  return (
    <div>
      <h2>Tweets</h2>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} name={name} tweet={tweet} setTweets={setTweets} tweets={tweets} />
      ))}
    </div>
  )
}

export default Tweets