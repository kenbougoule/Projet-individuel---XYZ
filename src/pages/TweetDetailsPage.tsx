import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import type { Tweet } from "../types/Tweet";
import { initialTweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";

export function TweetDetailsPage(): ReactElement  {
    const { id } = useParams<{ id: string }>();
    const tweet: Tweet | undefined = initialTweets.find(
        (candidate) => candidate.id === id
    );
    if (tweet ===  undefined){
        return<p>Ce tweet ne correspond pas</p>
    } 
    return(
    
    <article>
      <TweetPreview  tweet={tweet} />
    </article>
    );

}
