import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import type { Tweet } from "../types/Tweet";
import { initialTweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";

export function TweetDetailsPage(): ReactElement  {
    const { id } = useParams<{ id: string }>();
    const tweet: Tweet | undefined = initialTweets.find(
        (candidate) => candidate.id === id
    );
    if (tweet ===  undefined){
        return<p>Ce tweet ne correspond pas</p>
    } 

    const replies = initialTweets.filter((candidate) => candidate.parentId === id);
    return(
    
    <article>
      <TweetPreview  tweet={tweet} />
      {replies.length > 0 ? <TweetsList tweets={replies} /> : <p>Aucune réponse</p>}
    </article>
    );

}
