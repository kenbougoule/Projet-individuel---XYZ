import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type  TweetsListProps =  {
    tweets: Array<Tweet>;

}; 
export function TweetsList ({tweets}: TweetsListProps): React.ReactElement{
    return(
    <div>
      {tweets.map((tweet)=>(
        <TweetPreview key={tweet.id} tweet={tweet} />

      ))}
    </div>);
}