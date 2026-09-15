
import  type {Tweet}  from "../types/Tweet";

export type TweetPreviewProps = {
    tweet: Tweet;

}

export function TweetPreview ( {tweet}:TweetPreviewProps):  React.ReactElement{
    return (
        <div>
            <p> {tweet.content} </p>
            <p> @{tweet.authorHandle} </p>
            <p> {tweet.authorName} </p>
            <p> {new Date(tweet.createdAt).toLocaleDateString()} </p> {/* Convertit la date ISO en texte lisible selon la langue de l'utilisateur */}
           

        </div>
    )

    
}