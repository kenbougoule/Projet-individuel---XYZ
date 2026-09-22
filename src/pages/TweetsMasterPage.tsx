
import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

 export function TweetsMasterPage() {
  return (
    <TweetsList tweets={initialTweets} />
  );
}