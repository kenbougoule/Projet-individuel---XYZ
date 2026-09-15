
import  type {Tweet}  from "../types/Tweet";

export type TweetPreviewProps = {
    tweet: Tweet;

}

export function TweetPreview ( {tweet}:TweetPreviewProps):  React.ReactElement{
    return (
        <div>
            {tweet.image && <img src={tweet.image.url} alt={tweet.image.alt} className="tweet-image" />} {/* Affiche l'image uniquement si le tweet en possède une */}
            <p> {tweet.content} </p>
            <p> @{tweet.authorHandle} </p>
            <p> {tweet.authorName} </p>
            <p> {new Date(tweet.createdAt).toLocaleDateString()} </p> {/* Convertit la date ISO en texte lisible selon la langue de l'utilisateur */}
           

        </div>
    )

    
    
}