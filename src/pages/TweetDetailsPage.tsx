import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import type { Tweet } from "../types/Tweet";
import { initialTweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { Link } from "react-router-dom";


export function TweetDetailsPage(): ReactElement  {
    const { id } = useParams<{ id: string }>();
    
    
    const tweet: Tweet | undefined = initialTweets.find(
        (candidate) => candidate.id === id
    );
    if (tweet ===  undefined){
        return (
        <div>
        <p>Ce tweet n'existe  pas</p>
        <Link to = "/">Retour à l'acceuil </Link>

        </div>  
    )
    } 

    const replies = initialTweets.filter((candidate) => candidate.parentId === id);
    return(
       <div>
        <nav>

            <Link to="/">Acceuil</Link> &gt;<span>Détail du tweet</span> 
        


        </nav>
    
    <article  key = {id}>
      <TweetPreview  tweet={tweet}  linkToDetail = {false} />
      {replies.length > 0 ? <TweetsList tweets={replies} /> : <p>Aucune réponse</p>}
    </article>

    </div>  
    );

}
