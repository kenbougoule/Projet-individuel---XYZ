
import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

 export function TweetsMasterPage() {

    const tweeted = initialTweets.filter((tweet)  => tweet.parentId === undefined); 
  return (
    <TweetsList tweets={tweeted} />
  );
}