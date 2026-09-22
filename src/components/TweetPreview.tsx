
import  type {Tweet}  from "../types/Tweet";
import { useState } from "react";
import { Link } from "react-router-dom";

export type TweetPreviewProps = {
    tweet: Tweet;

}

export function TweetPreview ( {tweet}:TweetPreviewProps):  React.ReactElement{

    const [isExpanded, setIsExpanded ] = useState(false); // État React qui indique si le tweet est développé (contenu complet visible) ou réduit (contenu tronqué)
    const isLong = tweet.content.length > 180;
    const displayedContent = (isLong && !isExpanded) ? tweet.content.slice(0, 180) +"..." : tweet.content;
  
    return (
        <div>
            
        {tweet.image &&  (
            <Link to={`/tweets/${tweet.id}`}>
                 <img src={tweet.image.url} alt={tweet.image.alt} className="tweet-image" /> {/* Affiche l'image uniquement si le tweet en possède une */}
            </Link>
            
        )}
            <Link to={`/tweets/${tweet.id}`}>
                 <p> {displayedContent} </p>
            </Link>

                {isLong && (<button onClick={() => setIsExpanded((etatActuel) => !etatActuel )}>
                   {isExpanded ? "Voir moins": "Voir plus"}

                  </button>)}

                <p> @{tweet.authorHandle} </p>

            <p> {tweet.authorName} </p>
            <p> {new Date(tweet.createdAt).toLocaleDateString()} </p> {/* Convertit la date ISO en texte lisible selon la langue de l'utilisateur */}
           

        </div>
    )

    
    
}